"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const order_service_1 = require("./order.service");
// const createOrder = catchAsync(async (req, res) => {
//       const user = (req as any).user;
//       const requestBody = req.body;
//       const result = await OrderService.createOrder(user, requestBody);
//         sendResponse(res,{
//         statusCode:httpStatus.OK,
//         success:true,
//         message: "Order Created Successfully",
//         data: result
//   })
// }) 
// const createOrder = catchAsync(async (req:Request, res:Response) => {
//     const result = await OrderService.createOrder(req.body)
//     sendResponse(res,{
//         statusCode:httpStatus.OK,
//         success:true,
//         message: "Order Created Successfully",
//         data: result
//     })
//   })
const createOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user.email;
    const requestBody = req.body;
    const result = yield order_service_1.OrderService.createOrder(user, requestBody);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Order Created Successfully",
        data: result,
    });
}));
const getOrders = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.OrderService.getOrders();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Orders retrieved Successfully",
        data: result
    });
}));
const getOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.OrderService.getOrder(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Order retrieved Successfully",
        data: result
    });
}));
const updateOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const payload = req.body;
    const result = yield order_service_1.OrderService.updateOrder(id, payload);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Order updated Successfully",
        data: result
    });
}));
const deleteOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield order_service_1.OrderService.deleteOrder(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Order deleted Successfully",
        data: result
    });
}));
exports.OrderController = {
    createOrder,
    getOrders,
    getOrder,
    updateOrder,
    deleteOrder
};
