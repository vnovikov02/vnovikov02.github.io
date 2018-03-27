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
//             console.log(dataJSON);//whatever you wanna do after the form is successfully submitted
//         }
//     });
// });

// 2 - sending request using Fetch()

myForm.addEventListener('submit', function (ev) { // добавляем обработчик события submit (отправка формы)
    ev.preventDefault();

var dataJSON = $('#webform').serialize();


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


//// try GET request
var request = new Request({
    url: googleAPI + "?" + dataJSON,
    method: 'GET'
});
fetch(request);

});