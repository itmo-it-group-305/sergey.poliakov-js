/**
 * Created by sergeypoliakov on 14.12.15.
 */
jQuery(function () {
    //корзина
    var basket = {
        price: {
        },
        init: function () {
            jQuery('.button').on('click', basket.addGoods);
            jQuery('body').on('click', '.close', basket.deleteGoods);
        },
        addGoods: function () {},
        deleteGoods: function () {},
        recalcPrice: function () {},
        changeAmount: function () {},
        discount: function () {},
    };
    basket.init();




    var basket = {
        sum: 0,
        addItem: function (price) {
            this.sum+=price;
        },
        deleteItem: function(price) {
            this.sum-=price;
        },
        renewBasket: function() {
            jQuery('.basketSum').html('<p class="sum">Sum: ' + this.sum + '</p>');
        }
        };


    //добавление товара
    jQuery('.addItem').click( function() {
        //объект для добавки в корзину
        var newItem = {};
        newItem.code = jQuery(this).attr('code');
        newItem.name = jQuery(this).attr('name');
        newItem.price = parseInt(jQuery(this).attr('price'));
        //добавление в корзину
        jQuery('.newItems').append('<div class="row item"> <div class="col-3"> <p>' + newItem.code + '</p> <h3>' + newItem.name + '</h3> <p>' + newItem.price + '</p> </div> <div class="col-6"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore natus odit rerum! Accusamusdebitis dicta, eius esse eveniet facilis fugiat harum libero optio possimus praesentium quisquisquam sit tempora veritatis.</p> </div> <div class="col-3"> <button class="deleteOne" price=' + newItem.price + '>Delete that</button> </div> </div>');
        //обновление суммы
        basket.addItem(newItem.price);
        basket.renewBasket();
    });

    //кнопка удалить один
    jQuery('.fullbasket').on('click', '.deleteOne', function () {
        var deletedPrice = parseInt(jQuery(this).attr('price'));
        jQuery(this).closest('.item').remove();
        basket.deleteItem(deletedPrice);
        basket.renewBasket();
    })

    //кнопка удалить все
    jQuery('.deleteAll').click( function() {
        jQuery('.newItems').empty();
        basket.sum = 0;
        basket.renewBasket();
    });

});

/*
на занятиях предлагают так

jQuery (function () {

});*/


////3. Удаление элемента
////4. Нажатие на кнопку заказать