var number =prompt('Hohlagan soningizni kiriting');
var numberA = number % 2
 
if (numberA == 0) {
    alert('Kiritgan soningiz juft')
}
else if (isNaN(number)) {
    alert('Bu son emas! Boshidan kiriting')
}
else if (number < 0) {
    alert('Nimadur hato ketdi')
}
else {
    alert('Kiritgan soningiz toq')
}



var number = +prompt('Sonni kiriting')
var extent = +prompt('Darajani kiriting')


if (isNaN(number) || isNaN(extent) || number == 0 || extent == 0) {
    alert('Iltimos faqat son kiriting va kiritgan soningiz 0 dan baland bo\'lsin')
}
else {alert(number ** extent)
}

