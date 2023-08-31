import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createUser = async(data:User):Promise<User>=>{
    const result = await prisma.user.create({
        data
    })

    return result;
}

const getUsers = async()=>{
    const result = await prisma.user.findMany()

    return result;
}

const getUser = async(id:string)=>{
    const result = await prisma.user.findUnique({
        where:{
            id
        }
    })

    return result;
}

const updateUser = async(id:string, payload:Partial<User>):Promise<User>=>{
    const result = await prisma.user.update({
        where:{
            id
        },
        data: payload
    })

    return result;
}


const deleteUser = async(id:string):Promise<User>=>{
    const result = await prisma.user.delete({
        where:{
            id
        }
    })

    return result;
}





export const UserService = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}