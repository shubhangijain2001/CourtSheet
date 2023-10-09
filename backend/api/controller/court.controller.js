const court=require('../services/court.services')
module.exports={
    courtList:(req,res)=>{
       court.courtList((err,result)=>{
            if(err){
                
                return res.status(400).send(err)
            }
            res.send(result.rows)
        })
    },
    courtMaster:(req,res)=>{
        court.courtMaster((err,result)=>{
            if(err){
                return res.status(400).send(err)
            }
            res.send(result.rows)
        })
    },
    info:(req,res)=>{
        console.log('data1',req.body)
        let data=req.body
        court.postInfo(data,(err,result)=>{
            if(err){
                return res.status(400).send(err)
            }
            res.send(result.rows)
        })
    }
}