const cart = [];
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const closeCartBtn = document.getElementById('close-cart-btn');
const checkoutBtn = document.getElementById('checkout-btn');

// Event listener for adding products to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const product = {
      name: e.target.dataset.name,
      price: parseFloat(e.target.dataset.price),
    };
    addToCart(product);
  });
});

// Add to cart function
function addToCart(product) {
  cart.push(product);
  updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
  cartBtn.innerText = `Cart (${cart.length})`;
  
  let cartContent = '';
  let total = 0;
  cart.forEach(item => {
    cartContent += `<li>${item.name} - $${item.price.toFixed(2)}</li>`;
    total += item.price;
  });

  cartItems.innerHTML = cartContent;
  totalPriceElement.innerText = total.toFixed(2);
}

// Open cart modal
cartBtn.addEventListener('click', () => {
  cartModal.style.display = 'flex';
});

// Close cart modal
closeCartBtn.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

// Checkout button (just a simple alert for now)
checkoutBtn.addEventListener('click', () => {
  alert('Checkout is not implemented yet.');
});
