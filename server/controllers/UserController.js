const Controller = require('./Controller')

module.exports = class UserController extends Controller {
  static index(req, res) {
    const users = [
      {id: 1, name: 'User 1'},
      {id: 2, name: 'User 2'},
      {id: 3, name: 'User 3'},
      {id: 4, name: 'User 4'},
      {id: 5, name: 'User 5'}
    ]
    
    res.json(users)
  }
}