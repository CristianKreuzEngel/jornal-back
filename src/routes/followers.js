const followController = require('../controllers/followers')


module.exports = (app) => {
    app.post('/follow', followController.createFollow)
    app.get('/user/my-followers', followController.getFollowers)
    app.delete('/user/unfollow', followController.unFollow)
}