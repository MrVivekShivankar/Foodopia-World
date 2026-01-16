let cart = [];
let total = 0;

const menuDiv = document.getElementById("menu");
const cartDiv = document.getElementById("cart");
const totalSpan = document.getElementById("total");

menuItems.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card menu-item";

  card.innerHTML = `
    <b>${item.name}</b> ₹${item.price}
    <input type="number" value="0">
    <button>Add</button>
  `;

  const input = card.querySelector("input");
  const button = card.querySelector("button");

  button.onclick = () => {
    let qty = parseInt(input.value);

    // ❌ Defect: Negative allowed ONLY for Veg Biryani
    if (qty < 0 && item.name !== "Veg Biryani") return;

    // ❌ Defect: Add to cart adds twice
    cart.push(item.name);
    cart.push(item.name);

    // ❌ Defect: French Fries price ×1000
    if (item.name === "French Fries") {
      total += item.price * qty * 1000;
    } else {
      total += item.price * qty;
    }

    renderCart();
  };

  menuDiv.appendChild(card);
});

function renderCart() {
  cartDiv.innerHTML = "";
  cart.forEach(i => {
    cartDiv.innerHTML += `<p>${i}</p>`;
  });
  totalSpan.innerText = total;
}
