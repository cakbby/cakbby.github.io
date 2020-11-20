var my_chihou = "notyet";
var my_chihou_old = my_chihou;
var selected_chihou = new Array();
var s_process = 0;
var selected_area = new Array();
const Chihou_areanum = new Array(0, 4, 6, 7, 9, 7, 5, 4, 8);

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
            document.getElementById(c_name).style.fill = "#EEE";
        }
        var c_name = "c-" + my_chihou.substring(2);
        var c = document.getElementsByName(c_name);
        c[0].style.display = 'block';
        c[0].style.borderColor = '#888';
        c[1].style.color = '#888';
        document.getElementById(c_name).style.fill = "#E88326";

        document.getElementById("scene-2").style.display = "block";
    }
}

function OnChange_c_chihou(name) {
    var chihous = document.getElementsByName(name);
    if (chihous[0].style.display == 'none' || chihous[0].style.display == "") {
        chihous[0].style.display = 'block';
        chihous[1].style.color = "#F1B61B";
        document.getElementById(name).style.fill = "#F1B61B";
    } else if (chihous[0].style.display == 'block' && chihous[1].style.color != "rgb(136, 136, 136)"){
        chihous[0].style.display = 'none';
        chihous[1].style.color = "#4A4A4A";
        document.getElementById(name).style.fill = "#EEE";
    }
}

function returnto_1() {
    document.getElementById("scene-2").style.display = "none";
    my_chihou_old = my_chihou;
    document.getElementById("scene-1").style.display = "block";
}

function next_3() {
    document.getElementById("scene-2").style.display = "none";

    selected_chihou.forEach(c => {
        selected_chihou.pop();
    });

    var chihous = document.getElementsByName("c_select");
    for (let i = 0; i < chihous.length; i++) {
        var c_name = chihous[i].id.substring(2);
        var chihou = document.getElementsByName(c_name);
        if (chihou[0].style.display == "block") {
            selected_chihou.push(c_name);
        }
    }

    document.getElementById("scene-3").style.display = "block";
    document.getElementById("s-" + selected_chihou[0].substring(2)).style.display = "flex";
    s_process = 0;
}

function OnChange_s(name, select) {
    var areas = document.getElementsByName(name);
    var areasvg = document.getElementById(name);

    if (select == 1) {
        areasvg.style.fill = "#F1B61B";
        areas[0].style.display = 'block';
        areas[1].style.color = "#F1B61B";
        // areasvg.style.stroke = "#F1B61B";
        // areasvg.style.strokeWidth = "1";
    } else {
        areasvg.style.fill = "#EEE";
        areas[0].style.display = 'none';
        areas[1].style.color = "#4A4A4A";
        // areasvg.style.stroke = "#EEE";
        // areasvg.style.strokeWidth = "1";
    }
}

function OnChange_s_area(name) {
    if (name.substring(2) == "all") {
        var areas = document.getElementsByName(name);
        if (areas[0].style.display == 'none' || areas[0].style.display == "") {
            areas[1].style.color = "#F1B61B";
            areas[0].style.display = 'block';
            areas[1].textContent = "すべて解除";
            for (let i = 1; i <= Chihou_areanum[parseInt(name.charAt(0))]; i++) {
                OnChange_s(name.substring(0,2)+i.toString(),1);
            }
        } else {
            areas[1].style.color = "#4A4A4A";
            areas[0].style.display = 'none';
            areas[1].textContent = "すべて選択";
            for (let i = 1; i <= Chihou_areanum[parseInt(name.charAt(0))]; i++) {
                OnChange_s(name.substring(0,2)+i.toString(),0);
            }
        }
    } else {
        var areas = document.getElementsByName(name);
        var areasvg = document.getElementById(name);

        if (areas[0].style.display == 'none' || areas[0].style.display == "") {
            areasvg.style.fill = "#F1B61B";
            areas[0].style.display = 'block';
            areas[1].style.color = "#F1B61B";
            // areasvg.style.stroke = "#F1B61B";
            // areasvg.style.strokeWidth = "1";
        } else {
            areasvg.style.fill = "#EEE";
            areas[0].style.display = 'none';
            areas[1].style.color = "#4A4A4A";
            // areasvg.style.stroke = "#EEE";
            // areasvg.style.strokeWidth = "1";

            var all = document.getElementsByName(name.substring(0,2)+"all");
            all[1].style.color = "#4A4A4A";
            all[0].style.display = 'none';
            all[1].textContent = "すべて選択";
        }
    }
}

function next_4or3() {
    if (s_process >= selected_chihou.length - 1) {

        var areas = document.getElementsByName("s_select");
        for (let i = 0; i < areas.length; i++) {
            var s_name = areas[i].id.substring(1);
            var area = document.getElementsByName(s_name);
            if (area[0].style.display == "block") {
                selected_area.push(s_name);
            }
        }
        document.getElementById("scene-3").style.display = "none";
        location.href = getParamedResultLink();
    } else {
        document.getElementById("s-" + selected_chihou[s_process].substring(2)).style.display = "none";
        s_process++;
        document.getElementById("s-" + selected_chihou[s_process].substring(2)).style.display = "flex";
    }
}

function returnto_2or3() {
    if (s_process == 0) {
        document.getElementById("scene-3").style.display = "none";
        document.getElementById("scene-2").style.display = "block";
    } else {
        document.getElementById("s-" + selected_chihou[s_process].substring(2)).style.display = "none";
        s_process--;
        document.getElementById("s-" + selected_chihou[s_process].substring(2)).style.display = "flex";
    }
}

function getParamedResultLink() {
    var ps = location.href.split('/');
    if (ps[-1] == "") {
        var url = location.href + "result.html" + "?";
    } else {
        var url = location.href.substring(0, -ps[ps.length-1].length) + "result.html" + "?";
    }
    url += "m=" + my_chihou.substring(2) + "_";

    if (selected_area.length == 0) {
        return url;
    }
    url += "sa=";
    for (let i = 0; i < selected_area.length-1; i++) {
        url += selected_area[i].charAt(0);
        url += selected_area[i].substring(2);
        url += "-";
    }
    url += selected_area[selected_area.length-1].charAt(0);
    url += selected_area[selected_area.length-1].substring(2);
    
    return url;
}
