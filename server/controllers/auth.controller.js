import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("user has been created");
  } catch (error) {
    res.status(500).send("something went wrong with register");
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(404).send("User Not found!");

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return res.status(400).send("Wrong password or username!");

    const token = jwt.sign({
      id: user._id,
      isSeller: user.isSeller,
    }, process.env.JWT_KEY );

    // @ts-ignore
    const { password, ...info } = user._doc;

    res.cookie("accessToken", token, {
      httpOnly: "true"
    }).status(200).send(info);
  } catch (error) {
    res.status(500).send("something went wrong with logging in");
  }
};
export const logout = (req, res) => {};
