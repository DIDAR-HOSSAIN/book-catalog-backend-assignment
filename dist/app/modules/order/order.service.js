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
exports.OrderService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const utils_1 = require("../../../shared/utils");
// const createOrder = async (data: IOrder): Promise<Order[]> => {
//   const result: any[] = [];
//   for (const book of Order) {
//     const { bookId, quantity } = book;
//     const insertIntoOrder = await prisma.order.create({
//       data: {
//         bookId,
//         quantity,
//       },
//     });
//     result.push(insertIntoOrder);
//   }
//   return result;
// };
const createOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, quantity, bookIds } = data;
    const result = [];
    yield (0, utils_1.asyncForEach)(bookIds, (bookId) => __awaiter(void 0, void 0, void 0, function* () {
        const insertIntoOrder = yield prisma_1.default.order.create({
            data: {
                userId,
                bookId,
                quantity
            }
        });
        result.push(insertIntoOrder);
    }));
    return result;
});
const getOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.findMany();
    return result;
});
const getOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.findUnique({
        where: {
            id
        }
    });
    return result;
});
const updateOrder = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.update({
        where: {
            id
        },
        data: payload
    });
    return result;
});
const deleteOrder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.order.delete({
        where: {
            id
        }
    });
    return result;
});
exports.OrderService = {
    createOrder,
    getOrders,
    getOrder,
    updateOrder,
    deleteOrder
};
