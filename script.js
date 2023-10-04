"use strict";

$(document).ready(function () {
    $('.aboutHead').click( function() {
        if($(this).next().hasClass('hide'))
        {
            $(this).next().removeClass('hide');
            $(this).next().fadeOut(1);
            $(this).next().slideDown(800);
        }
        else
        {
            $(this).next().addClass('hide');
        }
    });
});