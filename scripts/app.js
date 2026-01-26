console.log("E-Commerce Website Loaded");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
const productGrid = document.getElementById("productGrid");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

fetch("https://fakestoreapi.com/products")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return response.json();
  })
  .then(products => {
    loading.style.display = "none";
    displayProducts(products);
  })
  .catch(err => {
    loading.style.display = "none";
    error.textContent = "⚠️ Unable to load products. Please try again later.";
    console.error(err);
  });
function displayProducts(products) {
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" loading="lazy">
      <h3>${product.title}</h3>
      <p class="price">$${product.price}</p>
      <button>Add to Cart</button>
    `;

    productGrid.appendChild(card);
  });
}
fetch().then()
localStorage.setItem("products", JSON.stringify(products));
