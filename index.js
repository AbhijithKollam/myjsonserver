// console.log("Hello World");
//1. Import json server
const jsonServer = require('json-server')

//2. create json server
const mediaPlayeraServer = jsonServer.create()

//3. create a connection to db.json . It uses a method named Router
const router = jsonServer.router('db.json')

// 4. create a middleware
const middleware = jsonServer.defaults();

//5. use this middleware
mediaPlayeraServer.use(middleware)
mediaPlayeraServer.use(router)

const port = 5000

mediaPlayeraServer.listen(port,()=>{
    console.log(`server is up and running in port ${port}`);
})