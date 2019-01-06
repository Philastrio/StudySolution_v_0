import {
	changePassword,
	editProfile,
	userDetail,
	users
}	from "../controllers/userController.js";
import express from 'express';
import routes from "../routes.js";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.usersDetail(), userDetail);

userRouter.get(routes.changePassword, changePassword);

export default userRouter;