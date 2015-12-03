/**
 * Created by sergeypoliakov on 30.11.15.
 */
var written = document.getElementById('chatbox');
//Забрать из чата написанное

//Узнать про действие кнопки

myAnswer=written.value;
var answer = document.getElementById('answer');
answer.innerHTML='<div class="row"><div class=col-12">Имя</div></div><div class="row"><div class="col-4"><img src="КАРТИНКА" alt="картинка"></div><div class="col-8"><p>' + myAnswer + '</p></div></div>';
