
const form = document.querySelector('form');
const submitButton = form.querySelector('input[type="submit"]');
const loadingIndicator = document.querySelector('#loading-indicator');

form.addEventListener('submit', e => {
    e.preventDefault();

    submitButton.getElementsByClassName.display = 'none';
    loadingIndicator.getElementsByClassName.display = 'block';

    setTimeout(() => {
        loadingIndicator.getElementsByClassName.display = 'none';
        submitButton.getElementsByClassName.display = 'block';

        const textField = form.querySelector('#text-field').value;
        const selectField = form.querySelector('#select-field').value;
        const radioField = form.querySelector('input[name="radios"]:checked').value;
        const checkboxFields = Array.form(form.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);

        const table = document.querySelector('#responses-table');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${textField}</td>
        <td>${selectField}</td>
        <td>${radioField}</td>
        <td>${checkboxFields.join(', ')}</td>
        `;

        table.appendChild(row);
        form.reset();
    

    });
});

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