import { Request, Response } from "express"
import httpStatus from "http-status"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"


const getOrders = catchAsync(async (req:Request, res:Response) => {

    const result = await OrderService.getOrders()

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Orders retrieved Successfully",
        data: result
    })
    
})

const getOrder = catchAsync(async (req:Request, res:Response) => {

    const result = await OrderService.getOrder(req.params.id)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Order retrieved Successfully",
        data: result
    })
    
})

const updateOrder = catchAsync(async (req:Request, res:Response) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await OrderService.updateOrder(id, payload)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Order updated Successfully",
        data: result
    })
    
})

const deleteOrder = catchAsync(async (req:Request, res:Response) => {
    const id = req.params.id;
    const result = await OrderService.deleteOrder(id)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: "Order deleted Successfully",
        data: result
    })
    
})





export const OrderController = {
    getOrders,
    getOrder,
    updateOrder,
    deleteOrder
}