$(document).ready(() => {
    $("#get-results").click(() => {
        console.log("object");
        $(".end__right").hide();
        $(".end__form").show();
        $(".footer__sign").show();
        $("#get-results").text("Отправить");
        if (document.documentElement.clientWidth < 585) {
            $(".end__color-block").hide();
            $(".end__header-block").hide();
        }
    });
});
