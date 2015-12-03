/**
 * Created by sergeypoliakov on 23.11.15.
 */
var season=window.prompt('Выберите месяц года: \n 1-Январь \n 2-Февраль \n 3-Март \n 4-Апрель \n 5-Май \n 6 - Июнь \n 7 - Июль \n 8 - Август \n 9 - Сентябрь \n 10 - Октябрь \n 11 - Ноябрь \n 12 - Декабрь ');

switch (season) {
    case '1':
    case '2':
    case '12':
        alert('Сейчас зима');
        break;
    case '3':
    case '4':
        alert('Сейчас весна (если вы не в Петербурге)');
        break;
    case '5':
        alert('Сейчас весна (возможно, даже в Петербурге)');
        break;
    case '6':
    case '7':
    case '8':
        alert('Сейчас лето');
        break;
    case '9':
    case '10':
    case '11':
        alert('Осень напоминает душе о самом главном');
        break;
    default:
        alert('НЕ ВИДНО БЫЛО КАКИЕ ЦИФРЫ НАЖИМАТЬ?');
}