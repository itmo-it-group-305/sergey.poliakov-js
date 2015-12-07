/**
 * Created by sergeypoliakov on 27.11.15.
 */
var form = { tag: 'form',
    child: [ {tag: 'button', text: 'x'},
    {tag: 'input', type: 'text', id: 'name'}
]};

function builderHTML (obj) {
    for (i in obj) {
        //проверка что не пустой
        if (i=='tag') {
            var elm = document.createElement(obj[i]);
        }
        if (i=='text') {
            elm.innerHTML=obj[i];
        }
        if (i=='type' || i=='id') {
            elm.setAttribute (i, obj[i])
        }
    }
    return elm;
}

function builderForm (obj) {
    for (i in obj) {
        console.log(obj);
        if (i == 'tag') {
            parent = document.createElement(obj[i]);
        }
        if (i == 'child') {
            for (j in obj.child) {
                //console.log(obj.child.length);
                parent.appendChild( builderHTML(obj.child[j]) );
            }
        }
    }
    return parent;
}

parent = document.getElementById('form');
parent.appendChild ( builderForm (form));