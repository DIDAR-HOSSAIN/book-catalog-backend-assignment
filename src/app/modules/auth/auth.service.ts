// // service/auth.service.ts
// import httpStatus from 'http-status';
// import ApiError from '../../../errors/ApiError';
// import prisma from '../../../shared/prisma';

// const loginUser = async (payload: any): Promise<any> => {
//   const { email, password } = payload;

//   const user = await prisma.user.findUnique({
//     where: {
//       email,
//       password
//     },
//   });

//   if (!user) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
//   }

// };

// export const AuthService = {
//   loginUser,
// };


// service/auth.service.ts
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
import { Secret } from 'jsonwebtoken';
import jwt from 'jsonwebtoken'; // Import the jwt library

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

  // Generate a JWT token
  const token = jwt.sign(
    {
      userId: user.id, // Include any user-specific data you need here
      role: user.role, // Include user role or other information
    },
    'very-secret', // Replace with your secret key
    {
      expiresIn: '365d', // Adjust token expiration as needed
    }
  );

  // Return the token along with success message
  return {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User signed in successfully!',
    token,
  };
};

export const AuthService = {
  loginUser,
};
