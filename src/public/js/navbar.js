// $(()=>{
    let navlink=$('.navbar-nav .nav-link')
    navlink.click((ev)=>{
        let componentUrl=`/components/${$(ev.target).attr('data-component')}.html`
        $('#post-content').load(componentUrl)
    })
// })
    
