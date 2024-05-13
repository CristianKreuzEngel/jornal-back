const userController = require('../controllers/user');

module.exports = (app) => {
    app.post('/create-user', userController.createUser)
    app.get('/all-users', userController.getAllUsers)
    app.post('/get-nickname', userController.getByNickname)
    app.post('/get-cod', userController.getByCod)
    app.patch('/alter-pass', userController.Alterpass)
    app.delete('/delete-user', userController.deleteUser)
}