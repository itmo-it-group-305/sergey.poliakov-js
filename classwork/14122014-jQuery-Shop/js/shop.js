/**
 * Created by sergeypoliakov on 14.12.15.
 */
jQuery(document).ready (function () {
        jQuery('button').click( function() {
            var code = jQuery(this).attr('code');
            var name = jQuery(this).attr('name');
            var price = jQuery(this).attr('price');
            jQuery('.basket').append('<p>' + code + '</p> \n' +'<p>' + name + '</p> \n' + '<p>' + price + '</p>')

        });
        jQuery('.')
});

/*
на занятиях предлагают так

jQuery (function () {

});*/


////3. Удаление элемента
////4. Нажатие на кнопку заказать