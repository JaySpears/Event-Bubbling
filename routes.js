// Constants.
const usersController = require('./api/controllers/controller.users.js');
const app = require('./index.js').app;

// Listening for when a user posts new account credentials.
app.pos
t('/create', function(req, res){
  usersController.createAccount(req, res);
});

// Listening for when a user posts login credentials.
app.post('/login', function(req, res){
  usersController.login(req, res);
});
