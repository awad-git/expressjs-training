import express from 'express'
const rout2=express.Router()

rout2.get('/',(req,res)=>{
        res.send('hello all from users route')})

rout2.get('/user',(req,res)=>{
                res.send('hello all from single user route')})

export default rout2