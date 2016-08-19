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

        var $tbody = $("<tbody/>");
        $.each(data.source.url, function (rowIndex, r) {
            var $row = $("<tr/>");
            if (data.checkbox) {
                $row.append($("<td/>").html('<input type="checkbox"/>'));
            }
            $.each(r, function (colIndex, c) {
                $row.append($("<td/>").text(c));

            });

            $tbody.append($row);
        });
        return $tbody;

        
    };


    var methods = {
        init: function (data) {

            data = $.extend({}, $.fn.jqxGrid.defaults, data);

            return this.each(function () {
                var elem = $(this);
                elem.addClass("table table-hover table-responsive");
                elem.append(makeTable(data));
                elem.find('thead').css(
                    { 'background-color': data.backColor, 'color': data.color }
                );
            });

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
