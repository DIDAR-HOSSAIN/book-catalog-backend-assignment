import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import validateRequest from "../../middlewares/validateRequest";
import { OrderZodValidation } from "./order.validation";

const router = express.Router
router.get('/', auth(ENUM_USER_ROLE.ADMIN),  OrderController.getUsers)
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN),  OrderController.getUser)
router.patch('/:id', validateRequest(OrderZodValidation.updateOrderZodSchema), auth(ENUM_USER_ROLE.ADMIN),  OrderController.updateUser)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN),  OrderController.deleteUser)





export const OrderRoutes = router