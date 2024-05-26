import UserDL from "./userDL.js"

export default class UserBL{

    userdl=new UserDL()

    async getUser(id){
        
        if(id===undefined){
           return  await this.userdl.getAllUser()
            
        }else{
            return  await this.userdl.getSingleUser(id)
        }


    }

    async createUser(obj){

        let status=await this.userdl.createUser(obj)
        if(status=='success'){
            return {message:"creted successfully"}
        }else{
            return {message:"error"}
        }

    }


}