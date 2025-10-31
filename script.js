const addBtn = document.getElementById("add");
const itemInput = document.getElementById("item-name-input");
const qtyInput = document.getElementById("item-qty-input");
const priceInput = document.getElementById("item-price-input");
const tableBody = document.getElementById("table-body");
const totalDisplay = document.getElementById("total");

let grandTotal = 0;

function updateTotal() {
  totalDisplay.textContent = `Grand Total: $${grandTotal.toFixed(2)}`;
}

function addItem() {
  const name = itemInput.value.trim();
  const qty = parseInt(qtyInput.value);
  const price = parseFloat(priceInput.value);

  if (name === "" || isNaN(qty) || qty <= 0 || isNaN(price) || price <= 0) {
    alert("Please enter valid item name, quantity, and price greater than 0.");
    return;
  }

  const total = qty * price;

  const row = document.createElement("tr");
  row.setAttribute("aria-role", "row");

  row.innerHTML = `
    <td id="item" aria-role="cell">${name}</td>
    <td aria-role="cell">${qty}</td>
    <td id="price" aria-role="cell">$${price.toFixed(2)}</td>
    <td aria-role="cell">$${total.toFixed(2)}</td>
  `;

  tableBody.appendChild(row);

  grandTotal += total;
  updateTotal();

  itemInput.value = "";
  qtyInput.value = "";
  priceInput.value = "";
  itemInput.focus();
}

addBtn.addEventListener("click", addItem);

updateTotal();
