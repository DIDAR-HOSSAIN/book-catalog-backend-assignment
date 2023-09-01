// service/auth.service.ts
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import config from '../../../config';
import { Secret } from 'jsonwebtoken';


const loginUser = async (payload: any): Promise<any> => {
  const { email, password } = payload;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  if (!user.password || user.password !== password) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  const { id, role } = user;

  const accessToken = jwtHelpers.createToken(
    { id, role },
    config.jwt.secret as Secret
  );

  return {
    accessToken
  };

}

export const AuthService = {
  loginUser
}
