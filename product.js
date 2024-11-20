// Function to fetch product details from JSON
async function fetchProductDetails(productId) {
  try {
    const response = await fetch("product.json"); // Fetch the JSON file
    const products = await response.json();

    // Find the product by ID
    const product = products.find((p) => p.id == productId);

    if (product) {
      // Display the product details in the HTML
      document.getElementById("product-details").innerHTML = `
                        <div class="container ">
                                <div class="row d-flex justify-content-center align-items-center ">
                                        <div class="col-12 col-md-4">
                                                        <div class="p-3 det">
                                                            <img  src="${product.image}" alt="${product.name}">
                                                        </div>
                                        </div>
                                                         <div class="col-12 col-md-8">
                                                            <div class="p-3 border bg-light details  ">
                                                                  <p class="fs-4">${product.name}</p>
                                                                  <span class="fs-2">${product.description}</span>
                                                                  <p class="fs-5">Price: ${product.price}</p>
                                                              
                                                           </div> 
                                                           
                                                        </div>
                                                   </div>
                                               </div>
                                                  `;
                                                  document.querySelector("#cartt").href=`cart.html?id=${productId}`
    } else {
      document.getElementById("product-details").innerHTML =
        "<p>Product not found!</p>";
    }
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
}

// Function to get the query parameter from the URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Get the product ID from the URL
const productId = getQueryParam("id");

// Fetch and display product details if the ID exists
const finding = () => {
  if (productId) {
    fetchProductDetails(productId);
    fetchProductDetail(productId);
  } else {
    document.getElementById("product-details").innerHTML =
      "<p>No product ID provided!</p>";
  }
};
finding();

// cartt

// Function to display cart items
function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");

  cartContainer.innerHTML = ""; // Clear the cart container
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity; // Calculate total price for the item
    total += itemTotal; // Add to total price

    // Create and append cart item HTML
    cartContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <h4>${item.name}</h4>
          <p>Price: ${item.price}</p>
          <p>Quantity: ${item.quantity}</p>
          <p>Total: ${itemTotal}</p>
        </div>
      </div>
    `;
  });

  totalPrice.innerHTML = `Total Price: ${total}`; // Display total price
}

// Call displayCartItems when the cart page loads
window.onload = displayCartItems;

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get the current cart from localStorage or initialize it

  // Check if the product is already in the cart
  const existingProductIndex = cart.findIndex(item => item.id === product.id);

  if (existingProductIndex !== -1) {
    // If the product exists, update the quantity
    cart[existingProductIndex].quantity += 1; // Increase quantity by 1
  } else {
    // If the product doesn't exist, add it to the cart
    cart.push({ ...product, quantity: 1 }); // Add product with quantity 1
  }

  localStorage.setItem("cart", JSON.stringify(cart)); // Save the updated cart back to localStorage
}

// Update the Add to Cart button click event
document.getElementById("details-cart").addEventListener("click", () => {
  const productId = getQueryParam("id");
  fetchProductDetails(productId).then(product => {
    addToCart(product); // Add product to cart
  });
});
    