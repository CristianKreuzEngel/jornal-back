const tagsControllers = require('../controllers/tagsControllers');

module.exports = (app) => {
    app.get('/tags', tagsControllers.getAll);
    app.post('/create-tag', tagsControllers.createTag);
    app.delete('/delete-tag', tagsControllers.deleteTag);
    app.put('/update-tag', tagsControllers.updateTag);
}