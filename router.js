import express from 'express';

export const userRouter = express.Router();

const userIndex = (req, res) => res.send('user index');
const userEdit = (req, res) => res.send('user edit');
const userPassword = (req, res) => res.send('user password');


userRouter.get("/", userIndex);
userRouter.get("/edit", userEdit);
userRouter.get("/password", userPassword);