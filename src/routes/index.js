const user = require('./user')
const followers = require('./followers')
const topics = require('./topics')
const posts = require('./posts')
const tags = require('./tags')
const comments = require('./comments')
const categories = require('./categories')
const login = require('./login')

module.exports = (app) => {
    user(app);
    followers(app);
    topics(app);
    posts(app);
    tags(app);
    comments(app);
    categories(app);
    login(app);
}