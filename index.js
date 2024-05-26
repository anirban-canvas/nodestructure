import express from "express";
import router from "./users/userRouter.js";
const server=express()

server.use('/users',router)

server.listen('3300',()=>{
    console.log("server is running in 3300")
})