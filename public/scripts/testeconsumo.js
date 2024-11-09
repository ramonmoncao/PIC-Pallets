// URL do endpoint da API
const url = 'http://localhost:3000/api/users';
const url2 = 'http://localhost:3000/api/products';

// Função para consumir a API e exibir os dados no HTML
function carregarDados() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Seleciona o elemento HTML onde os dados serão exibidos
            const dadosContainer = document.getElementById('dados-api');
            console.log(dadosContainer)
            // Itera sobre os dados e cria elementos HTML para exibir cada um
            data.forEach(usuario => {
                const usuarioDiv = document.createElement('div');
                usuarioDiv.classList.add('usuario');
                usuarioDiv.innerHTML = `
                    <p><strong>Nome:</strong> ${usuario.name}</p>
                    
                `;
                dadosContainer.appendChild(usuarioDiv);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
            document.getElementById('dados-api').innerHTML = "<p>Erro ao carregar dados.</p>";
        });
        fetch(url2)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Seleciona o elemento HTML onde os dados serão exibidos
            const dadosContainer = document.getElementById('dados-api');
            console.log(dadosContainer)
            // Itera sobre os dados e cria elementos HTML para exibir cada um
            data.forEach(produto => {
                const usuarioDiv = document.createElement('div');
                usuarioDiv.classList.add('produto');
                usuarioDiv.innerHTML = `
                    <p><strong>Nome:</strong> ${produto.name}</p>
                    
                `;
                dadosContainer.appendChild(usuarioDiv);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
            document.getElementById('dados-api').innerHTML = "<p>Erro ao carregar dados.</p>";
        });
}

// Chama a função para carregar dados ao carregar a página
document.addEventListener('DOMContentLoaded', carregarDados);
