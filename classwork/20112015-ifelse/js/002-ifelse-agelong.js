/**
 * Created by sergeypoliakov on 20.11.15.
 */
var age=window.prompt('Введите ваш возраст');

if (age <0) {
    alert('Некорректный возраст');
}

else if (age < 10) {
    alert('Дети');
}

else if (age < 14) {
    alert('Подросток');
}

else if (age < 16 ) {
    alert('Тинейджер');
}

else if (age < 18) {
    alert('Раньше можно было пить пиво');
}

else if (age < 24) {
    alert ('Молодежь!');
}

else if (age < 30) {
    alert ('Разрешите показать вам рекламу');
}

else if (age < 35) {
    alert ('Желаете жилье в ипотеку?');
}

else if (age < 45) {
    alert ('У вас кризис среднего возраста');
}

else if (age < 65) {
    alert ('Говорят, что мужчина с возрастом становится лучше, как коньяк');
}

else if (age < 100) {
    alert ('Вы старпер');
}

else if (age < 150) {
    alert ('Вам больше века');
}

else {
    alert('Некорректный возраст');
}