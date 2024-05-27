const categoriesController = require('../controllers/categories')

module.exports = (app) => {
    app.get('/categories', categoriesController.getAll);
    app.post('/create-category', categoriesController.createCategory);
    app.delete('/delete-category', categoriesController.deleteCategory);
    app.put('/update-category', categoriesController.updateCategory);
}