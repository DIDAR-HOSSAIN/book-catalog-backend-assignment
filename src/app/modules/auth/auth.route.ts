import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidation } from "./auth.validation";
import { AuthController } from "./auth.controller";

const router = express.Router();

router.post('/signup', validateRequest(AuthValidation.createUserZodSchema), AuthController.createUser)
// router.post('/signin', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER), UserController.createUser)


router.post(
    '/signin',
    validateRequest(AuthValidation.loginZodSchema),
    AuthController.loginUser
  );
  



export const AuthRoutes = router;