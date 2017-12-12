const fastify = require('fastify')()

const scraper = require('./')

// Declare a route
fastify.post('/scraper', async function (request, reply) {
  let body = request.body
  let result = await scraper(body.url, body)
  reply.send(result)
})

// Run the server!
fastify.listen(8000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
