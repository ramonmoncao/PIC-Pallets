import cors from 'cors';
import express from 'express'; // Importa o Express
import swaggerUi from 'swagger-ui-express';
import routes from './routes'; // Importa as rotas
import swaggerFile from './swagger.json';

const app = express() // Cria uma instância do Express
const PORT = process.env.PORT || 3000 // Define a porta do servidor
app.use(cors)
app.use(express.json()) // Habilita o uso de JSON nas requisições

app.use('/api', routes) // Define o prefixo para as rotas

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`) // Inicia o servidor
})
