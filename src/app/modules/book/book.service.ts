import { Book, Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { IBookFilterRequest } from "./book.interface";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { IGenericResponse } from "../../../interfaces/common";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { bookRelationalFields, bookRelationalFieldsMapper, bookSearchableFields } from "./book.constraint";

const createBook = async(data:Book):Promise<Book>=>{
    const result = await prisma.book.create({
        data,
        include:{
            category:true
        }
    })

    return result;
}

const getBooks = async(filters:IBookFilterRequest, options:IPaginationOptions):Promise<IGenericResponse<Book[]>>=>{
    const {limit, page, skip} = paginationHelpers.calculatePagination(options);
    const {searchTerm, ...filterData} = filters

    const andConditions = [];

    if(searchTerm){
        andConditions.push({
            OR:bookSearchableFields.map((field)=>({
                [field]:{
                    contains:searchTerm,
                    mode:'insensitive'
                }
            }))
        })
    }

    if(Object.keys (filterData).length >0 ){
        andConditions.push({
            AND: Object.keys(filterData).map((key)=>{
                if(bookRelationalFields.includes(key)){
                    return {
                        [bookRelationalFieldsMapper[key]]:{
                            id: (filterData as any)[key]
                        }
                    }
                }else{
                    return {
                        [key]:{
                            equals:(filterData as any)[key]
                        }
                    }
                }
            })
        })
    }


    const whereConditions: Prisma.BookWhereInput = andConditions.length > 0 ? {AND: andConditions} : {};

    const result = await prisma.book.findMany({
        where:whereConditions,
        skip,
        take:limit,
        orderBy: 
        options.sortBy && options.sortOrder ? 
        {
            [options.sortBy]: options.sortOrder 
        } 
        :
        {title: 'desc'}
    })

    const total = await prisma.book.count();

    return {
        meta:{
            page,
            limit,
            total
        },
        data:result
    };
}


const getBooksByCategoryId = async(categoryId:string)=> {
    const result = await prisma.book.findMany({
    where: {
        categoryId
      }

    })
  
    return result;
  }


const getBook = async(id:string)=>{
    const result = await prisma.book.findUnique({
        where:{
            id
        }
    })

    return result;
}

const updateBook = async(id:string, payload:Partial<Book>):Promise<Book>=>{
    const result = await prisma.book.update({
        where:{
            id
        },
        data: payload
    })

    return result;
}


const deleteBook = async(id:string):Promise<Book>=>{
    const result = await prisma.book.delete({
        where:{
            id
        }
    })

    return result;
}





export const BookService = {
    createBook,
    getBooks,
    getBooksByCategoryId,
    getBook,
    updateBook,
    deleteBook
}