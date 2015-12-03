/**
 * Created by sergeypoliakov on 30.11.15.
 */
function ansswer() {
    var written = document.getElementById('chatbox');
    myAnswer = written.value;
    var answer = document.getElementById('answer');
    answer.innerHTML+='<div class="row"><div class="col-12"><h2>Имя</h2></div></div><div class="row"><div class="col-4"><img src="img/userpic.jpg" alt="userpic"></div><div class="col-8"><p>' + myAnswer + '</p></div></div>';
}

