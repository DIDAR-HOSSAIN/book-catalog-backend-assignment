import { Category } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createCategory = async(data:Category):Promise<Category>=>{
    const result = await prisma.category.create({
        data
    })

    return result;
}

const getUCategories = async()=>{
    const result = await prisma.category.findMany()

    return result;
}

const getCategory = async(id:string)=>{
    const result = await prisma.category.findUnique({
        where:{
            id
        },
        include:{
            books:true
        }
    })

    return result;
}

const updateCategory = async(id:string, payload:Partial<Category>):Promise<Category>=>{
    const result = await prisma.category.update({
        where:{
            id
        },
        data: payload
    })

    return result;
}


const deleteCategory = async(id:string):Promise<Category>=>{
    const result = await prisma.category.delete({
        where:{
            id
        }
    })

    return result;
}





export const CategoryService = {
    createCategory,
    getUCategories,
    getCategory,
    updateCategory,
    deleteCategory
}