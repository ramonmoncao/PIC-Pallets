// Seleção de elementos
const menuBtn = document.querySelector('.menu-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');
const viewDetailsButtons = document.querySelectorAll('.view-details');
const productDetails = document.querySelector('.product-details');
const closeBtn = document.querySelector('.close-btn');

// Ativar o Menu Dropdown
menuBtn.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Exibir os Detalhes do Produto
viewDetailsButtons.forEach(button => {
  button.addEventListener('click', () => {
    productDetails.classList.add('active');
  });
});

// Fechar Detalhes do Produto
closeBtn.addEventListener('click', () => {
  productDetails.classList.remove('active');
});
