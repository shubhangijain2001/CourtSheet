const express= require ('express')
const router=express.Router()
const court=require('../controller/court.controller')
const client=require('../../db/connection')

router.get('/getCourtList',court.courtList)
router.get('/getCourtMaster',court.courtMaster)
router.post('/postInfo',court.info)

module.exports=router


