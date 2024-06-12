const commentsController = require('../controllers/comments')
const checkPermission = require("../middleware/checkPermission");

module.exports = (app) => {
    app.get('/comments', checkPermission.check, commentsController.getAll);
    app.post('/create-comment', checkPermission.check, commentsController.createComment);
    app.delete('/delete-comment', checkPermission.check, commentsController.deleteComment);
    app.put('/update-comment', checkPermission.check, commentsController.updateComment);
}