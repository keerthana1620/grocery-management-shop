const tags = [
  "all",
  "vegetables",
  "fruits",
  "dairy",
  "meat",
  "cereals",
  "snacks",
];

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Broccoli",
    tags: ["all", "vegetables"],
    price: 100,
  },
  {
    image:
      "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Apple",
    tags: ["all", "fruits"],
    price: 110,
  },
  {
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Milk",
    tags: ["all", "dairy"],
    price: 32,
  },
  {
    image:
      "https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVlZnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Beef",
    tags: ["all", "meat"],
    price: 200,
  },
  {
    image:
      "https://images.unsplash.com/photo-1598048851887-0263d4f43e73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2F0c3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Oats",
    tags: ["all", "cereals"],
    price: 300,
  },
  {
    image:
      "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Chips",
    tags: ["all", "snacks"],
    price: 20,
  },
  {
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww",
    name: "Carrot",
    tags: ["all", "vegetables"],
    price: 15,
  },
  {
    image:
      "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Banana",
    tags: ["all", "fruits"],
    price: 80,
  },
  {
    image:
      "https://images.unsplash.com/photo-1562114808-b4b33cf60f4f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW9ndXJ0fGVufDB8fDB8fHww",
    name: "curd",
    tags: ["all", "dairy"],
    price: 40,
  },
  {
    image:
      "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMG1lYXR8ZW58MHx8MHx8fDA%3D",
    name: "Chicken",
    tags: ["all", "meat"],
    price: 150,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1705338026411-00639520a438?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmljZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Rice",
    tags: ["all", "cereals"],
    price: 500,
  },
  {
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "chocolate",
    tags: ["all", "snacks"],
    price: 80,
  },
  {
    image:
      "https://images.unsplash.com/photo-1578283326173-fbb0f83b59b2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Spinach",
    tags: ["all", "vegetables"],
    price: 13,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1675667408018-3b64dbc55db1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlfGVufDB8fDB8fHww",
    name: "Orange",
    tags: ["all", "fruits"],
    price: 110,
  },
  {
    image:
      "https://images.unsplash.com/photo-1589881133595-a3c085cb731d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Cheese",
    tags: ["all", "dairy"],
    price: 80,
  },
  {
    image:
      "https://images.unsplash.com/photo-1624234763734-c9629a2777c1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ya3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Pork",
    tags: ["all", "meat"],
    price: 170,
  },
  {
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdoZWF0fGVufDB8fDB8fHww",
    name: "Wheat",
    tags: ["all", "cereals"],
    price: 130,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1671455916389-0964887400b9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJldHplbHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Pretzels",
    tags: ["all", "snacks"],
    price: 50,
  },
  {
    image:
      "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvfGVufDB8fDB8fHww",
    name: "Tomato",
    tags: ["all", "vegetables"],
    price: 12,
  },
  {
    image:
      "https://media.istockphoto.com/id/1200996361/photo/bunch-of-organic-grapes.webp?a=1&b=1&s=612x612&w=0&k=20&c=50PVoDEK4ZMPmtbT-BJzLF4xsANmyzfW9WEd1e_lw1U=",
    name: "Grapes",
    tags: ["all", "fruits"],
    price: 100,
  },
  {
    image:
      "https://images.unsplash.com/photo-1642582037312-9b9639be89e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9uaW9ufGVufDB8fDB8fHww",
    name: "Onion",
    tags: ["all", "vegetables"],
    price: 50,
  },

  {
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvfGVufDB8fDB8fHww",
    name: "Potato",
    tags: ["all", "vegetables"],
    price: 20,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1675364893053-180a3c6e0119?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2luZ2VyfGVufDB8fDB8fHww",
    name: "Ginger",
    tags: ["all", "vegetables"],
    price: 10,
  },
  {
    image:
      "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FybGljfGVufDB8fDB8fHww",
    name: "Garlic",
    tags: ["all", "vegetables"],
    price: 120,
  },
  {
    image:
      "https://images.unsplash.com/photo-1535189487909-a262ad10c165?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29yaWFuZGVyfGVufDB8fDB8fHww",
    name: "Coriander",
    tags: ["all", "vegetables"],
    price: 10,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1725549578976-2aa34e0f3d01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWludHxlbnwwfHwwfHx8MA%3D%3D",
    name: "mint",
    tags: ["all", "vegetables"],
    price: 30,
  },
  {
    image:
      "https://images.unsplash.com/photo-1594282241894-4da286138f44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN0cmF3YmVycnl8ZW58MHx8MHx8fDA%3D",
    name: "Strawberry",
    tags: ["all", "fruits"],
    price: 150,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1668076515507-c5bc223c99a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9tZWdyYW5hdGV8ZW58MHx8MHx8fDA%3D",
    name: "Pomegranate",
    tags: ["all", "fruits"],
    price: 300,
  },
  {
    image:
      "https://images.unsplash.com/photo-1605027990121-cbae9e0642df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuZ298ZW58MHx8MHx8fDA%3D",
    name: "Mango",
    tags: ["all", "fruits"],
    price: 200,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1700612685744-a8447b4cd884?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJ1dHRlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Butter",
    tags: ["all", "dairy"],
    price: 80,
  },
  {
    image:
      "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFuZWVyfGVufDB8fDB8fHww",
    name: "paneer",
    tags: ["all", "dairy"],
    price: 160,
  },
  {
    image:
      "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVnZ3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Egg",
    tags: ["all", "dairy"],
    price: 6,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1667545932065-59f39c3c4f2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXV0dG9ufGVufDB8fDB8fHww",
    name: "Mutton",
    tags: ["all", "meat"],
    price: 1500,
  },
  {
    image:
      "https://images.unsplash.com/photo-1569224559512-1bea230f2e51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0JTIwZmlzaHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Fish",
    tags: ["all", "meat"],
    price: 8000,
  },
  {
    image:
      "https://images.unsplash.com/photo-1547571233-02e0e8dc6a76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0JTIwY3JhYnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Crab",
    tags: ["all", "meat"],
    price: 1505,
  },
  {
    image:
      "https://images.unsplash.com/photo-1504309250229-4f08315f3b5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFya2V0JTIwcHJhd258ZW58MHx8MHx8fDA%3D",
    name: "Prawn",
    tags: ["all", "meat"],
    price: 800,
  },
  {
    image:
      "https://images.unsplash.com/photo-1623066798929-946425dbe1b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFpemV8ZW58MHx8MHx8fDA%3D",
    name: "maize",
    tags: ["all", "cereals"],
    price: 60,
  },
  {
    image:
      "https://images.unsplash.com/photo-1702041357314-db5826c96f04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9vciUyMGRhbHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Toor dal",
    tags: ["all", "cereals"],
    price: 140,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1675237625827-38268aafc571?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2twZWFzfGVufDB8fDB8fHww",
    name: "chickpeas",
    tags: ["all", "cereals"],
    price: 160,
  },
  {
    image:
      "https://images.unsplash.com/photo-1526346698789-22fd84314424?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWxsaXxlbnwwfHwwfHx8MA%3D%3D",
    name: "chilli",
    tags: ["all", "vegetables"],
    price: 180,
  },
  {
    image:
      "https://images.unsplash.com/photo-1639843606783-b2f9c50a7468?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U295YSUyMGJlYW5zfGVufDB8fDB8fHww",
    name: "Soya bean",
    tags: ["all", "cereals"],
    price: 60,
  },
  {
    image:
      "https://images.unsplash.com/photo-1591801058986-9e28e68670f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcHBlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Pepper",
    tags: ["all", "cereals"],
    price: 90,
  },
  {
    image:
      "https://images.unsplash.com/photo-1695623675612-9745e0c2849b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwJTIwbm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Cup noodles",
    tags: ["all", "snacks"],
    price: 45,
  },
  {
    image:
      "https://images.unsplash.com/photo-1607114910421-a7c2b982d497?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvb2tpZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "cookie",
    tags: ["all", "snacks"],
    price: 45,
  },
  {
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "cup cake",
    tags: ["all", "snacks"],
    price: 45,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1726072359359-a5259d4907e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVmZnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Little hearts",
    tags: ["all", "snacks"],
    price: 45,
  },
  {
    image:
      "https://images.unsplash.com/photo-1620685581318-91ce6f1b76ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFja2ZydWl0fGVufDB8fDB8fHww",
    name: "Jackfruit",
    tags: ["all", "fruits"],
    price: 150,
  },
  {
    image:
      "https://images.unsplash.com/photo-1652031552021-50bcc01121a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGVybWVsb258ZW58MHx8MHx8fDA%3D",
    name: "watermelon",
    tags: ["all", "fruits"],
    price: 30,
  },
  {
    image:
      "https://images.unsplash.com/photo-1600659090872-74ca5ca1023a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3VhdmF8ZW58MHx8MHx8fDA%3D",
    name: "Guava",
    tags: ["all", "fruits"],
    price: 45,
  },
  {
    image:
      "https://images.unsplash.com/photo-1552427085-45d07c9e950d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhcGF5YXxlbnwwfHwwfHx8MA%3D%3D",
    name: "papaya",
    tags: ["all", "fruits"],
    price: 60,
  },
];

