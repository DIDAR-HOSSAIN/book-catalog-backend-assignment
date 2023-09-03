import { Order } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { asyncForEach } from "../../../shared/utils";
import { IOrder } from "./order.interface";


// const createOrder = async (data: IOrder): Promise<Order[]> => {
//   const result: any[] = [];

//   for (const book of Order) {
//     const { bookId, quantity } = book;

//     const insertIntoOrder = await prisma.order.create({
//       data: {
//         bookId,
//         quantity,
//       },
//     });

//     result.push(insertIntoOrder);
//   }

//   return result;
// };




const createOrder = async(data:IOrder):Promise<Order[]>=>{
    const { userId, quantity, bookIds } = data;
    const result:any[] = [];
    await asyncForEach(bookIds, async(bookId:string)=>{
         const insertIntoOrder = await prisma.order.create({
           data:{
            userId,
            bookId,
            quantity
           }
         })

         result.push(insertIntoOrder);
    })
    return result
   
  }


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