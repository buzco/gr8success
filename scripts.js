// --- Código de Zoom (Não alterado) ---
document.querySelectorAll('.product-image').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('zoomed');
  });
});

// --- NOVO CÓDIGO para troca de imagens (Melhor Acessibilidade) ---
document.querySelectorAll('.product-template').forEach(product => {
  const viewer = product.querySelector('.product-image');
  const thumbnails = Array.from(product.querySelectorAll('.image-thumb img'));

  if (!viewer || thumbnails.length === 0) {
    return;
  }

  // Função centralizada para trocar a imagem e atualizar o estado ativo
  const updateViewer = (target) => {
    // 1. Troca apenas se for diferente (melhor desempenho)
    if (viewer.src !== target.src) {
      viewer.src = target.src;
    }
    // 2. Garante que o texto alt é copiado (melhora o SEO e Acessibilidade)
    viewer.alt = target.alt; 

    // 3. Define a miniatura ativa
    thumbnails.forEach(img => {
      img.classList.toggle('active', img === target);
    });
  };
  
  // Tratamento de eventos para todas as interações
  product.addEventListener(
    'mouseover', // Usamos 'mouseover' como fallback seguro, ou 'pointerover'
    event => {
      const target = event.target;
      if (!(target instanceof HTMLElement) || !target.matches('.image-thumb img')) {
        return;
      }
      updateViewer(target);
    }
  );
  
  product.addEventListener(
    'click',
    event => {
      const target = event.target;
      if (!(target instanceof HTMLElement) || !target.matches('.image-thumb img')) {
        return;
      }
      // Permite a troca de imagem com um clique (essencial para mobile)
      updateViewer(target);
    }
  );
  
  // Otimização para utilizadores de teclado (Acessibilidade)
  // Certifique-se de que as miniaturas têm tabindex="0" no HTML.
  product.addEventListener(
    'focusin',
    event => {
      const target = event.target;
      if (!(target instanceof HTMLElement) || !target.matches('.image-thumb img')) {
        return;
      }
      updateViewer(target);
    }
  );
});