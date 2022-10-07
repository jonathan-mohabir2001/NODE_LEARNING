// implementing a server with routing.

const http = require('http'); 

const PORT = process.env.PORT || 8000; 


const server = http.createServer((req,res) => {
// routing code will be done right inside of the create server method here 

const path = req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase()

switch(path){
  case '':
    // blank case represents the home page user will land upon visitng the site. 
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end('Home page created.')
    break
  case '/about':
    // case represents page to be passed within url 
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end('About Page.')
    break
  
  default:
    res.writeHead(404,{'Content-Type':'text/plain'})
    res.end('Page not found!')
    break
}
// switch statement created which will route through different pages, upon their value being placed within their URLs.

})

server.listen(PORT , () => {
  console.log(`The server has started on ${PORT}`)
})