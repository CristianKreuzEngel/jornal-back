const userController = require('../controllers/user');
const checkPermission = require("../middleware/checkPermission");

module.exports = (app) => {
    app.post('/create-user', checkPermission.check, userController.createUser)
    app.get('/all-users', checkPermission.check, userController.getAllUsers)
    app.post('/get-nickname', checkPermission.check, userController.getByNickname)
    app.post('/get-cod', checkPermission.check, userController.getByCod)
    app.patch('/alter-pass', checkPermission.check, userController.alterPass)
    app.delete('/delete-user', checkPermission.check, userController.deleteUser)
}