import http from 'http';

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': 'text/plain'});

    res.end('Hello From Node Js');
})

let port = 8080
let host = 'localhost:'
server.listen(port,()=>{
    console.log(`server is lisiting on ${host}${port} `)
})