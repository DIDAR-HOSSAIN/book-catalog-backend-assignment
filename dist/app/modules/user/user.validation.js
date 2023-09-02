"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserZodValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name is required'
        }),
        email: zod_1.z.string({
            required_error: 'Email is required'
        }),
        password: zod_1.z.string({
            required_error: 'Password is required'
        }),
        role: zod_1.z.string({
            required_error: 'role is required'
        }),
        contactNo: zod_1.z.string({
            required_error: 'ContactNo is required'
        }),
        address: zod_1.z.string({
            required_error: 'Address is required'
        }),
        profileImg: zod_1.z.string({
            required_error: 'ProfileImg id is required'
        })
    })
});
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().optional(),
        password: zod_1.z.string().optional(),
        role: zod_1.z.string().optional(),
        contactNo: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        profileImg: zod_1.z.string().optional()
    })
});
exports.UserZodValidation = {
    createUserZodSchema,
    updateUserZodSchema
};
