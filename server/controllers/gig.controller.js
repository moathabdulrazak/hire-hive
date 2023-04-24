import Gig from '../models/gig.model.js'
import createError from "../utils/createError.js"

export const createGig = async (req, res, next) => {
  if(!req.isSeller) return next(createError(403, "Only sellers can create a gig"))


  const newGig = new Gig({
    userId: req.userId,
    ...req.body
  })

  try {
    const savedGig = await newGig.save()
    res.status(201).json(savedGig)
  } catch (error) {
    next(error)
  }
}


export const deleteGig = async (req, res, next) => {

  try {
    const gig = await Gig.findById(req.params.id)

    // @ts-ignore
    if(gig.userId !== req.userId ) return next(createError(403, "You can only delete your gigs."))

    await Gig.findByIdAndDelete(req.params.id)
    // @ts-ignore
    res.status(200).send(`Gig at this Id ${gig.name} has been deleted`)
  } catch (error) {
    next(error)
  }
}

export const getGig = async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error)
  }
}

export const getGigs = async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error)
  }
}