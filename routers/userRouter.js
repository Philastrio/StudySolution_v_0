import express from 'express';
import { onlyPrivate } from '../middlewares';
import routes from '../routes';
import {
	changePassword,
	getEditProfile,
	postEditProfile,
	userDetail,
	users,
} from '../controllers/userController';


const userRouter = express.Router();

userRouter.get(routes.users, onlyPrivate, users);

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.get(routes.editProfile, onlyPrivate, postEditProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.usersDetail(), userDetail);

export default userRouter;