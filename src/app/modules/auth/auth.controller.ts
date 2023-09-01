// controllers/authController.ts
import { Response, Request } from 'express';
import catchAsync from '../../../shared/catchAsync';
import httpStatus from 'http-status';
import { AuthService } from './auth.service';
import sendResponse from '../../../shared/sendResponse';
import { User } from '@prisma/client';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await AuthService.loginUser(loginData);

  sendResponse<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    data: result,
  });
});

export const AuthController = {
  loginUser
};
