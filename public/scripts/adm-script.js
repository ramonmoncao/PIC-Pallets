// URL do endpoint da API
const url = 'https://pic-pallets-axqx.onrender.com/api/products';

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
        const dadosContainer = document.getElementById('produtos');
        console.log(dadosContainer)
        // Itera sobre os dados e cria elementos HTML para exibir cada um
        data.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');
            produtoDiv.innerHTML = `
                <div class=produto-img><img id= imgProduct src=${produto.img} alt =${produto.name}Img></img></div>
                <div class="produto-id"><strong>id: ${produto.id}</strong></div>
                <div class="produto-nome"><strong> ${produto.name}</strong></div>
                <div class="produto-tamanho"> ${produto.width}x${produto.length}</div>
                <div class="produto-capacidade"><strong>Capacidade:</strong> ${produto.capacity}KG</div>
                <div class="produto-preco"><strong> R$${produto.price},00 </strong></div>
                <a class="produto-btn" href= "atualizarProduto.html?id=${produto.id}">Editar</a>
                <button class="produto-btn" onclick= removerProduto(${produto.id})>Remover </button>
            `
            dadosContainer.appendChild(produtoDiv);
        });
    })
    .catch(error => {
        console.error('Erro ao buscar dados:', error);
        document.getElementById('dados-api').innerHTML = "<p>Erro ao carregar dados.</p>";
    });
}


// Chama a função para carregar dados ao carregar a página
document.addEventListener('DOMContentLoaded', carregarDados);
function removerProduto(id) {
    fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        console.log('Recurso deletado com sucesso');
        alert('Produto deletado com sucesso!');
        window.location.reload()
      } else {
        console.error('Erro ao deletar o recurso');
        alert('Erro ao deletar o recurso.');
      }
    })
    .catch(error => console.error('Erro no DELETE:', error));
  }
