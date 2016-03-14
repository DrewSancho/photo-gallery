// (function ($) {
//     var images = ['src/img/angeloak.jpg', 'src/img/desert.jpeg', 'src/img/field.jpeg', 'src/img/jungle.jpeg', 'src/img/mountain.jpeg'];
//     var container = $('#gallery');
//     var current = container.find('.galleryCurrent');
//     var scroll = container.find('.galleryScroll');

//     function setCurrentSrc (url) {
//         current.attr('src', url);
//     }

//     var scrollElements = images.reduce(function (prev, next) {
//         // creates new image
//         var image = $('<img>');
//         // set the src attribute to the url
//         image.attr('src', next);
//         // add and return the updated collection in new jQuery images object
//         return prev.add(image);
//     }, $());

//     $('.galleryScroll').on('click', function (e) {
//         var target = $(e.target);
//         if (target.is('img')) {
//             current.attr('src', target.attr('src'));
//         }
//     });

//     scroll.append(scrollElements);

//     setCurrentSrc(images[0]);

// })(window.jQuery);
(function ($) {
    function photoGallery (el, array) {
        el = $(el);
        // create the container div
        var gallery = $('<div></div>', {class: 'gallery'});

        // create the current image
        var current = $('<img>', {class: 'galleryCurrent'});

        // create the scroll bar
        var scroll = $('<div></div>', {class: 'galleryScroll'});

        // append the created html into the dom and container
        el.append(gallery);
        gallery
            .append(current)
            .append(scroll);

        // set first image in galleryCurrent
        function setCurrentSrc (url) {
            current.attr('src', url);
        }

        // calling the function to display first index of image array
        setCurrentSrc(array[0]);

        // initially populate the scroll bar with images
        var scrollElements = array.reduce(function (prev, next) {
        // creates new image
            var image = $('<img>');
        // set the src attribute to the url
            image.attr('src', next);
        // add and return the updated collection in new jQuery images object
            return prev.add(image);
        }, $());

        // setting the images to the scroll bar
        scroll.append(scrollElements);

        // add the eventlisteners to make the image appear above
        scroll.on('click', function (e) {
            var target = $(e.target);
            if (target.is('img')) {
                current.attr('src', target.attr('src'));
            }
        });

        var obj = {
            destroy: function () {
                $('.gallery').remove();
                $('.current').remove();
                $('.scroll').remove();
            },

            addImage: function (url) {
                // add to the url in the dom
                var image = $('<img>');
                image.attr('src', url);
                scroll.append(image);
            },

            removeImage: function (url) {
                //  remove the li from the dom need to include double "" because the url is a value
                var index = scroll.find('[src ="' + url + '"]');
                index.remove();
            }
        };
        return obj;
    }
    var arr = ['src/img/angeloak.jpg', 'src/img/desert.jpg', 'src/img/field.jpg', 'src/img/jungle.jpg', 'src/img/island.JPG'];
    var animals = ['src/img/llama.jpg', 'src/img/ibis.jpg', 'src/img/cheetah.jpg', 'src/img/snail.jpg', 'src/img/tiger.jpg'];
    photoGallery(document.body, arr);
    photoGallery(document.body, animals);
})(window.jQuery);