const productContainer = document.getElementById("products");
const filterButtonsContainer = document.getElementById("filter-buttons");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const cartCount = document.querySelector(".cart-count");
const cartBtn = document.getElementById("cart-btn");
const cartPopover = document.getElementById("cart-popover");
const closeCartBtn = document.getElementById("close-cart");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalPrice = document.getElementById("cart-total-price");

let cart = [];
let currentFilter = "all";
let searchQuery = "";
let isCartOpen = false;

function init() {
  renderFilterButtons();
  renderProducts();
  setupEventListeners();
}

function setupEventListeners() {
  filterButtonsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      const filter = e.target.textContent.toLowerCase();
      setActiveFilter(filter);
      currentFilter = filter;
      renderProducts();
    }
  });

  searchBtn.addEventListener("click", handleSearch);
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  });

  productContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const productElement = e.target.closest(".product");
      const productId = productElement.dataset.id;
      addToCart(productId);
    }
  });

  cartBtn.addEventListener("click", toggleCartPopover);
  closeCartBtn.addEventListener("click", hideCartPopover);

  document.addEventListener("click", (e) => {
    if (
      isCartOpen &&
      !cartPopover.contains(e.target) &&
      !cartBtn.contains(e.target)
    ) {
      hideCartPopover();
    }
  });

  cartItemsContainer.addEventListener("click", handleCartItemActions);
}

