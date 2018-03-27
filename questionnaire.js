var myForm = document.querySelector('#webform');
var googleAPI = 'https://script.google.com/macros/s/AKfycbyXjT273ZKUtHwwx8fFhWzMtJO5sWQr1Kth622qdBjpnZnZtBs/exec'

$('#webform').submit(function(e) {
    e.preventDefault();
    var dataJSON = $('#webform').serialize();
    debugger
    $.get(googleAPI, 
        {
        // contentType: 'application/json; charset=utf-8',
        data: dataJSON,
        crossDomain: true,
        dataType: 'jsonp',
        success:function() {
            console.log(dataJSON);//whatever you wanna do after the form is successfully submitted
        }
    });
});
