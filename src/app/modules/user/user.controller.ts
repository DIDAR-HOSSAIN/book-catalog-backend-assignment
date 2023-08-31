import { Request, Response } from "express"
import { UserService } from "./user.service"
import httpStatus from "http-status"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"

const createUser = catchAsync(async (req:Request, res:Response) => {

    const result = await UserService.createUser(req.body)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "User Created Successfully",
        data: result
    })
    
})

const getUsers = catchAsync(async (req:Request, res:Response) => {

    const result = await UserService.getUsers()

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Users retrieved Successfully",
        data: result
    })
    
})

const getUser = catchAsync(async (req:Request, res:Response) => {

    const result = await UserService.getUser(req.params.id)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "User retrieved Successfully",
        data: result
    })
    
})

const updateUser = catchAsync(async (req:Request, res:Response) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await UserService.updateUser(id, payload)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "User updated Successfully",
        data: result
    })
    
})

const deleteUser = catchAsync(async (req:Request, res:Response) => {
    const id = req.params.id;
    const result = await UserService.deleteUser(id)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "User deleted Successfully",
        data: result
    })
    
})









export const UserController = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}