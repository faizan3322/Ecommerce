const products = [
    {
      id: 1,
      name: "Aurelia Attire T-shirt",
      description: "High-quality cotton T-shirt with an astronaut cartoon.",
      price: "$78",
      image: "Aurelia_Attire_logo.png"
    },
    {
      id: 2,
      name: "Brand Logo Shirt",
      description: "Stylish shirt with a clean brand logo design.",
      price: "$85",
      image: "logo.png"
    },
    {
      id: 3,
      name: "Hero Graphic T-shirt",
      description: "Graphic T-shirt with a bold superhero print.",
      price: "$90",
      image: "hero4.png"
    }
  ];
  
  // Function to get query parameter by name
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // Get the product ID from the query parameter
  const productId = getQueryParam('id');
  
  // Debugging output
  document.getElementById('debug').innerText = `Product ID: ${productId}`;
  
  // Find the selected product based on the ID
  const selectedProduct = products.find(p => p.id == productId);
  
  // Display product details on the details page
  if (selectedProduct) {
    const detailsDiv = document.getElementById('product-details');
    detailsDiv.innerHTML = `
      <h2>${selectedProduct.name}</h2>
      <img src="${selectedProduct.image}" alt="${selectedProduct.name}">
      <p>${selectedProduct.description}</p>
      <h4>Price: ${selectedProduct.price}</h4>
    `;
  } else {
    // Debugging for missing product
    document.getElementById('debug').innerText += " - Product not found";
  }
  