import mongoose from "mongoose";
import configs from "../config.js";
mongoose.connect(configs.dbstring)
let schema=mongoose.Schema

let UserSchema=new schema({
    fname:String,
    lname:String,
    emailAddress:String,
    password:String
})
 let UserModel=mongoose.model('users',UserSchema)


export default class UserDL{

    async getAllUser(){
        console.log("find all")
        
        return await UserModel.find()


    }
    async getSingleUser(id){

        return await UserModel.findById({"_id":id})

    }

    async createUser(obj){

        let newuser=new UserModel({
            fname:obj.fname,
            lname:obj.lname,
            emailAddress:obj.emailAddress,
            password:obj.password

        })
        await newuser.save()
        return "success"
    }


}