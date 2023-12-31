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
const createOrder = (authUserId, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderedBooks } = data;
        // Ensure that orderedBooks is an array
        if (!Array.isArray(orderedBooks)) {
            throw new Error("Invalid orderedBooks data. Expected an array.");
        }
        // Create an order object with the desired structure
        const order = {
            userId: authUserId,
            orderedBooks: orderedBooks.map((bookData) => ({
                bookId: bookData.bookId,
                quantity: bookData.quantity,
            })),
            status: "pending",
            createdAt: "2023-08-28T10:00:00Z", // Set the creation date
        };
        return order;
    }
    catch (error) {
        throw error;
    }
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
