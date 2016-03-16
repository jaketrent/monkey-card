const static = require('node-static')

const file = new static.Server('./public')

require('http').createServer((request, response) => {
  request.addListener('end', _ => {
    file.serve(request, response)
  }).resume()
}).listen(process.env.PORT)

console.log(`Listening on port ${process.env.PORT}...`)
