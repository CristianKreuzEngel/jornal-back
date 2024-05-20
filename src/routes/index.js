const user = require('./user')
const followers = require('./followers')

module.exports = (app) => {
    user(app);
    followers(app)
}