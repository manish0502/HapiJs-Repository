const { Client } = require('pg');


const client = new Client({
    host:'localhost',
    port:5432,
    user:'postgres',
    password: 'postgres',
    database: 'postgres'
})

client.on("connect",()=>{
    console.log("Database connection established")
})
client.on("end",()=>{
    console.log("Database connection failed")
})


module.exports = client