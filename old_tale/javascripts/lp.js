function toggle () {
    btn.classList.toggle("open"), header_content.classList.toggle("open")
}
window.onload = function () {
    const spinner = document.getElementById('loading'); spinner.classList.add('loaded'); document.body.className = "";
};
var btn = document.getElementById("js__btn"), header_content = document.getElementById("mobile_header_content");
btn.addEventListener("click", toggle, !1);
