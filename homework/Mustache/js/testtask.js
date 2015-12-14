/**
 * Created by sergeypoliakov on 14.12.15.
 */
var postTemplate = '<article class="post">' +
'\n <header>' +
'\n  <h2>{{title}}</h2>' +
'\n <time datetime="{{date}}"></time> {{#category}} {{category}} {{/category}} {{^category}} Not sorted {{/category}}' +
'\n </p>' +
'\n </header>' +
'\n <hr>' +
'\n <div class="row">' +
'\n <div class="col-10 offset-1 imageholder">' +
'\n <img src="{{imageSrc}}" alt="{{#imageAlt}} {{imageAlt}} {{/imageAlt}} {{^imageAlt}} Something on the picture {{/imageAlt}}">' +
'\n </div>' +
'\n </div>' +
'\n <p>' +
'\n {{text}}' +
'\n </p>' +
'\n </aricle>';

var newPost = {
    "title": "Why self-learning of mustache.js could kill your Monday",
    "date": new Date(),
    //Добавить бы сюда ещё крутую дату!
    "imageSrc": "img/mustache.jpg",
    "text" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum libero pariatur tempora? Culpa eos explicabo laborum libero mollitia porro temporibus tenetur. Amet ex excepturi impedit labore molestiae neque numquam voluptate"
}

var postCreator = function (newPost) {
    var makePost = document.querySelector('.postholder');
    var getPost = Mustache.render(postTemplate, newPost);
    makePost.innerHTML += getPost;
}
