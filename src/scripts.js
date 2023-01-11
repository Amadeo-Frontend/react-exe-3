

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
  // form submission starts
  // button is disabled
  btn.classList.add('spin');
  btn.disabled = true;
  
  // This disables the whole form via the fieldset
  btn.form.firstElementChild.disabled = true;
  
  // this setTimeout call mimics some asyncronous action
  // you would have something else here
  window.setTimeout(function () {
    // when asyncronous action is done, remove the spinner
    // re-enable button/fieldset
    btn.classList.remove('spin');
    btn.disabled = false;
    btn.form.firstElementChild.disabled = false;
  }, 4000);
}, false);


function handleFormSubmit(event) {
  event.preventDefault();
// get form values
const textField = document.getElementById("textfield").value;
const selectField = document.getElementById("select-field").value;
const radioField = document.getElementById("radio-Fields").value;
const checkField = document.getElementById("check-Field").value;
}
// create new table row and cells
const newRow = document.createElement("tr");
const textCell = document.createElement("td");
const selectCell = document.createElement("td");
const radioCell = document.createElement("td");
const checkCell = document.createElement("td");

// set text content of cells
textCell.textContent = text;
selectCell.selectCell = Option;
radioCell.selectField = Option;
checkCell.selectField = Option;

// append cells to row
newRow.appendChild(textCell);
newRow.appendChild(selectCell);
newRow.appendChild(radioCell);
newRow.appendChild(checkCell);

// append row to table
const table = document.getElementById("myTable");
table.appendChild(newRow);


const myModal = new bootstrap.Modal(document.getElementById('#modalTabela'), options)
document.getElementById("#modalTabela").classList.add("show");
document.getElementById("#modalTabela").classList.remove("show");
