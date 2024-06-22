import express from 'express';
import protectRoute from "../middleware/protect.Route.js"
import {sendmessage, getmessages} from '../controllers/message.controller.js';
const router = express.Router();

router.post("/send/:id",protectRoute, sendmessage)
router.get("/:id" , protectRoute, getmessages)



export default router;