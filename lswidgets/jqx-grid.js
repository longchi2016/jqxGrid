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

    var methods = {
        initTable: function (options) {

            var settings = $.extend({}, $.fn.jqxGrid.defaults, options);

            var $tbody = $("<tbody/>");
            $.each(settings.source.url, function (rowIndex, r) {
                var $row = $("<tr/>");
                if (settings.checkbox) {
                    $row.append($("<td/>").html('<input type="checkbox"/>'));
                }
                $.each(r, function (colIndex, c) {
                    $row.append($("<td/>").text(c));
                });

                $tbody.append($row);
            });

            return this.each(function () {
                var elem = $(this);
                elem.find('table').addClass("table table-hover table-responsive");
                elem.find('table').append($tbody);
                elem.find('thead').css(
                    { 'background-color': settings.backColor, 'color': settings.color }
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
            return methods.initTable.apply(this, arguments);
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
