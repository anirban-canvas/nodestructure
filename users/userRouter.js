//userController
import express from "express";
import UserBL from "./userBL.js";
import usermiddleware from "./userMiddleWare.js";
let router=express.Router();
router.use(express.json())
let user=new UserBL()
router.get('/',async (req,res)=>{

    let allUser=await user.getUser()
    res.send(allUser)

})

router.post('/',usermiddleware.bodyValidation,async (req,res)=>{

    console.log("inside post")
    let response=await user.createUser(req.body)
    res.send(response)

})

router.get('/:id',async (req,res)=>{
    console.log(req.params.id)
    let singleUser=await user.getUser(req.params.id)
    res.send(singleUser)

})

//field validation 422 , business validation 400

router.put('/:id',(req,res)=>{

    res.send("put User")

})

router.delete('/:id',(req,res)=>{

    res.send("delete User")

})

export default router