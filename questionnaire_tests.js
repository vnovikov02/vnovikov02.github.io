var myForm = document.querySelector('#webform');
var googleAPI = 'https://script.google.com/macros/s/AKfycbyXjT273ZKUtHwwx8fFhWzMtJO5sWQr1Kth622qdBjpnZnZtBs/exec'

// 1 -sending of request with jQuery

// $('#webform').submit(function(e) {
//     e.preventDefault();
//     var dataJSON = $('#webform').serialize();
//     debugger
//     $.get(googleAPI, 
//         {
//         // contentType: 'application/json; charset=utf-8',
//         data: dataJSON,
//         crossDomain: true,
//         dataType: 'jsonp',
//         success:function() {
//             console.log(dataJSON); //action after the form is successfully submitted
//         }
//     });
// });

// 2 - sending request using Fetch()

myForm.addEventListener('submit', function (ev) {
    ev.preventDefault();

// somy jquery magic to convert form data into string for json
var dataJSON = $('#webform').serialize();

//// try POST request (finally doesn't work with CORS)

// var params = {
//     method: 'post',
//     mode: 'no-cors',
//     dataType: 'jsonp',
//     body: dataJSON,
//     headers: {
//         'Content-type': 'application/json'
//     }
// };

// fetch(googleAPI, params)
// .then(response => response.json())
// .then(json => console.log(json))


//// try GET request - it worked finally
var targetRequest = googleAPI + "?" + dataJSON;
    fetch(targetRequest, {mode: 'no-cors'});
debugger
});