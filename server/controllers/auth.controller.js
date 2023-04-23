import User from '../models/user.model.js'


export const register  = async (req, res) => {
  try {
    const newUser = new User(req.body)

    await newUser.save();
    res.status(201).send('user has been created')
  } catch (error) {
    res.status(500).send("something went wrong with register")
  }
}



export const login = (req, res) => {
}
export const logout = (req, res) => {
}