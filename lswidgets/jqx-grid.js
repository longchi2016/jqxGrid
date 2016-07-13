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

    var methods = {
        init: function (options) {
            //alert("Hi this a new plugin.");
            var tableDiv = $("<table />").addClass("table table-hover table-responsive").append("<thead><tr><th>Code</th><th>Name</th><th>Family</th></tr></thead>");
            tableDiv.append("<tbody><tr><td>1</td><td>Ali</td><td>Ahmadi</td></tr><tr><td>2</td><td>nasim</td><td>maleki</td></tr><tr><td>3</td><td>Aioub</td><td>Amini</td></tr></tbody>");

            this.append(tableDiv);
            return;
        }
    };

    $.fn.jqxGrid = function (method) {

        // Method calling logic
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.jqxGrid');
        }

    };

} (jQuery));

