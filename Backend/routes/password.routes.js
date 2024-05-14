import express from 'express';
import {forgotPassword, getResetPassword, postResetPassword} from "../controllers/password.controller.js"

const router = express.Router();

router.post('/forgot-password', forgotPassword);
router.get('/reset-password/:id/:token', getResetPassword);
router.post('/reset-password/:id/:token', postResetPassword);


export default router;