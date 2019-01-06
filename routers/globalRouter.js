import {postJoin, getJoin, getlogin, postlogin, logout} from "../controllers/userController.js";
import {home, search} from "../controllers/videoController";
import express from 'express';
import routes from '../routes';

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getlogin);
globalRouter.post(routes.login, postlogin);


globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.logout, logout);


export default globalRouter;