const client=require('../../db/connection')
module.exports={
    courtList:(callback)=>{
       client.query(`select * from courtlist`,(err,result)=>{
        console.log('hjjj');
        if(!err){
            //console.log('nhhjj')
            callback(null,result)
        }
        else{
            callback(err)
        }
       })
    },
    courtMaster:(data,callback)=>{
        console.log('sortBy',data)
        client.query(`select * from courtmaster ORDER BY ${data}`,(err,result)=>{
            if(!err){
                callback(null,result)
            }
            else{
                callback(err)
            }
        })
    },
    postInfo:async(data,callback)=>{
        console.log('data',data.arr)
        try {
            for (let i = 0; i < data.arr.length; i++) {
                const result = await client.query(`update courtmaster set infono=$1 where ticket_no=$2`, [data.arr[i].val, data.arr[i].ticket]);
                console.log(result.rows);
            }
            callback(null, 'Success'); 
        } catch (error) {
            console.error(error);
            callback(error);
        }
    }
    
    
    
    
    
    
    
}