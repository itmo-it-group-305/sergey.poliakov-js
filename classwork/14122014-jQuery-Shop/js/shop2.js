/**
 * Created by sergeypoliakov on 18.12.15.
 */
jQuery(function () {
    var basket = {
        myBasket: {
            sum: 0,
            addItem: function (price) {
                this.sum += price;
            },
            deleteItem: function (price) {
                this.sum -= price;
            },
            renewBasket: function () {
                jQuery('.basketSum').html('<p class="sum">Sum: ' + this.sum + '</p>');
            }
        },
        init: function () {
            jQuery('.addItem').on('click', basket.addGoods);
            jQuery('.deleteAll').on('click', basket.deleteAllGoods);
            jQuery('.fullbasket').on('click', '.deleteOne', basket.deleteGoods);
        },
        addGoods: function () {
            var newItem = {};
            newItem.code = jQuery(this).attr('code');
            newItem.name = jQuery(this).attr('name');
            newItem.price = parseInt(jQuery(this).attr('price'));
            console.log(jQuery(this).prev('.amount').val(toString));
            jQuery('.newItems').append('<div class="row item"> <div class="col-3"> <p>' + newItem.code + '</p> <h3>' + newItem.name + '</h3> <p>' + newItem.price + '</p> </div> <div class="col-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore natus odit rerum! Accusamusdebitis dicta, eius esse eveniet facilis fugiat harum libero optio possimus praesentium quisquisquam sit tempora veritatis.</p> </div> <div class="col-3"> <button class="deleteOne" price=' + newItem.price + '>Delete that</button> </div> </div>');
            basket.myBasket.addItem(newItem.price);
            basket.myBasket.renewBasket();
        },
        deleteGoods: function () {
            var deletedPrice = parseInt(jQuery(this).attr('price'));
            jQuery(this).closest('.item').remove();
            basket.myBasket.deleteItem(deletedPrice);
            basket.myBasket.renewBasket();
        },
        deleteAllGoods: function () {
            jQuery('.newItems').empty();
            basket.myBasket.sum = 0;
            basket.myBasket.renewBasket();
        },
        changeAmount: function () {
        },
        discount: function () {
        },
        postCreate: function (somethingNew) {
            jQuery('.items').append(Mustache.render(postTemplate, somethingNew));
        },
    };
    basket.init();
});


//Создание усами новой единицы
var postTemplate = '<div class="row showItem">' +
    '\n <div class="col-3">' +
    '\n  <img src="{{imageSrc}}" alt="{{#imageAlt}} {{imageAlt}} {{/imageAlt}} {{^imageAlt}} Something on the picture {{/imageAlt}}">' +
    '\n </div>' +
    '\n <div class="col-6">' +
    '\n <h2>{{title}}</h2>' +
    '\n <p>' +
    '\n {{text}}' +
    '\n </p>' +
    '\n </div>' +
    '\n <p>' +
    '\n {{price}} eur' +
    '\n </p>' +
    '\n <button class="addItem" code="{{code}}" name="{{name}}" price={{price}}>Купить</button>' +
    '\n </div>' +
    '\n </div>';


//JSON-объект для магазинной единицы
var somethingNew = {
    "title": "That's something new",
    "imageSrc": "img/mustache.jpg",
    "text" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum libero pariatur tempora? Culpa eos explicabo laborum libero mollitia porro temporibus tenetur. Amet ex excepturi impedit labore molestiae neque numquam voluptate",
    "price": 1000,
    "code": 6009,
    "name": "New Item"
};

//postCreator от Усов
var postCreator = function (somethingNew) {
    var makePost = document.querySelector('.items');
    var getPost = Mustache.render(postTemplate, somethingNew);
    makePost.innerHTML += getPost;
}




