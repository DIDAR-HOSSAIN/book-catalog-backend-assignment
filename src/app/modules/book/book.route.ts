import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import validateRequest from "../../middlewares/validateRequest";
import { CategoryController } from "./book.controller";
import { BookZodValidation } from "./book.validation";

const router = express.Router();

router.post('/create-book',
validateRequest(BookZodValidation.createBookZodSchema), 
auth(ENUM_USER_ROLE.ADMIN),
CategoryController.createBook)

router.get('/', CategoryController.getBooks)

router.get('/:id', CategoryController.getBook)

router.patch('/:id', validateRequest(BookZodValidation.updateBookZodSchema), 
auth(ENUM_USER_ROLE.ADMIN),  CategoryController.updateBook)

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN),  CategoryController.deleteBook)




export const BookRoutes = router;
