let topBtn = document.getElementById("topBtn");
const offsetY = document.documentElement.clientHeight;

window.onscroll = function () {
    if (document.body.scrollTop > offsetY || document.documentElement.scrollTop > offsetY) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
}