import { Order } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { asyncForEach } from "../../../shared/utils";


const createOrder = async (authUserId: string, data: any) => {
  try {
    const { orderedBooks } = data;

    // Ensure that orderedBooks is an array
    if (!Array.isArray(orderedBooks)) {
      throw new Error("Invalid orderedBooks data. Expected an array.");
    }

    // Create an order object with the desired structure
    const order = {
      userId: authUserId,
      orderedBooks: orderedBooks.map((bookData: any) => ({
        bookId: bookData.bookId,
        quantity: bookData.quantity,
      })),
      status: "pending",
      createdAt: "2023-08-28T10:00:00Z", // Set the creation date
    };

    return order;
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