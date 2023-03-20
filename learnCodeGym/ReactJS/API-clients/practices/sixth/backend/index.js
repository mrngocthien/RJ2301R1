const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

//render user
router.render = (req, res) => {
  return res.json({
    status: 1,
    data: res.locals.data,
    message: "ok"
  })
}

// Use default router
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})