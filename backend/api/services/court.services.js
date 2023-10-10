const client=require('../../db/connection')

module.exports={

    courtList:(callback)=>{
       client.query(`select * from courtlist`,(err,result)=>{
        if(!err){
            callback(null,result)
        }
        else{
            callback(err)
        }
       })
    },

    courtMaster:(data,callback)=>{
        client.query(`select * from courtmaster ORDER BY ${data.sortBy} limit ${data.limit}`,(err,result)=>{
            if(!err){
                callback(null,result)
            }
            else{
                callback(err)
            }
        })
    },

    postInfo:async(data,callback)=>{
        try {
            for (let i = 0; i < data.arr.length; i++) {
                const result = await client.query(`update courtmaster set infono=$1 where ticket_no=$2`, [data.arr[i].val, data.arr[i].ticket]);
            }
            callback(null, 'Success'); 
        } catch (error) {
            callback(error);
        }
    }
    
    
    
    
    
    
    
}