import express from "express";
import { UserController } from "./user.controller";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import validateRequest from "../../middlewares/validateRequest";
import { UserZodValidation } from "./user.validation";

const router = express.Router();

router.get('/', auth(ENUM_USER_ROLE.ADMIN),  UserController.getUsers)
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN),  UserController.getUser)
router.patch('/:id', validateRequest(UserZodValidation.updateUserZodSchema), auth(ENUM_USER_ROLE.ADMIN),  UserController.updateUser)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN),  UserController.deleteUser)





export const UserRoutes = router;
