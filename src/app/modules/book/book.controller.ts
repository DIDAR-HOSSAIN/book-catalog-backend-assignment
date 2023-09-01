import { Request, Response } from "express"
import httpStatus from "http-status"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import { CategoryService } from "./book.service"
import pick from "../../../shared/pick"
import { bookFilterableFields } from "./book.constraint"

const createBook = catchAsync(async (req:Request, res:Response) => {

    const result = await CategoryService.createBook(req.body)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Book Created Successfully",
        data: result
    })
    
})

const getBooks = catchAsync(async (req:Request, res:Response) => {
    const filters = pick(req.query, bookFilterableFields) 
    const options = pick(req.query, ['page', 'limit', 'sortBy', 'sortOrder']) 
    const result = await CategoryService.getBooks(filters, options)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Books retrieved Successfully",
        data: result
        // meta: result.meta,
        // data: result.data
    })
    
})

const getBook = catchAsync(async (req:Request, res:Response) => {

    const result = await CategoryService.getBook(req.params.id)

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
    const result = await CategoryService.updateBook(id, payload)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Book updated Successfully",
        data: result
    })
    
})

const deleteBook = catchAsync(async (req:Request, res:Response) => {
    const id = req.params.id;
    const result = await CategoryService.deleteBook(id)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Book deleted Successfully",
        data: result
    })
    
})









export const CategoryController = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook
}