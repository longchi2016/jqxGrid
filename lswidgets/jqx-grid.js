/*
 * jQuery table plugin 1.0
 *
 * Copyright (c) 2016 Aioub Amini , ayyub.amini@gmail.com
 *
 * MIT licensed   
 * http://www.linkedsoft.ir/

 * Date: Tue July 12 2016
 */
//

(function ($) {

    $.fn.jqxGrid = function (options) {

        // Default options
        var settings = $.extend({
            backColor: 'yellow',
            color: 'black'
        }, options);

        this.find('table').addClass("table table-hover table-responsive");
        this.find('tbody').append("<tr><td>1</td><td>Ali</td><td>Ahmadi</td></tr><tr><td>2</td><td>nasim</td><td>maleki</td></tr><tr><td>3</td><td>Aioub</td><td>Amini</td></tr>");
        this.find('thead').css({ 'background-color': settings.backColor, 'color': settings.color });


        var source =
            {
                localdata: data,
                datatype: "json"
            };


    }

} (jQuery));
