const tagsControllers = require('../controllers/tags');
const checkPermission = require("../middleware/checkPermission");

module.exports = (app) => {
    app.get('/tags', checkPermission.check, tagsControllers.getAll);
    app.post('/create-tag', checkPermission.check, tagsControllers.createTag);
    app.delete('/delete-tag', checkPermission.check, tagsControllers.deleteTag);
    app.put('/update-tag', checkPermission.check, tagsControllers.updateTag);
}