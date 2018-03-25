// function isLeapYear(start, end) {
//     for (var i = start; i <= end; i++){
//         if ((i % 4 == 0 && i % 100 != 0) || (i % 400 == 0)) {
//                 console.log(i);
//             };
//         };
//     };

function isLeapYear(year) {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
                return true;
            }
        else {
            return false;
        };
    };