/**
 * Created by sergeypoliakov on 23.11.15.
 */
var a=window.prompt('Введите целое число и мы проверим, является ли оно четным и двузначным');
if (a%2==0 && a.toString().length == 2) {
        alert('Данное целое число является четным двузначным числом')
    }

else {
    alert('Нечетное число')
}