function toggleCartPopover() {
  if (isCartOpen) {
    hideCartPopover();
  } else {
    showCartPopover();
  }
}

function showCartPopover() {
  cartPopover.classList.add("show");
  renderCartItems();
  isCartOpen = true;
}

function hideCartPopover() {
  cartPopover.classList.remove("show");
  isCartOpen = false;
}

function handleCartItemActions(e) {
  if (e.target.classList.contains("quantity-btn-increase")) {
    const productId = e.target.closest(".cart-item").dataset.id;
    updateCartItemQuantity(productId, 1);
  } else if (e.target.classList.contains("quantity-btn-decrease")) {
    const productId = e.target.closest(".cart-item").dataset.id;
    updateCartItemQuantity(productId, -1);
  } else if (e.target.classList.contains("cart-item-remove")) {
    const productId = e.target.closest(".cart-item").dataset.id;
    removeCartItem(productId);
  }
}

function updateCartItemQuantity(productId, change) {
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity += change;

    if (cartItem.quantity <= 0) {
      removeCartItem(productId);
    } else {
      updateCartCount();
      renderCartItems();
    }
  }
}

function removeCartItem(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartCount();
  renderCartItems();

  if (cart.length === 0) {
    hideCartPopover();
  }
}

function renderCartItems() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <p>Your cart is empty</p>
      </div>
    `;
    cartTotalPrice.textContent = "₹0";
    return;
  }

  let totalPrice = 0;

  cart.forEach((item) => {
    const product = products[item.id];
    const itemTotal = product.price * item.quantity;
    totalPrice += itemTotal;

    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item");
    cartItemElement.dataset.id = item.id;

    cartItemElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-name">${product.name}</h4>
        <p class="cart-item-price">₹${product.price} x ${item.quantity}</p>
      </div>
      <div class="cart-item-quantity">
        <button class="quantity-btn quantity-btn-decrease">-</button>
        <span class="quantity-input">${item.quantity}</span>
        <button class="quantity-btn quantity-btn-increase">+</button>
      </div>
    `;

    cartItemsContainer.appendChild(cartItemElement);
  });

  cartTotalPrice.textContent = `₹${totalPrice}`;
}

