const postController = require('../controllers/posts');

module.exports = (app) => {
    /**
     * @swagger
     * tags:
     *   name: Posts
     *   description: Operações relacionadas aos posts
     */

    /**
     * @swagger
     * /posts:
     *   get:
     *     tags: [Posts]
     *     summary: Retorna todos os posts
     *     responses:
     *       200:
     *         description: Uma lista de posts
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Post'
     */
    app.get('/posts', postController.getAllPosts)

    /**
     * @swagger
     * /posts/search:
     *   get:
     *     tags: [Posts]
     *     summary: Retorna um post por ID
     *     parameters:
     *       - in: query
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: ID do post
     *     responses:
     *       200:
     *         description: Um post
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Post'
     *       404:
     *         description: Post não encontrado
     */
    app.get('/posts/search', postController.getById)

    /**
     * @swagger
     * /posts:
     *   post:
     *     tags: [Posts]
     *     summary: Cria um novo post
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               title:
     *                 type: string
     *               subtitle:
     *                 type: string
     *               content:
     *                 type: string
     *               author:
     *                 type: integer
     *               anexo:
     *                 type: string
     *               category:
     *                 type: integer
     *               topic:
     *                 type: integer
     *             example:
     *               title: "Título do Post"
     *               subtitle: "Subtítulo do Post"
     *               content: "Conteúdo do post."
     *               author: 1
     *               anexo: "url_do_anexo"
     *               category: 1
     *               topic: 1
     *     responses:
     *       201:
     *         description: Post criado com sucesso
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Post'
     *       400:
     *         description: Dados inválidos
     */
    app.post('/posts', postController.createPost)

    /**
     * @swagger
     * /posts/edit-post/{id}:
     *   patch:
     *     tags: [Posts]
     *     summary: Edita um post existente
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: ID do post
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               title:
     *                 type: string
     *               subtitle:
     *                 type: string
     *               content:
     *                 type: string
     *               anexo:
     *                 type: string
     *               category:
     *                 type: integer
     *               topic:
     *                 type: integer
     *             example:
     *               title: "Título do Post Editado"
     *               subtitle: "Subtítulo do Post Editado"
     *               content: "Conteúdo do post editado."
     *               anexo: "url_do_anexo_editado"
     *               category: 2
     *               topic: 2
     *     responses:
     *       200:
     *         description: Post editado com sucesso
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Post'
     *       400:
     *         description: Dados inválidos
     *       404:
     *         description: Post não encontrado
     */
    app.patch('/posts/edit-post/:id', postController.editPost)

    /**
     * @swagger
     * /posts/delete/{id}:
     *   delete:
     *     tags: [Posts]
     *     summary: Deleta um post
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: ID do post
     *     responses:
     *       200:
     *         description: Post deletado com sucesso
     *       404:
     *         description: Post não encontrado
     */
    app.delete('/posts/delete/:id', postController.deletePost)
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         subtitle:
 *           type: string
 *         content:
 *           type: string
 *         author:
 *           type: integer
 *         anexo:
 *           type: string
 *         category:
 *           type: integer
 *         topic:
 *           type: integer
 *       example:
 *         id: 1
 *         title: "Título do Post"
 *         subtitle: "Subtítulo do Post"
 *         content: "Conteúdo do post."
 *         author: 1
 *         anexo: "url_do_anexo"
 *         category: 1
 *         topic: 1
 */
