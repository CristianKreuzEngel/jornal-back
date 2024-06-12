const postController = require("../controllers/posts");
const checkPermission = require("../middleware/checkPermission");

module.exports = (app) => {
  /**
   * @swagger
   * tags:
   *   name: Posts
   *   description: Operações relacionadas aos posts
   */

  app.get(
    "/posts", checkPermission.check, postController.getAllPosts
   /* #swagger.tags = ["Posts"]
       #swagger.summary = 'Retorna todos os posts'
       #swagger.description = 'Retorna uma lista de todos os posts'
       #swagger.responses[200] = {
           description: 'Uma lista de posts',
           content: {
               "application/json": {
                   schema: {
                       type: 'array',
                       items: { $ref: '#/components/schemas/Post' }
                   }
               }
           }
       }
    */
  );
  app.get(
    "/posts/search",
    checkPermission.check,
    postController.getById
    /* #swagger.tags = ["Posts"]
       #swagger.summary = 'Retorna um post por ID'
       #swagger.description = 'Retorna um post específico pelo ID'
       #swagger.parameters['id'] = {
           in: 'query',
           description: 'ID do post',
           required: true,
           type: 'integer'
       }
       #swagger.responses[200] = {
           description: 'Um post',
           content: {
               "application/json": {
                   schema: { $ref: '#/components/schemas/Post' }
               }
           }
       }
       #swagger.responses[404] = {
           description: 'Post não encontrado'
       }
    */
  );

  app.post(
    "/posts",
    checkPermission.check,
    postController.createPost
    /* #swagger.tags = ["Posts"]
       #swagger.summary = 'Cria um novo post'
       #swagger.description = 'Cria um novo post com os dados fornecidos'
       #swagger.parameters['json'] = {
           in: 'body',
           description: 'Dados para criar um novo post',
           required: true,
           schema: {
            title: "Título do Post",
            subtitle: "Subtítulo do Post",
            content: "Conteúdo do post.",
            author: 1,
            anexo: "url_do_anexo",
            category: 1,
            topic: 1
           }
       }
       #swagger.responses[201] = {
           description: 'Post criado com sucesso',
           content: {
               "application/json": {
                   schema: { $ref: '#/components/schemas/Post' }
               }
           }
       }
       #swagger.responses[400] = {
           description: 'Dados inválidos'
       }
    */
  );
  app.patch(
    "/posts/edit-post/:id",
    checkPermission.check,
    postController.editPost
    /* #swagger.tags = ["Posts"]
       #swagger.summary = 'Edita um post existente'
       #swagger.description = 'Edita os dados de um post existente pelo ID'
       #swagger.parameters['id'] = {
           in: 'path',
           description: 'ID do post',
           required: true,
           type: 'integer'
       }
       #swagger.parameters['json'] = {
           in: 'body',
           description: 'Dados para editar o post',
           required: true,
           schema: {
               type: 'object',
               properties: {
                   title: { type: 'string' },
                   subtitle: { type: 'string' },
                   content: { type: 'string' },
                   anexo: { type: 'string' },
                   category: { type: 'integer' },
                   topic: { type: 'integer' }
               },
               example: {
                   title: "Título do Post Editado",
                   subtitle: "Subtítulo do Post Editado",
                   content: "Conteúdo do post editado.",
                   anexo: "url_do_anexo_editado",
                   category: 2,
                   topic: 2
               }
           }
       }
       #swagger.responses[200] = {
           description: 'Post editado com sucesso',
           content: {
               "application/json": {
                   schema: { $ref: '#/components/schemas/Post' }
               }
           }
       }
       #swagger.responses[400] = {
           description: 'Dados inválidos'
       }
       #swagger.responses[404] = {
           description: 'Post não encontrado'
       }
    */
  );

  app.delete(
    "/posts/delete/:id",
    checkPermission.check,
    postController.deletePost
    /* #swagger.tags = ["Posts"]
       #swagger.summary = 'Deleta um post'
       #swagger.description = 'Deleta um post existente pelo ID'
       #swagger.parameters['id'] = {
           in: 'path',
           description: 'ID do post',
           required: true,
           type: 'integer'
       }
       #swagger.responses[200] = {
           description: 'Post deletado com sucesso'
       }
       #swagger.responses[404] = {
           description: 'Post não encontrado'
       }
    */
  );
};
