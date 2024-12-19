let cart = [];
const bandColors = {
    cyan: "./assets/images/cyan.png",
    blue: "./assets/images/blue.png",
    black: "./assets/images/black.png",
    purple: "./assets/images/purple.png",
};

const elements = {
    quantity: document.getElementById("quantity"),
    decrement: document.getElementById("decrement"),
    increment: document.getElementById("increment"),
    cartModal: document.getElementById("cart-modal"),
    cartCount: document.getElementById("cart-count"),
    cartItems: document.getElementById("cart-items"),
    addToCart: document.getElementById("add-to-cart"),
    totalPrice: document.getElementById("total-price"),
    closeModal: document.querySelectorAll(".close-modal"),
    checkoutBtn: document.getElementById("checkout-btn"),
    productImage: document.getElementById("product-image"),
    totalQuantity: document.getElementById("total-quantity"),
};

// Update product image based on selected color
const updateImage = (color) => {
    elements.productImage.style.opacity = "0";
    elements.productImage.src = bandColors[color];
    elements.productImage.style.opacity = "1";
};

// Update quantity
const updateQuantity = (change) => {
    const current = parseInt(elements.quantity.value, 10) || 0;
    elements.quantity.value = Math.max(0, current + change);
};

// Update cart UI
const updateCartUI = () => {
    elements.cartCount.textContent = cart.length;
    elements.checkoutBtn.classList.toggle("hidden", cart.length === 0);
    
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    elements.totalQuantity.textContent = totalQuantity;
};

// Showing Message
const showNotice = (message) => {
    const notice = document.getElementById("cart-notice");
    notice.textContent = message;
    notice.classList.remove("hidden");
    setTimeout(() => {
        notice.classList.add("hidden");
    }, 3000); // Hide after 3 seconds
};


// Render cart items
const renderCartItems = () => {
    elements.cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(({ color, size, quantity, price }) => {
        elements.cartItems.insertAdjacentHTML(
            "beforeend",
            `<tr class="border-b border-[#DBDFEA]">
                <td class="py-4 flex items-center gap-2">
                    <img src="${bandColors[color]}" class="w-12 rounded-lg" />
                    <p class="hidden md:block">Classy Modern Smart watch</p>
                </td>
                <td class="py-4 px-4 text-center capitalize">${color}</td>
                <td class="py-4 px-4 font-bold text-center uppercase">${size}</td>
                <td class="py-4 px-8 font-bold text-center">${quantity}</td>
                <td class="py-4 text-right">$${(price * quantity).toFixed(2)}</td>
            </tr>`
        );
        total += price * quantity;
    });

    elements.totalPrice.textContent = `$${total.toFixed(2)}`;
};

// Function to get the selected size and its price
const getSelectedSizePrice = () => {
    const size = document.querySelector('input[name="size"]:checked')?.dataset.size || "M";
    const price = { s: 69, m: 79, l: 89, xl: 99 };
    return price[size] || 69;
};

// Event listeners
elements.decrement.addEventListener("click", () => updateQuantity(-1));
elements.increment.addEventListener("click", () => updateQuantity(1));

elements.addToCart.addEventListener("click", () => {
    try {
        const size = document.querySelector('input[name="size"]:checked')?.dataset.size || "M";
        const color = document.querySelector('input[name="color"]:checked')?.dataset.color || "purple";
        const price = getSelectedSizePrice();
        const quantity = parseInt(elements.quantity.value, 10) || 1; 
        const existingItem = cart.find(item => item.color === color && item.size === size);

        if (existingItem) {
            existingItem.quantity += quantity;
            existingItem.price = price; 
            showNotice("This item is updated.");
        } else {
            cart.push({ color, size, quantity, price });
            showNotice("This item is added to the cart.");
        }

        updateCartUI();
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
});


elements.checkoutBtn.addEventListener("click", () => {
    elements.cartModal.classList.add("active");
    renderCartItems();
});

elements.closeModal.forEach((button) => {
    button.addEventListener("click", () => {
        elements.cartModal.classList.remove("active");
    });
});

// Initialize color selection
document.querySelectorAll('input[name="color"]').forEach((input) =>
    input.addEventListener("change", (e) => updateImage(e.target.dataset.color))
);

// Set initial image
updateImage(document.querySelector('input[name="color"]:checked')?.dataset.color || "purple");