import express from "express";
const router = express.Router();

import {authMiddleware} from "../middleware/authMiddleware.js";
import { showController } from "../controller/showController.js";
import { entryController } from "../controller/entryController.js";
import { showOneEntry } from "../controller/showOneEntry.js";
import { transcribeEntry, analyzeAudio } from "../controller/transcribeEntry.js";


router.post('/:id/entry', transcribeEntry);
router.post('/:id/analysis', analyzeAudio);

router.post('/',authMiddleware,entryController);

router.get('/showentry',authMiddleware,showController)

router.get('/:id', showOneEntry);

export default router;