    const express = require('express')
    const cookieParser = require('cookie-parser');

    const app = express();
    const port = 3000;


    app.use(express.json());
    app.use(cookieParser());
    app.get('/', (req, res) =>{
        res.cookie('Abacate', 'caroço');
        res.send('Hello world!')
    })
    require('./services/swagger')
    require('./routes')(app)

    app.use('/docs', express.static('src/views'))
    app.use('/docs/swagger.yaml', express.static('src/docs/swagger.yaml'))


    app.listen(port, () =>{
        console.log(`Aplicação rodando na porta ${port}`)
    })