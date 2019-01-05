import routes from "./routes.js";

export const localsMiddlewares = (req, res, next) => {
	res.locals.siteName = "StudySolution";
	res.locals.routes = routes;
	next();
};