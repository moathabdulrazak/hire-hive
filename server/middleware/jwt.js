
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).send("You are not authenticated!")


  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return res.status(403).send('token has been expired')
    // @ts-ignore
    req.userId = payload.id;
    // @ts-ignore
    req.isSeller = payload.isSeller;
    next()
  });
};