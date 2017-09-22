$(document).ready(function () {
    let element = $(".hovEffectTeam");

    element.mouseover(function (event) {
        // add class to the one we clicked
        $('img', this).addClass("blur");
        event.stopPropagation();
    });
    element.mouseout(function (event) {
        $('img', this).removeClass("blur");
        event.stopPropagation();
    });

});