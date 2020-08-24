const {Posts,Users} = require('../db/model')

async function createNewPost(userId,title,body){
    const post= await Posts.create({
        userId,
        title,
        body
          
    })

    return post
}

async function showAllPost(query){
    // TODO: handle query params
    const allpost=await Posts.findAll({
        include: [Users]
    })
    return allpost
}

module.exports={
    createNewPost,
    showAllPost
}
///////test code

// async function task(){
//     console.log(
//         await createNewPost(
//             1,
//             'this is my post 1',
//             'this is my body numbered 1'
//         )
//     )
//     console.log(
//         await createNewPost(
//             1,
//             'this is my post 2',
//             'this is my body numbered 2 '
//         )
//     )
    
//    const post= await showAllPost()
//    for(p of post){
//     console.log(`${p.title}\n${p.body}\n${p.user.username}`)
//    }
//    }
// task()