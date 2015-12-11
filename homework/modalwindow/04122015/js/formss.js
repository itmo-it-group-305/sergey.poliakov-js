/**
 * Created by sergeypoliakov on 27.11.15.
 */

    //форма
var form = { tag: 'form', id: 'newform',
    child: [
        {tag: 'input', type: 'button', value: 'x', onclick: 'closeForm()'},
        {tag: 'br'},
        {tag: 'label', text: 'Ваше имя', for: 'name'},
        {tag: 'br'},
        {tag: 'input', type: 'text', placeholder: 'Борис Борисович', id: 'name'},
        {tag: 'br'},
        {tag: 'label', text: 'Ваш телефон', for: 'phone'},
        {tag: 'br'},
        {tag: 'input', type: 'text', placeholder: '7 (812) 212-85-06', id: 'phone'},
        {tag: 'br'},
        {tag: 'label', text: 'Ваш e-mail', for: 'email'},
        {tag: 'br'},
        {tag: 'input', type: 'text', placeholder: 'bg@aquarium.ru', id: 'email'},
        {tag: 'br'},
        {tag: 'input', type: 'button', value: 'Отправить', onclick: 'getField()'}
    ]};


    //создатель форм
function builderHTML (obj) {
    for (i in obj) {
        //проверка что не пустой
        if (i==='tag') {
            var elm = document.createElement(obj[i]);
        }
        if (i=='text') {
            elm.innerHTML=obj[i];
        }
        if (i==='type' || i==='id' || i==='placeholder' || i==='onclick' || i==='value') {
            elm.setAttribute (i, obj[i])
        }
    }
    return elm;
}

function builderForm (obj) {
    for (i in obj) {
        if (i == 'tag') {
            parent = document.createElement(obj[i]);
        }
        if (i == 'child') {
            for (j in obj.child) {
                parent.appendChild( builderHTML(obj.child[j]) );
            }
        }
    }
    return parent;
}



    //валидаторы
function checkEmptyField (field) {
    return Boolean(field.value);
}

function checkPhone (str) {
    ptr = /\b7\(\d{3}\)\d{3}-\d{2}-\d{2}\b/;
    return ptr.test(str);
}

function checkMail (str) {
    ptr = /\b\w{1,20}@\w{1,20}\.\w{1,6}/;
    return ptr.test(str);
}


//действия кнопок

function closeForm () {
    var obj = document.getElementById('form');
    obj.innerHTML = "";
    var startcode = document.getElementById('getYourId');
    startcode.setAttribute('style', '');
}

    //Проверка полей и всё такое
function getField () {
    var fields = ['name', 'phone', 'email'];
    for (i in fields) {
        var obj = document.getElementById(fields[i]);
        if (checkEmptyField (obj)) {
            obj.removeAttribute("style");
            //Проверка телефона
            if (fields[i] == 'phone') {
                var phonecheck = checkPhone(phone.value)
                if (phonecheck) {
                    obj.removeAttribute("style");
                    mailcheck();
                    closeForm();
                    var message = document.getElementById('message');
                    message.innerHTML = '<p>Спасибо! Ваша форма принята</p>';
                }
                else {
                    obj.setAttribute("style", "border: 1px dashed red; border-radius: 10px")
                };
            };
            mailcheck();
        }
        else {
            obj.setAttribute("style", "border: 1px dashed red; border-radius: 10px")
        }
    }

    function mailcheck () {
        if (fields[i] == 'email') {
            var mailcheck = checkMail(email.value)
            if (mailcheck) {
                obj.removeAttribute("style");
            }
            else {
                obj.setAttribute("style", "border: 1px dashed red; border-radius: 10px")
            };
        };
    }
}

//Закрытие окна:


var startcode = document.getElementById('getYourId');
startcode.setAttribute('onclick','openForm()');

function openForm() {
    var parent = document.getElementById('form');
    parent.appendChild ( builderForm (form));
    var startcode = document.getElementById('getYourId');
    startcode.setAttribute('style', 'display: none');
}


