//your code here
const addBtn = document.getElementById("add");
const itemInput = document.getElementById("item-name-input");
const priceInput = document.getElementById("item-price-input");
const tableBody = document.getElementById("table-body");
const totalDisplay = document.getElementById("total");

let grandTotal = 0;

function updateTotal() {
  totalDisplay.textContent = `Grand Total: $${grandTotal.toFixed(2)}`;
}

function addItem() {
  const itemName = itemInput.value.trim();
  const itemPrice = parseFloat(priceInput.value);

  if (itemName === "" || isNaN(itemPrice) || itemPrice <= 0) {
    alert("Please enter a valid item name and price greater than 0.");
    return;
  }

  const row = document.createElement("tr");
  row.setAttribute("aria-role", "row");

  const itemCell = document.createElement("td");
  itemCell.id = "item";
  itemCell.setAttribute("aria-role", "cell");
  itemCell.textContent = itemName;

  const priceCell = document.createElement("td");
  priceCell.id = "price";
  priceCell.setAttribute("aria-role", "cell");
  priceCell.textContent = `$${itemPrice.toFixed(2)}`;

  row.appendChild(itemCell);
  row.appendChild(priceCell);
  tableBody.appendChild(row);

  grandTotal += itemPrice;
  updateTotal();

  itemInput.value = "";
  priceInput.value = "";
  itemInput.focus();
}

addBtn.addEventListener("click", addItem);

updateTotal();
