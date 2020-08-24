const {Router} =require('express')
const {createAnonUser, getUserByID, getUserByUsername}=require('../../controllers/users')

const route =  Router()


route.get('/:id',async (req,res)=>{
    let user
    if(isNaN(parseInt(req.params.id))){
        //when param is username
        user = await getUserByUsername(req.params.id)
    } else{
        user = await getUserByID(req.params.id)
    }

    if(user){
        res.status(200).send(user)
    }
    else{
        res.status(404).send({
            error: "No such userid or Username"
        })
    }
})

route.post('/',async (req,res)=>{
    const user = await createAnonUser() 
    res.status(200).send(user)
})


module.exports={
    userRoute:route
}