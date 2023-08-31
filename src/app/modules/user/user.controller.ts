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









export const UserController = {
    createUser,
}