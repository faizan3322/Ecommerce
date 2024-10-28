// Handle click on products and redirect to details page
document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('click', function() {
      const productId = this.getAttribute('data-id');
      // Redirect to details.html with the product ID as a query parameter
      window.location.href = `detail.html?id=${productId}`;
    });
  });
  