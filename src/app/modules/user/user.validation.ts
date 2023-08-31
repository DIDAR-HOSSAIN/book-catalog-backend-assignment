import { z } from 'zod';

const createUser = z.object({
    body: z.object({
        name: z.string({
            required_error: 'Name is required'
        }),
        email: z.string({
            required_error: 'Email is required'
        }),
        password: z.string({
            required_error: 'Password is required'
        }),
        role: z.string({
            required_error: 'role is required'
        }),
        contactNo: z.string({
            required_error: 'ContactNo is required'
        }),
        address: z.string({
            required_error: 'Address is required'
        }),
        profileImg: z.string({
            required_error: 'ProfileImg id is required'
        })
    })
});

const updateUser = z.object({
    body: z.object({
        name: z.string().optional(),
        email: z.string().optional(),
        password: z.string().optional(),
        role: z.string(),
        contactNo: z.string().optional(),
        address: z.string().optional(),
        profileImg: z.string().optional()
    })
});

export const UserValidation = {
    createUser,
    updateUser
};