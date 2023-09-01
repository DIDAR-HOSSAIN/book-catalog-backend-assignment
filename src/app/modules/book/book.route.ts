import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import validateRequest from "../../middlewares/validateRequest";
import { CategoryZodValidation } from "./book.validation";
import { CategoryController } from "./book.controller";

const router = express.Router();

router.post('/create-category',
validateRequest(CategoryZodValidation.createCategoryZodSchema), 
auth(ENUM_USER_ROLE.ADMIN),
CategoryController.createCategory)

router.get('/', CategoryController.getCategories)

router.get('/:id', CategoryController.getCategory)

router.patch('/:id', validateRequest(CategoryZodValidation.updateCategoryZodSchema), 
auth(ENUM_USER_ROLE.ADMIN),  CategoryController.updateCategory)

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN),  CategoryController.deleteCategory)




export const CategoryRoutes = router;
