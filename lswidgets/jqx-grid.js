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

; (function ($, window, document, undefined) {

    "use strict";

    function createTableBody(source) {
        var tr;
        for (var i = 0; i < source.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + source[i] + "</td>");
        }
        this.find('tbody').append(tr);
    };

    // Default options
    var defualts = {
        backColor: 'yellow',
        color: 'black',
        checkbox: false,
        source: { url: "demos\data.json", debugDelay: 1000 },
    };

    var methods = {
        init: function (options) {
            // create table code here
            this.find('table').addClass("table table-hover table-responsive");
            //this.find('tbody').append("<tr><td>1</td><td>Ali</td><td>Ahmadi</td></tr><tr><td>2</td><td>nasim</td><td>maleki</td></tr><tr><td>3</td><td>Aioub</td><td>Amini</td></tr>");
            createTableBody(options.source);
            this.find('thead').css({ 'background-color': settings.backColor, 'color': settings.color });

        },
        destroy: function () {
            // destroy table code here
        }
    }

    $.fn.jqxGrid = function (method) {
        if (methods[method]) {
            return methods[method].apply(
                this,
                Array.prototype.slice.call(arguments, 1)
            );
        } else if ($.type(method) === 'object') {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method +
                ' does not exist on jQuery.jqiaPhotomatic'
            );
        }
    };


    $.fn.jqxGrid.defaults = {
        backColor: 'yellow',
        color: 'black',
        checkbox: false
    };

} (jQuery, window, document));