function handleSearch() {
  searchQuery = searchInput.value.trim().toLowerCase();
  renderProducts();
}

function addToCart(productId) {
  const product = products[productId];

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  updateCartCount();

  if (isCartOpen) {
    renderCartItems();
  }

  showNotification(`${product.name} added to cart!`);
}

function updateCartCount() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
}

function showNotification(message) {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("hide");
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 500);
  }, 3000);
}

function setActiveFilter(filter) {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    if (btn.textContent.toLowerCase() === filter) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function renderFilterButtons() {
  tags.forEach((tag) => {
    const button = document.createElement("button");
    button.classList.add("filter-btn");
    if (tag === "all") {
      button.classList.add("active");
    }
    button.textContent = tag;
    filterButtonsContainer.append(button);
  });
}

function filterProducts() {
  return products.filter((product) => {
    const matchesTag =
      currentFilter === "all" || product.tags.includes(currentFilter);
    const matchesSearch =
      searchQuery === "" || product.name.toLowerCase().includes(searchQuery);

    return matchesTag && matchesSearch;
  });
}

function renderProducts() {
  productContainer.innerHTML = "";
  const filteredProducts = filterProducts();

  if (filteredProducts.length === 0) {
    productContainer.innerHTML = `
      <div class="no-products">
        <p>No products found matching your criteria.</p>
      </div>
    `;
    return;
  }

  filteredProducts.forEach((product, index) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.dataset.id = products.findIndex(
      (p) => p.name === product.name
    );

    const category = product.tags.find((tag) => tag !== "all") || "";

    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-content">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-category">${category}</p>
        <p class="product-price">₹${product.price}</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    `;

    productContainer.append(productElement);
  });
}

function addNotificationStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .notification {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: var(--primary);
      color: white;
      padding: 15px 25px;
      border-radius: 5px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      transform: translateY(0);
      opacity: 1;
      transition: all 0.5s ease;
    }
    
    .notification.hide {
      transform: translateY(30px);
      opacity: 0;
    }
  `;
  document.head.appendChild(style);
}
document.addEventListener("DOMContentLoaded", function () {
    const checkoutBtn = document.querySelector(".checkout-btn");
    const cartPopover = document.getElementById("cart-popover");

    checkoutBtn.addEventListener("click", function () {
        // Hide cart popover
        cartPopover.style.display = "none";

        // Display confirmation message
        showOrderConfirmation();
    });

    function showOrderConfirmation() {
        const confirmationMessage = document.createElement("div");
        confirmationMessage.classList.add("order-confirmation");
        confirmationMessage.innerHTML = `
            <h2>Thank You for Your Order!</h2>
            <p>Your groceries are on their way. We hope you enjoy your fresh products!</p>
            <button class="close-confirmation">Close</button>
        `;

        document.body.appendChild(confirmationMessage);

        const closeBtn = document.querySelector(".close-confirmation");
        closeBtn.addEventListener("click", function () {
            confirmationMessage.remove();
        });
    }
});

addNotificationStyles();
init();