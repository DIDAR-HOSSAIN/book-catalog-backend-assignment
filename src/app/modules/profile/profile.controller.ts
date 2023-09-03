import { Request, Response } from "express"
import httpStatus from "http-status"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import { ProfileService } from "./profile.service"



const getProfiles = catchAsync(async (req:Request, res:Response) => {

    const result = await ProfileService.getProfiles()

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Users retrieved Successfully",
        data: result
    })
    
})







export const ProfileController = {
    getProfiles
}