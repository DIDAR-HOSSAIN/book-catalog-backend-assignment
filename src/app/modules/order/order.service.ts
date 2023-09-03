import { Order } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { asyncForEach } from "../../../shared/utils";


const createOrder = async (data:any) => {
    try {
      const { userId, orderedBooks } = data;
      const result:any = [];
  
      // Ensure that bookIds is an array
      if (!Array.isArray(orderedBooks)) {
        throw new Error("Invalid orderedBooks data. Expected an array.");
      }
  
      await asyncForEach(orderedBooks, async (bookData:any) => {
        const { bookId, quantity } = bookData;
        const insertIntoOrder = await prisma.order.create({
          data: {
            userId,
            bookId,
            quantity,
          },
        });
  
        result.push(insertIntoOrder);
      });
  
      return result;
    } catch (error) {
      throw error;
    }
  };



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
    createOrder,
    getOrders,
    getOrder,
    updateOrder,
    deleteOrder
}