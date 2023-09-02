import { Order } from "@prisma/client";
import prisma from "../../../shared/prisma";



const getOrders = async()=>{
    const result = await prisma.order.findMany()

    return result;
}

const getOrder = async(id:string)=>{
    const result = await prisma.order.findUnique({
        where:{
            id
        }
    })

    return result;
}

const updateOrder = async(id:string, payload:Partial<Order>):Promise<Order>=>{
    const result = await prisma.order.update({
        where:{
            id
        },
        data: payload
    })

    return result;
}


const deleteOrder = async(id:string):Promise<Order>=>{
    const result = await prisma.order.delete({
        where:{
            id
        }
    })

    return result;
}





export const OrderService = {
    getOrders,
    getOrder,
    updateOrder,
    deleteOrder
}