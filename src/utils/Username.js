const ADJECTIVES =[
    'boundless',
    'plausible',
    'sleepy',
    'dangerous',
    'electronic',
    'slim',
    'purple'
]

const OBJECTS = [
    'pudle',
    'piano',
    'window',
    'bowl',
    'socks',
    'brocolli',
    'chalk'
]

function genRandomUserName(){
    let x='';
    let adj = Math.floor(Math.random()*7)
    let obj = Math.floor(Math.random()*7)
    x+=ADJECTIVES[adj]+'-'+OBJECTS[obj]
    return x
}

module.exports={
    genRandomUserName
}
