const {Users} =require('../db/model')

const {genRandomUserName}=require('../utils/Username')

async function createAnonUser(){
    const user= await Users.create({
        username: genRandomUserName()
    })

    return user
}

async function getUserByID(id){
    return await Users.findOne({where:{id}})
}

async function getUserByUsername(username){
    return await Users.findOne({where:{username}})
}

module.exports={
    createAnonUser,
    getUserByID,
    getUserByUsername
}

//---------------------------------------------
//testcode

// async function task(){
//     console.log(await createAnonUser())
//     console.log('--------------')
//     console.log(await createAnonUser())
//     console.log('--------------')
//     console.log(await createAnonUser())
//     console.log('--------------')
//     console.log(await createAnonUser())
//     console.log('--------------')
//     console.log(await createAnonUser())
//     console.log('--------------')
//     console.log(await createAnonUser())
//     console.log('--------------')
// }

// task()
//---------------------------------------------