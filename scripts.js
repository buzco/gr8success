// Image zoom on main product image
document.querySelectorAll('.product-image').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('zoomed');
  });
});

// Thumbnail controls per product card
document.querySelectorAll('.product-template').forEach(product => {
  const viewer = product.querySelector('.product-image');
  const buttons = Array.from(product.querySelectorAll('.thumb-button'));

  if (!viewer || buttons.length === 0) {
    return;
  }

  const updateViewer = (button) => {
    const targetImg = button.querySelector('img');
    const newSrc = button.dataset.target || targetImg?.src;
    const newAlt = targetImg?.alt || viewer.alt;

    if (newSrc && viewer.src !== newSrc) {
      viewer.src = newSrc;
    }
    viewer.alt = newAlt;

    buttons.forEach(btn => {
      btn.classList.toggle('active', btn === button);
    });
  };

  buttons.forEach(btn => {
    ['click', 'focusin', 'mouseover'].forEach(eventName => {
      btn.addEventListener(eventName, () => updateViewer(btn));
    });
  });
});
