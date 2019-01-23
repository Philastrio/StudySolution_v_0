import express from 'express';
import { onlyPrivate } from '../middlewares';
import routes from '../routes';
import {
	changePassword,
	editProfile,
	userDetail,
	users,
} from '../controllers/userController';


const userRouter = express.Router();

userRouter.get(routes.users, onlyPrivate, users);
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.usersDetail(), userDetail);

userRouter.get(routes.changePassword, changePassword);

export default userRouter;