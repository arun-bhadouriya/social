function importPosts(){
    $.get('/api/posts',(posts)=>{
        for(let p of posts){
            // console.log(p)
            $('#content').append(
            $(`
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${p.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
              <p class="card-text">${p.body.substr(0,200)}...<br><a href='#'>read more..</a></p>
              <a href="#" class="card-link">like</a>
              <a href="#" class="card-link">comment</a>
            </div>
            `)) 
        }
    })
}