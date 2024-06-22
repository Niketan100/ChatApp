import express from 'express';
import protectRoute from '../middleware/protect.Route.js';
import usercontroller from "../controllers/usercontroller.js"

const router = express.Router();

router.get("/",protectRoute , usercontroller)


export default router;