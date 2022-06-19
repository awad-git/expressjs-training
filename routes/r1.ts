import express from 'express'
import { promises as fs  } from 'fs'
const routes=express.Router()
import log from '../contoller/logger'

let count=0
routes.get('/',(req,res)=>{
    res.send(`hello all from route `)})
    
    const wdata=async ()=>{
        const myFile=await fs.open('awad.txt', 'a+')
        const d=await fs.writeFile('awad.txt',`count now is ${count}`)}
        count+=1
        
    wdata()

export default routes