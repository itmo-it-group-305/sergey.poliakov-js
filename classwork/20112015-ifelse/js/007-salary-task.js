/**
 * Created by sergeypoliakov on 20.11.15.
 */
var salary=window.prompt('Сколько дней вы работали в месяце');

if (salary <28 && salary > 0) {
    var basic=window.prompt ('Какова ваша профессия: 1. Директор 2. Работник');
    var coef=0;
    switch (basic) {
        case '1':
            coef=10000;
            break;
        case '2':
            coef=10;
            break;
        default:
            window.prompt('НЕ ВИДНО БЫЛО КАКИЕ ЦИФРЫ НАЖИМАТЬ?');
    }

    var yoursalary = 0;
    yoursalary = salary*coef;
    alert(yoursalary);
}

else {
    window.prompt('Вы не могли работать СТОЛЬКО');
}


