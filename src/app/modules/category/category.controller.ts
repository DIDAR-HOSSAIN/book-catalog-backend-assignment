import { Request, Response } from "express"
import httpStatus from "http-status"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import { CategoryService } from "./category.service"

const createCategory = catchAsync(async (req:Request, res:Response) => {

    const result = await CategoryService.createCategory(req.body)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Category Created Successfully",
        data: result
    })
    
})

const getCategories = catchAsync(async (req:Request, res:Response) => {

    const result = await CategoryService.getUCategories()

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Categories retrieved Successfully",
        data: result
    })
    
})

const getCategory = catchAsync(async (req:Request, res:Response) => {

    const result = await CategoryService.getCategory(req.params.id)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Category retrieved Successfully",
        data: result
    })
    
})

const updateCategory = catchAsync(async (req:Request, res:Response) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await CategoryService.updateCategory(id, payload)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Category updated Successfully",
        data: result
    })
    
})

const deleteCategory = catchAsync(async (req:Request, res:Response) => {
    const id = req.params.id;
    const result = await CategoryService.deleteCategory(id)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Category deleted Successfully",
        data: result
    })
    
})









export const CategoryController = {
    createCategory,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory
}