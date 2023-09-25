import { string } from 'zod';
// controllers/authController.ts
import { Response, Request } from 'express';
import catchAsync from '../../../shared/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { User } from '@prisma/client';
import { AuthService } from './auth.service';



const createUser = catchAsync(async (req:Request, res:Response) => {

  const result = await AuthService.createUser(req.body)

  sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message: "User Created Successfully",
      data: result
  })
  
})


const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await AuthService.loginUser(loginData);

  sendResponse<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    token: result,
  });
});

export const AuthController = {
  createUser,
  loginUser
};
