import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import validateRequest from "../../middlewares/validateRequest";
import { OrderZodValidation } from "./order.validation";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post('/create-order', OrderController.createOrder)
router.get('/', auth(ENUM_USER_ROLE.ADMIN),  OrderController.getOrders)
router.get('/:id', auth(ENUM_USER_ROLE.ADMIN),  OrderController.getOrder)
router.patch('/:id', validateRequest(OrderZodValidation.updateOrderZodSchema), auth(ENUM_USER_ROLE.ADMIN),  OrderController.updateOrder)
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN),  OrderController.deleteOrder)





export const OrderRoutes = router