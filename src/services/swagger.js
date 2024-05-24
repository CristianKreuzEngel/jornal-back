const swaggerAutogen = require('swagger-autogen')('pt-BR')


const doc = {
    info: {
        version: "1.0.0",
        title: "Apis Portal do Engel",
        description: "Documentação da API tchê!"
    },
    host: `localhost:3000`,
    basePath: "",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
}

const outputFile = './src/docs/swagger.yaml';
const endpointsFiles = ['./src/routes/user.js','./src/routes/followers.js'];


swaggerAutogen(outputFile, endpointsFiles, doc);