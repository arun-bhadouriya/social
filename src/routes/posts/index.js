const {Router} =require('express')
const { showAllPost , createNewPost} = require('../../controllers/posts')

const route =  Router()


route.get('/',async (req,res)=>{
    const allpost = await showAllPost()
    res.status(200).send(allpost)
})

route.post('/',async (req,res)=>{
    const {userId,title,body}= req.body

    if((!userId) || (!title) || (!body)){
        return res.status(400).send({
            error: 'Need useriId or title or post'
        })
    }
    const post = await createNewPost(userId,title,body)
      
    res.status(201).send(post)
})

module.exports={
    postRoute:route
}