var m = "notyet"; // my_chihou
const m_to_name = [["hokkaido", "北海道"], ["touhoku", "東北地方"], ["kanto", "関東地方"], ["chubu", "中部地方"], ["kansai", "関西地方"], ["chugoku", "中国地方"], ["shikoku", "四国地方"], ["kyushuokinawa", "九州・沖縄"]];
var sa = new Array(); //selected_area
const Chihou_areanum = [0, 4, 6, 7, 9, 7, 5, 4, 8];

function ResultLoad() {
    var q = location.search;
    if (q) {
        q = q.substring(1);
        var params = q.split('_');
        for (let i = 0; i < params.length; i++) {
            var pName = params[i].split('=')[0];
            var pVal = params[i].split('=')[1];
            if (pName == "m") {
                eval(pName + "='" + pVal + "';");
            } else if (pName == "sa") {
                var vals = pVal.split('-');
                for (let j = 0; j < vals.length; j++) {
                    eval(pName + ".push('" + vals[j].charAt(0) + "-" + vals[j].substring(1) + "');");
                }
            }
        }
        for (let i = 0; i < m_to_name.length; i++){
            if (m_to_name[i][0] == m) {
                if (m_to_name[i][1].length == 3) {
                    document.getElementById("my_chihou_text").setAttribute("x", "180");
                }else if (m_to_name[i][1].length == 5) {
                    document.getElementById("my_chihou_text").setAttribute("x", "125");
                }
                document.getElementById("my_chihou_text").textContent = m_to_name[i][1];
            }
        }

        for (let i = 0; i < sa.length; i++) {
            var selected_path = document.getElementById("r" + sa[i]);
            selected_path.setAttribute("fill", "#E88326");
            selected_path.setAttribute("stroke", "#E88326");
            selected_path.setAttribute("stroke-width", "2");
        }
    }
}

function share_twitter() {
    location.href = "https://twitter.com/share?ref_src=twsrc%5Etfw&text=私が「近い」と感じる地図はコレ！\n%20&lang=ja&hashtags=AAA%2cBBB&url="+location.href;
}

window.onload = ResultLoad();