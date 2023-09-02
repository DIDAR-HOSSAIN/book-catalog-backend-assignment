"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_controller_1 = require("../user/user.controller");
const user_validation_1 = require("../user/user.validation");
const auth_validation_1 = require("./auth.validation");
const auth_controller_1 = require("./auth.controller");
const router = express_1.default.Router();
router.post('/signup', (0, validateRequest_1.default)(user_validation_1.UserZodValidation.createUserZodSchema), user_controller_1.UserController.createUser);
// router.post('/signin', auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER), UserController.createUser)
router.post('/signin', (0, validateRequest_1.default)(auth_validation_1.AuthValidation.loginZodSchema), auth_controller_1.AuthController.loginUser);
//   router.post(
//     '/refresh-token',
//     validateRequest(AuthValidation.refreshTokenZodSchema),
//     AuthController.refreshToken
//   );
//   router.post(
//     '/change-password',
//     validateRequest(AuthValidation.changePasswordZodSchema),
//     AuthController.changePassword
//   );
exports.AuthRoutes = router;
