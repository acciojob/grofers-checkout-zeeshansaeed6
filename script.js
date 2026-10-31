const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;
  
  prices.forEach(price => {
    total += Number(price.innerText);
  });

  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  
  newRow.innerHTML = `
    <td>Total</td>
    <td id="ans">${total}</td>
  `;
  
  table.appendChild(newRow);
};