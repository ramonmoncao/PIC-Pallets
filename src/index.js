const express = require('express');
const app = express();
const PORT = 3000;

// Configura a pasta pública para servir arquivos estáticos
app.use(express.static('public'));

// Teste de rota para verificar se o servidor está funcionando
app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
