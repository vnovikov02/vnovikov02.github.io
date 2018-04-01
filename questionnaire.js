//// Getting data from Google spreadsheet to load a list for assessment on load of webpage

// link to script built-in to the target spreadsheet, deployed as web app
var googleListAPI = 'https://script.google.com/macros/s/AKfycbw5L1VsicC8eNY28DeiIhOi4jqtBrb82QsAvOgBTUFmpJgROih0/exec'

// load list of people to assess and put the data into the webform dropdown list
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

//// Submitting data to a published google web app
var msgSuccess = document.querySelector('.alert-success');
var msgError = document.querySelector('.alert-danger');

var myForm = document.querySelector('#webform');
var btnSubmit = document.querySelector('.btn-primary');


//link to external google script deployed as web app 
var googleResultAPI = 'https://script.google.com/macros/s/AKfycbyXjT273ZKUtHwwx8fFhWzMtJO5sWQr1Kth622qdBjpnZnZtBs/exec'


var alerts = document.querySelector('.alert-list');
//initial value if something wrong occured
alerts.innerHTML = 'Please answer all the questions to submit your response'

// sequence of actions on submit
myForm.addEventListener('submit', function (ev) {
    ev.preventDefault();

    //define variables for each form to check input validity when submit will be clicked
    var formName = document.querySelector('#InputName');
    var formEmail = document.querySelector('#InputEmail');
    var fbaList = document.querySelector('.fba-list');
    
    debugger
    // !! add here validation of input forms, if everything ok - process further:
    if (formName.value.length === 0) {
        console.log('field "Name" is empty');
        alerts.innerHTML = 'Please fill in your name'
        msgError.removeAttribute("hidden");
        msgSuccess.setAttribute("hidden", "");
    }
    else if (formEmail.value.length === 0) {
        console.log('field "Email" is empty');
        alerts.innerHTML = 'Please fill in your Email'
        msgError.removeAttribute("hidden");
        msgSuccess.setAttribute("hidden", "");
    }
    //built-in bootstrap form functionality - no need to make additional validation of Email field using regular expressions

    else if (fbaList.value.length === 0) {
        console.log('select your FBA');
        alerts.innerHTML = 'Please select your FBA'
        msgError.removeAttribute("hidden");
        msgSuccess.setAttribute("hidden", "");
    }
    else if (!ValidateAll()) {
        console.log('not all the questions were answered');
        alerts.innerHTML = 'Please answer all the questions first'
        msgError.removeAttribute("hidden");
        msgSuccess.setAttribute("hidden", "");
    }
    else {
    // when all checks were passed - continue to submit the form data to the DB
    
    // somy jquery magic to convert form data into string for json
    var dataJSON = $('#webform').serialize();

    // fetch'ing GET request - send JSON with submitted answeres
    var targetRequest = googleResultAPI + "?" + dataJSON;
    fetch(targetRequest, {mode: 'no-cors'});
    msgError.setAttribute("hidden", "");
    btnSubmit.setAttribute("hidden", "");
    msgSuccess.removeAttribute("hidden");

    }
});

//function to check if all the questions were answered
function ValidateAll() {
    
    var radioGroupArray = ['question1', 'question2', 'question3', 'question4', 'question5'];
    var valid = false;

    for (var j = 0; j < radioGroupArray.length; j++) {

        var radios = document.getElementsByName(radioGroupArray[j]);
        
        if(ValidateGroup(radios)) {
            valid = true;
        }
        else {
            valid = false;
            break;
        }

    };
    return valid;
};

//function to check if one of question's radio button was selected
function ValidateGroup(radios) {
    
    var validGroup = false;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log("Selected Value = " + radios[i].value);
            validGroup = true;
            //return true; // checked
        }
    };
    return validGroup;
};