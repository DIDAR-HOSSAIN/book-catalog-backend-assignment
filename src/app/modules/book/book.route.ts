import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import validateRequest from "../../middlewares/validateRequest";
import { BookZodValidation } from "./book.validation";
import { BookController } from "./book.controller";

const router = express.Router();

router.post('/create-book',
validateRequest(BookZodValidation.createBookZodSchema), 
auth(ENUM_USER_ROLE.ADMIN),
BookController.createBook)

router.get('/', BookController.getBooks)

router.get('/:id', BookController.getBook)

router.patch('/:id', validateRequest(BookZodValidation.updateBookZodSchema), 
auth(ENUM_USER_ROLE.ADMIN),  BookController.updateBook)

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN),  BookController.deleteBook)




export const BookRoutes = router;
