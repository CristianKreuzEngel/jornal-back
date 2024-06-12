const loginController = require('../controllers/login')

module.exports = (app) => {
    app.post('/login', loginController.login
        /* #swagger.tags = ['Auth']
   #swagger.summary = 'Realiza login'
   #swagger.description = 'Rota de login que utiliza autenticação básica'
   #swagger.parameters['authorization'] = {
       in: 'header',
       required: true,
       type: 'string',
       description: 'Cabeçalho de autenticação Basic',
       example: 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
   }
   #swagger.parameters['body'] = {
       in: 'body',
       required: true,
       schema: {
            user: 'matheus@teste.com',
            pass: 'coxinha123' 
       }
   }
   #swagger.responses[201] = {
       description: 'Login realizado com sucesso',
       schema: {
           properties: {
               status: { type: 'string' },
               usuario: { type: 'string' }
           }
       }
   }
   #swagger.responses[400] = {
       description: 'Solicitação Inválida'
   }
   #swagger.responses[500] = {
       description: 'Erro Interno do Servidor'
   }
*/
    )
}