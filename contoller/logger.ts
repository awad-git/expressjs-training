//Creating a customized middleware
import express from 'express'

const log=(req,res,next)=>{
    console.log(`${req.url} visited by awad`)
    const a='pass data via middle ware using res.locals.'
   next()
}
export default log