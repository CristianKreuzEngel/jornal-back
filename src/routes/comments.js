const commentsController = require('../controllers/comments')

module.exports = (app) => {
    app.get('/comments', commentsController.getAll);
    app.post('/create-comment', commentsController.createComment);
    app.delete('/delete-comment', commentsController.deleteComment);
    app.put('/update-comment', commentsController.updateComment);
}