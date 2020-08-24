$(function(){
    $('#navbar').load('/components/navbar.html',loginIfNeeded)
    $("#post-content").load('/components/post-card.html')   
    
    $('#footer').load('/components/footer.html')

    
})

function loginIfNeeded(){
    let currentUser =window.localStorage.user? JSON.parse(window.localStorage.user) : null
    if(!currentUser){
        
        $.post('/api/users',{},(user)=>{
            // console.log(data)
            if(user){
                $('#currentUser').text(user.username)
                // console.log('registered currently as :' + user.username)
                window.localStorage.user= JSON.stringify(user)
            }            
        })
    }
        else{
            $('#currentUser').text(currentUser.username)
            console.log("resuming session as :" + currentUser.username )
        }

    
    // console.log(currentUser)
}

