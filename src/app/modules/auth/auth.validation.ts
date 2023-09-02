import { z } from 'zod';


const createUserZodSchema = z.object({
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


const loginZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});

export const AuthValidation = {
  createUserZodSchema,
  loginZodSchema
};
