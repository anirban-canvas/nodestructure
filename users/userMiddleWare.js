
import messages from "./userConstant.js"
const usermiddleware={

   bodyValidation:(req,res,next)=>{

    if(req.body.fname===undefined){
        res.status(messages.fieldvalidation.status)
        res.send({message:messages.fieldvalidation.message})
    }else{
        next()
    }

   
   }


}
export default usermiddleware