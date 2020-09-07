function toggle () {
    btn.classList.toggle("open"), header_content.classList.toggle("open")
}

var images_src1 = new Array("../../images/test1.jpg","../../images/test2.png","../../images/test3.png");
var photo_num = 0;
function OnButtonClick1() {
    if (photo_num == 2) {
        photo_num = 0;
    } else {
        photo_num ++;
    }
    document.getElementById("mp1").src = images_src1[photo_num];
}

window.onload = function () {
    const spinner = document.getElementById('loading'); spinner.classList.add('loaded'); document.body.className = "";
};
var btn = document.getElementById("js__btn"), header_content = document.getElementById("mobile_header_content");
btn.addEventListener("click", toggle, !1);
