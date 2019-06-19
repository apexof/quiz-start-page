const qNext = document.querySelector(".question__next");

function showEl(el) {
    el.classList.remove("dn");
    el.classList.add("db");
}

$(".question__form-radio").click(function () {
    if (document.documentElement.clientWidth < 585) {
        $(".question__form-radio").not(this).css("display", "none");
        showEl(qNext);
    }
});
