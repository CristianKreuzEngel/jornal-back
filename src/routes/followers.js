const followController = require('../controllers/followers')
const checkPermission = require("../middleware/checkPermission");


module.exports = (app) => {
    app.post('/follow', checkPermission.check, followController.createFollow)
    app.get('/user/my-followers', checkPermission.check, followController.getFollowers)
    app.delete('/user/unfollow', checkPermission.check, followController.unFollow)
}