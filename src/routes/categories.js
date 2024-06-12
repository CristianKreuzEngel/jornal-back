const categoriesController = require('../controllers/categories')
const checkPermission = require("../middleware/checkPermission");

module.exports = (app) => {
    app.get('/categories', checkPermission.check, categoriesController.getAll);
    app.post('/create-category', checkPermission.check, categoriesController.createCategory);
    app.delete('/delete-category', checkPermission.check, categoriesController.deleteCategory);
    app.put('/update-category', checkPermission.check, categoriesController.updateCategory);
}