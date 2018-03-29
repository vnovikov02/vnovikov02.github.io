//// Getting data from Google spreadsheet to load a list for assessment onload of webpage

var googleListAPI = 'https://script.google.com/macros/s/AKfycbw5L1VsicC8eNY28DeiIhOi4jqtBrb82QsAvOgBTUFmpJgROih0/exec'

window.addEventListener('load', function(loadlist) {
fetch(googleListAPI)
.then(function(response) {
    return response.text();
    })
.then(function(response) {
    var arrayList = response.split(',');
    var listHTML = '<option>' + arrayList.join('</option><option>') + '</option>';
    var fbaList = document.querySelector('.fba-list');
    fbaList.innerHTML = fbaList.innerHTML + listHTML;
    })
.catch()
});

//// Submitting data to a published google app
var msgSuccess = document.querySelector('.alert-success');
var msgError = document.querySelector('.alert-danger');

var myForm = document.querySelector('#webform');
var btnSubmit = document.querySelector('.btn-primary');

var googleResultAPI = 'https://script.google.com/macros/s/AKfycbyXjT273ZKUtHwwx8fFhWzMtJO5sWQr1Kth622qdBjpnZnZtBs/exec'

myForm.addEventListener('submit', function (ev) {
    ev.preventDefault();
    // somy jquery magic to convert form data into string for json
    var dataJSON = $('#webform').serialize();
    // fetch'ing GET request
    var targetRequest = googleResultAPI + "?" + dataJSON;
    fetch(targetRequest, {mode: 'no-cors'});
    msgError.setAttribute("hidden", "");
    btnSubmit.setAttribute("hidden", "");
    msgSuccess.removeAttribute("hidden");
});

