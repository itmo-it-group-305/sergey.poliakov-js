/**
 * Created by sergeypoliakov on 25.11.15.
 */
//Обработчик срабатывания загрузки в документ, его обработчиком является анонимная функция (мы с ними ещё не работаем).
window.onload = function() {
    //prompt ялвяется объеком window, это его методы и свойства. когда мы дойдем до bom, мы будем говорить о том, что всё является методами окна
    var keywordList = prompt ("Enter keywords, separated by commas ","");
    //Применяем метод сплит с запятой к этой прямой
    var arrayList = keywordList.split(",");
    var resultString = "";
    for (var i=0; i<arrayList.length; i++) {
        //Плюс работает как конкотинация, мы получаем список, который мы сделали
        //Эти вещи связаны с работой dom-дерева
        //У нас заведомо в документ должен быть встроен div
        resultString+="keyword: " + arrayList[i] + "<br />";
    }
    var blk = b;
    blk.innerHTML = resultString;
}