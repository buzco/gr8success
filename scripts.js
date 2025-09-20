document.querySelectorAll('.product-image').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('zoomed');
  });
});

document.querySelectorAll('.product-template').forEach(product => {
  const viewer = product.querySelector('.product-image');
  const thumbnails = Array.from(product.querySelectorAll('.image-thumb img'));

  if (!viewer || thumbnails.length === 0) {
    return;
  }

  product.addEventListener(
    'pointerover',
    event => {
      const target = event.target;

      if (!(target instanceof HTMLElement) || !target.matches('.image-thumb img')) {
        return;
      }

      if (viewer.src !== target.src) {
        viewer.src = target.src;
      }

      thumbnails.forEach(img => {
        img.classList.toggle('active', img === target);
      });
    }
  );
});
