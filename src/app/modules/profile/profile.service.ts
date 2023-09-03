import prisma from "../../../shared/prisma";


const getProfiles = async()=>{
    const result = await prisma.user.findMany()

    return result;
}




export const ProfileService = {
    getProfiles
}