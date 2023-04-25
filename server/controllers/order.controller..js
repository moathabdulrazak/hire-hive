
import Order from "../models/order.model.js"
import Gig from "../models/gig.model.js"

export const createOrder = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.gigId)
    const newOrder = new Order({
      // @ts-ignore
      gigId:gig._id,
      // @ts-ignore
      img:gig.cover,
      // @ts-ignore
      title: gig.title,
      buyerId:req.userId,
      // @ts-ignore
      sellerId:gig.userId,
      // @ts-ignore
      price:gig.price,
      payment_intent: "temporary"
    })

    await newOrder.save()
    res.status(200).send('successful')
  } catch (error) {
    next(error)
  }
}

// @ts-ignore
export const getOrders = async (req, res, next) => {
}