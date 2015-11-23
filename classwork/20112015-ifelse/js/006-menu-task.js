/**
 * Created by sergeypoliakov on 20.11.15.
 */

var menu=window.prompt('Меню: \n 1-Наши услуги \n 2-Ваши услуги \n 3-Ничего интересного');

switch (menu) {
    case '1':
        window.prompt('У нас есть такая-то услуга');
        break;
    case '2':
        window.prompt('Сделайте за нас это');
        break;
    case '3':
        window.prompt('Я же сказал: НИЧЕГО ИНТЕРЕСНОГО');
        break;
    default:
        window.prompt('НЕ ВИДНО БЫЛО КАКИЕ ЦИФРЫ НАЖИМАТЬ?');
}