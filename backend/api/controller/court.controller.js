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
        let data=req.query
        court.courtMaster(data,(err,result)=>{
            if(err){
                return res.status(400).send(err)
            }
            res.send(result.rows)
        })
    },
    info:(req,res)=>{
        let data=req.body
        court.postInfo(data,(err,result)=>{
            if(err){
                return res.status(400).send(err)
            }
            res.send(result.rows)
        })
    }
}