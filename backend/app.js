const express= require ('express')
const app=express()
require('./db/connection')
const router=require('./api/routes/routes')
const cors=require('cors')

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(3000,()=>{
    console.log('listening on port 3000')
})

