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

// //add new user
// router.post('/users', (req, res) => {
//   const { name, birthday } = req.body;
//   const id = Date.now().toString(); // generate unique id
//   const newUser = { id, name, birthday };
//   router.db.get('users').push(newUser).write(); // add new user to the database
//   res.json({ status: 1, data: newUser, message: "User created successfully" });
// });

// //update user
// router.put('/users/:id', (req, res) => {
//   const id = req.params.id;
//   const user = req.body;
//   const index = users.findIndex((u) => u.id === id);

//   if (index === -1) {
//     return res.status(404).json({ error: 'User not found' });
//   }

//   users[index] = { ...user, id };

//   res.json(users[index]);
// });

// //delete user
// router.delete('/users/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = users.findIndex(user => user.id === id);
  
//   if (index !== -1) {
//     users.splice(index, 1);
//     res.status(200).json({ message: `User with id ${id} has been deleted.` });
//   } else {
//     res.status(404).json({ message: `User with id ${id} not found.` });
//   }
// });



// Use default router
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})