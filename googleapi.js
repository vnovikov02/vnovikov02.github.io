    // Ключ доступа к API
var API_KEY = 'AIzaSyDudWShBBzpXxHLpu1dS1BG_TthtapTn6A';
    // Идентификатор Google-таблицы (берется из адресной строки)
var SpreadSheetID = '1loJsf7g4QWxyBplOxLJtcA2npBezS3F4Vvnw6dkVbVU';
var range = 'A1:B6';

// Полная строка GET-запроса к API
var API_URL =
  'https://sheets.googleapis.com/v4/spreadsheets/'
  + SpreadSheetID
  + '/values/'
  + range
  + '?key=' + API_KEY;

// Отправляем запрос
fetch(API_URL)
  .then(response => response.json()) // обрабатываем ответ API
  .then(response => {
    console.log(response.values); // выводим содержимое таблицы в консоль
    var table = document.createElement('table');
    table.className = 'data-table';

    [
      ['Страна', 'Столица'],
      ['Россия', 'Москва'],
      ['Франция', 'Париж'],
    ]

    /*
    <table class="data-table">
      <tr><td>Страна</td><td>Столица</td></tr>
      <tr><td>Страна</td><td>Столица</td></tr>
      <tr><td>Страна</td><td>Столица</td></tr>
      <tr><td>Страна</td><td>Столица</td></tr>
    </table>
    */

    var tableHTML = response.values.map(row => {
      return `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`
    })
    .join('');

    table.innerHTML = tableHTML;

    // for (var i = 0; i < response.values.length; i++) {
    //   var row = response.values[i];
    //   // row = ['Страна', 'Столица']

    //   table.innerHTML += `
    //     <tr>
    //       <td>${row[0]}</td>
    //       <td>${row[1]}</td>
    //     </tr>
    //   `;
    // }

    document.body.appendChild(table);
  })