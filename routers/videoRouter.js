import {
	deleteVideo,
	editVideo,
	getUpload,
	videoDetail,
	postUpload
} from "../controllers/videoController";
import express from 'express';
import routes from "../routes.js";
import { uploadVideo } from "../middlewares.js";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;