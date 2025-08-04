function mostrar(id) {
  const telas = document.querySelectorAll('.tela');
  telas.forEach(tela => tela.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// Mostra a primeira tela ao abrir
mostrar('introducao');
