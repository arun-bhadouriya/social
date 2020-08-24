const express =require('express')
const port=process.env.PORT||5000
const { db } =require('./db/model')
const {postRoute} =require('./routes/posts')
const {userRoute}=require('./routes/users')

const app= express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use('/api/users',userRoute)
app.use('/api/posts',postRoute)
app.use('/',express.static(__dirname+'/public'))

db.sync()
.then(()=>{
    app.listen(port,()=>{
        console.log('running at http://localhost:5000/')
    })
    
}).catch((err)=>{
    console.error(new Error('Could not start the database'))
    console.error(err)
})

