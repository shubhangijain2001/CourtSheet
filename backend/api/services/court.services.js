const client=require('../../db/connection')
module.exports={
    courtList:(callback)=>{
       client.query(`select * from courtlist`,(err,result)=>{
        console.log('hjjj');
        if(!err){
            console.log('nhhjj')
            callback(null,result)
        }
        else{
            callback(err)
        }
       })
    },
    courtMaster:(callback)=>{
        client.query(`select * from courtmaster`,(err,result)=>{
            if(!err){
                callback(null,result)
            }
            else{
                callback(err)
            }
        })
    }
}