const express = require("express")
const app= express()
const connectDB=require("./db");
const PORT = 5000
connectDB();
const server= app.listen(PORT,() => console.log('server connected to port ${ PORT }'))

process.on("unhandledRejection", err =>{
    console.log('An error occured: ${err.message}')
    server.close(()=>process.exit(1))
})
app.use(express.json())
app.use("/api/auth", require("./Auth/Route"))