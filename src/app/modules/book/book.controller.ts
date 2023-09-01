import { Request, Response } from "express"
import httpStatus from "http-status"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import pick from "../../../shared/pick"
import { bookFilterableFields } from "./book.constraint"
import { BookService } from "./book.service"

const createBook = catchAsync(async (req:Request, res:Response) => {

    const result = await BookService.createBook(req.body)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Book Created Successfully",
        data: result
    })
    
})

const getBooks = catchAsync(async (req:Request, res:Response) => {
    const filters = pick(req.query, bookFilterableFields);
    const options = pick(req.query, ['page', 'limit', 'sortBy', 'sortOrder']); 
    const result = await BookService.getBooks(filters, options)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Books retrieved Successfully",
        // data: result
        meta: result.meta,
        data: result.data
    })
    
})


const getBooksByCategoryId = catchAsync(async (req: Request, res: Response)=> {
      const { categoryId } = req.params;
      const result = await BookService.getBooksByCategoryId(categoryId);
  
      sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Books retrieved by category id",
        data: result
        // meta: result.meta,
        // data: result.data
    })
    })
  

const getBook = catchAsync(async (req:Request, res:Response) => {

    const result = await BookService.getBook(req.params.id)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Book retrieved Successfully",
        data: result
    })
    
})

const updateBook = catchAsync(async (req:Request, res:Response) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await BookService.updateBook(id, payload)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Book updated Successfully",
        data: result
    })
    
})

const deleteBook = catchAsync(async (req:Request, res:Response) => {
    const id = req.params.id;
    const result = await BookService.deleteBook(id)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Book deleted Successfully",
        data: result
    })
    
})









export const BookController = {
    createBook,
    getBooks,
    getBooksByCategoryId,
    getBook,
    updateBook,
    deleteBook
}