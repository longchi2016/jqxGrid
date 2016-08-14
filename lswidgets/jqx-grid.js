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

    function makeTable(data) {

        var body = $("<tbody/>");
        $.each(data, function (rowIndex, r) {
            var row = $("<tr/>");
            $.each(r, function (colIndex, c) {
                row.append($("<td/>").text(c));
            });
            body.append(row);
        });
        return body;
    };

    
    var methods = {
        init: function (data) {
            // create table code here
            this.find('table').addClass("table table-hover table-responsive");
            this.find('table').append(makeTable(data.source.url));
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
