import express from 'express';

import { getCourses } from '../controllers/coursesController';

const router  = express.Router();

router.get('/',getCourses);

//router.post('/:id', SingUp);

export default router;
