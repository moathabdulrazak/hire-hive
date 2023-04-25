import express from 'express'

import { verifyToken } from "../middleware/jwt.js";
import { createOrder, getOrders } from "../controllers/order.controller..js";
const router = express.Router()


router.get("/", verifyToken, createOrder)
router.get("/", verifyToken, getOrders)

export default router;