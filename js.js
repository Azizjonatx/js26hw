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