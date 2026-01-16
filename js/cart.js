document.addEventListener("DOMContentLoaded", () => {
  const menuDiv = document.getElementById("menu");
  const totalSpan = document.getElementById("total");
  let total = 0;

  menu.forEach(item => {
    const card = document.createElement("div");
    card.className = "card menu-item";

    card.innerHTML = `
      <div>
        <strong>${item.name}</strong><br>
        ₹${item.price}
      </div>
      <div>
        <input type="number" id="qty-${item.id}" value="0">
        <button>Add</button>
      </div>
    `;

    card.querySelector("button").addEventListener("click", () => {
      let qty = Number(document.getElementById(`qty-${item.id}`).value);

      // DEFECT: Only Veg Biryani allows negative
      if (item.name !== "Veg Biryani" && qty < 0) {
        qty = 0;
      }

      let price = item.price * qty;

      // DEFECT: French Fries ×10
      if (item.name === "French Fries") {
        price = item.price * qty * 10;
      }

      total += price;
      totalSpan.innerText = total;
    });

    menuDiv.appendChild(card);
  });
});
