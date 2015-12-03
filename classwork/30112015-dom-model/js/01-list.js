/**
 * Created by sergeypoliakov on 27.11.15.
 */

var myMenu = ['<li>На главную</li>', '<li>О нас</li>', '<li>Контакты</li>'];
var parent = document.getElementsByName('mylist')[0];

for (i in myMenu) {
    parent.innerHTML+=myMenu[i];
}
