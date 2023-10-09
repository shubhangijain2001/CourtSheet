const express= require ('express')
const router=express.Router()
//const app=express()
const court=require('../controller/court.controller')
const client=require('../../db/connection')

router.get('/getCourtList',court.courtList)
router.get('/getCourtMaster',court.courtMaster)
router.post('/postInfo',court.info)
router.post('/test', (req,res)=>{
    console.log(req.body)
})

module.exports=router


