var my_chihou = "notyet";
var my_chihou_old = my_chihou;
var selected_chihou = new Array();
var selected_area = new Array();

function OnChange_r_chihou() {
    var chihous = document.getElementsByName("my-chihou");
    for (i = chihous.length; i--;) {
        var chihou_name = document.getElementById(chihous[i].value);
        if (chihous[i].checked) {
            my_chihou = chihous[i].value;
            chihou_name.style.background = "#F1B61B";
            chihou_name.style.color = "#FFFFFF";
        } else {
            chihou_name.style.background = "#DDDDDD";
            chihou_name.style.color = "#4A4A4A";
        }
    }
}

function next_2() {
    if (my_chihou == "notyet") {
        document.getElementById("error1-1").style.display = "block";
    } else {
        document.getElementById("error1-1").style.display = "none";
        document.getElementById("scene-1").style.display = "none";

        if (my_chihou_old != "notyet" && my_chihou_old != my_chihou) {
            var c_name = "c-" + my_chihou_old.substring(2);
            var c = document.getElementsByName(c_name);
            c[0].style.display = 'none';
            c[0].style.borderColor = '#F1B61B';
            c[1].style.color = '#4A4A4A';
            document.getElementById(c_name).setAttribute("fill", "#EEE");
        }
        var c_name = "c-" + my_chihou.substring(2);
        var c = document.getElementsByName(c_name);
        c[0].style.display = 'block';
        c[0].style.borderColor = '#888';
        c[1].style.color = '#888';
        document.getElementById(c_name).setAttribute("fill", "#0a0");

        document.getElementById("scene-2").style.display = "block";
    }
}

function OnChange_c_chihou(name) {
    var chihous = document.getElementsByName(name);
    if (chihous[0].style.display == 'none' || chihous[0].style.display == "") {
        chihous[0].style.display = 'block';
        chihous[1].style.color = "#F1B61B";
        document.getElementById(name).setAttribute("fill", "#0f0");
    } else if (chihous[0].style.display == 'block' && chihous[1].style.color != "rgb(136, 136, 136)"){
        chihous[0].style.display = 'none';
        chihous[1].style.color = "#4A4A4A";
        document.getElementById(name).setAttribute("fill", "#EEE");
    }
}

function returnto_1() {
    document.getElementById("scene-2").style.display = "none";
    my_chihou_old = my_chihou;
    document.getElementById("scene-1").style.display = "block";
}

function next_3() {
    document.getElementById("scene-2").style.display = "none";

    var chihous = document.getElementsByName("c_select");
    console.log(chihous.length);
    for (let i = 0; i < chihous.length; i++) {
        var c_name = chihous[i].id.substring(2);
        var chihou = document.getElementsByName(c_name);
        if (chihou[0].style.display == "block") {
            selected_chihou.push(c_name);
        }
    }

    document.getElementById("scene-3").style.display = "block";
}

function OnChange_s_area(name) {
    var areas = document.getElementsByName(name);
    if (areas[0].style.display == 'none' || areas[0].style.display == "") {
        areas[0].style.display = 'block';
        areas[1].style.color = "#F1B61B";
        document.getElementById(name).setAttribute("fill", "#0f0");
    } else {
        areas[0].style.display = 'none';
        areas[1].style.color = "#4A4A4A";
        document.getElementById(name).setAttribute("fill", "#EEE");
    }
}

function next_4or3() {
    document.getElementById("scene-3").style.display = "none";

    document.getElementById("scene-4").style.display = "block";
}