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
  } else {
    document.getElementById("product-details").innerHTML =
      "<p>No product ID provided!</p>";
  }
};
finding();


const cartBtn = document.querySelector("#details-cart");
cartBtn.addEventListener('click',()=>{
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
        } else {
          document.getElementById("product-details").innerHTML =
            "<p>No product ID provided!</p>";
        }
      };
      finding();
      
})

