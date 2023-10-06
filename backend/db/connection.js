const express= require ('express')
const app=express()

app.connect(3000,()=>{
    console.log('listening on port 3000')
})

const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "psql123",
    database: "musafir"
})

module.exports = client