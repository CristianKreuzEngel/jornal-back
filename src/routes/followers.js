const followController = require('../controllers/followers')


module.exports = (app) => {
    app.post('/follow', followController.createFollow)
    app.get('/my-followers', followController.getFollowers)
}