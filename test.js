const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) =>
{
    if(req.url == "/hello")
    {
        fs.readFile('C:\Users\91882\Desktop\backendtest\Hello.json' , "utf-8", (err , data)=>{
                console.log(data)
        });
    }
});

server.listen(3000,"127.0.0.1",() =>
{
    console.log("listing on port no 8000")
})
