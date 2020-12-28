import express from 'express';

import { SingIn, SingUp } from '../controllers/authController'

const router  = express.Router();

router.post('/login',SingIn);

router.post('/signup', SingUp);

export default router;
