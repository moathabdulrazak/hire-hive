
import Order from "../models/order.model.js"
import Gig from "../models/gig.model.js"
import Stripe from 'stripe'

// @ts-ignore
export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? {sellerId: req.userId} : {buyerId: req.userId} ),
      isCompleted: true
    })

    res.status(200).send(orders)
  } catch (error) {
    next(error)
  }
}


// @ts-ignore
export const intent = async (req, res, next) => {
  // @ts-ignore
  const stripe = new Stripe(process.env.STRIPE);

  const gig = await Gig.findById(req.params.id);

  const paymentIntent = await stripe.paymentIntents.create({
    // @ts-ignore
    amount: gig.price * 100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  const newOrder = new Order({
    // @ts-ignore
    gigId: gig._id,
    // @ts-ignore
    img: gig.cover,
    // @ts-ignore
    title: gig.title,
    buyerId: req.userId,
    // @ts-ignore
    sellerId: gig.userId,
    // @ts-ignore
    price: gig.price,
    payment_intent: paymentIntent.id,
  });

  await newOrder.save();

  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
};

export const confirm = async (req, res, next) => {
  try {
    const orders = await Order.findOneAndUpdate(
      {
        payment_intent: req.body.payment_intent,
      },
      {
        $set: {
          isCompleted: true,
        },
      }
    );

    res.status(200).send("Order has been confirmed.");
  } catch (err) {
    next(err);
  }
};