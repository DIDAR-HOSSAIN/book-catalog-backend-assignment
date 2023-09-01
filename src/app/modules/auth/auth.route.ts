import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { UserController } from "../user/user.controller";
import { UserZodValidation } from "../user/user.validation";
import { AuthValidation } from "./auth.validation";
import { AuthController } from "./auth.controller";

const router = express.Router();

router.post('/signup', validateRequest(UserZodValidation.createUserZodSchema), UserController.createUser)
// router.post('/signin', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER), UserController.createUser)


router.post(
    '/signin',
    validateRequest(AuthValidation.loginZodSchema),
    AuthController.loginUser
  );
  
//   router.post(
//     '/refresh-token',
//     validateRequest(AuthValidation.refreshTokenZodSchema),
//     AuthController.refreshToken
//   );
  
//   router.post(
//     '/change-password',
//     validateRequest(AuthValidation.changePasswordZodSchema),
//     AuthController.changePassword
//   );



export const AuthRoutes = router;