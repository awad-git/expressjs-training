import express from 'express'
import {promises as fs} from 'fs'


const app =express()  //or you can use require by "allowSyntheticDefaultImports": true in tsconfig.json*/ 
import routes  from './routes/r1'
import rout2 from './routes/r2'
import log from './contoller/logger'
//const app=require('express')
const port=5000

app.use('/api',log,routes)
app.use('/users',rout2)


app.listen(port,()=>{console.log(`server is running on port ${port}`)}) 
 
