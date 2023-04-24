import express from 'express'

import { verifyToken } from "../middleware/jwt.js";
const router = express.Router()


router.post("/", verifyToken, createGig )
router.delete("/:id", verifyToken, deleteGig )

export default router;