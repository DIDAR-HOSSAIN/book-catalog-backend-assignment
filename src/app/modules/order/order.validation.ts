import { z } from 'zod';


const updateOrderZodSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        email: z.string().optional(),
        password: z.string().optional(),
        role: z.string().optional(),
        contactNo: z.string().optional(),
        address: z.string().optional(),
        profileImg: z.string().optional()
    })
});

export const OrderZodValidation = {
    updateOrderZodSchema
};