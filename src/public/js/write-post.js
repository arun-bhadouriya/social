function createPost(userId,title,body){
    $.post('/api/posts',
    {userId:userId,title:title,body:body},(createPost)=>{
       console.log(post)
    })
}