"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enums/user");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const order_validation_1 = require("./order.validation");
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.post('/create-order', order_controller_1.OrderController.createOrder);
router.get('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), order_controller_1.OrderController.getOrders);
router.get('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), order_controller_1.OrderController.getOrder);
router.patch('/:id', (0, validateRequest_1.default)(order_validation_1.OrderZodValidation.updateOrderZodSchema), (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), order_controller_1.OrderController.updateOrder);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), order_controller_1.OrderController.deleteOrder);
exports.OrderRoutes = router;
