import express from "express";
import { UserValidation } from "../user/user.validation";
import validateRequest from "../../middlewares/validateRequest";
import { UserController } from "../user/user.controller";

const router = express.Router();

router.post('/signup', validateRequest(UserValidation.createUser), UserController.createUser)






export const AuthRoutes = router;