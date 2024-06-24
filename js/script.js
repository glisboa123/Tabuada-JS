// seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const table = document.querySelector("#multiplication-operations");
const multiplicationTitle = document.querySelector("span");

// funções

const createTable = (number, multiplicatorNumber) => {
  table.innerHTML = "";

  for (let i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;

    const template = `<div class= "row">
        <div class="operation">${number} x ${i}</div>
        <div class="result"> = ${result}</div>
     </div>`;

    const parser = new DOMParser();
    const htmlTemplate = parser.parseFromString(template, "text/html");
    const row = htmlTemplate.querySelector(".row");
    table.appendChild(row);
  }

  multiplicationTitle.innerText = multiplicatorNumber;
};

// eventos
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;
  const multiplicatorNumber = +multiplicationInput.value;

  if (!multiplicationNumber || !multiplicatorNumber) {
    alert("Por favor, preencha os dois campos");
    return;
  }

  createTable(multiplicationNumber, multiplicatorNumber);
});
