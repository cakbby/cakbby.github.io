var score = new Array(0, 0, 0, 0);
var isAnswered = false;
var nowq = 1;
var quiz_left_n = new Array();
var quiz_right_n = new Array();

const q_candidate_l = [4, 3, 4, 5];
const q_candidate_r = [4, 4, 5, 5];

const q1_name_l = ["駒場1号館の高さ", "スカイツリー", "東京都庁", "駒場東大前駅のホームの長さ"];
const q1_value_l = [65, 634, 243, 133];
const q1_answer_l = ["65m", "634m", "243m", "133m"];
const q1_comment_l = ["旧第一高等学校本館で登録有形文化財。昭和8年築。本郷の安田講堂と一体感があるが、なんか安田講堂の方が質感がリッチ。周りには一高のシンボルである西洋柏とオリーブが植えられている。", "スカイツリーは墨田区にそびえる電波塔。時は21世紀初頭ワンセグ時代、めちゃくちゃ邪魔になってきたビル群に対抗するべく在京テレビ局総出で計画された巨大電波塔である。構造は複雑を極め、職人の手作業による部分も多い。", "東京都庁第一本庁舎。丹下健三の設計で、完成時は日本一の高さを誇ったバブルの申し子である。", "授業開始前や入学試験の当日には毎回人がごった返す。いつもは素っ気なくここを通過する急行であるが、入試の日だけは止まってくれる。"];
const q1_name_r = ["160cmの人の歩幅","徒歩1分","iPhone7の高さ","文庫本の高さ"];
const q1_tanni_r = ["歩", "分", "iPhone7", "冊"];
const q1_value_r = [0.72, 80, 0.1383, 0.148];
const q1_answer_r = ["72cm", "80m", "13.83cm", "14.8cm", "1.7cm", "68.5m", "20m"];
const q1_comment_r = ["自分の身長くらいで測ってみた。身長に0.45をかけると出るらしい。", "ハイヒールを履いた女性で測ったらしい。不動産屋っぽい指標。", "製作者が所有するもので計測。最近のでかいな〜と思ってたら小さいのが出たので買いたくなっている。", "A6らしい。測った時に長さが中途半端すぎて「さてはフィートだなテメー」とか言って申し訳なかった。"];

const q2_name_l = ["駒場キャンパスの正門から裏門までの距離", "駒場東大前駅から渋谷駅までの距離", "ISSの最低高度"];
const q2_value_l = [443, 1500, 2780000];
const q2_answer_l = ["443m", "1.5km", "278km"];
const q2_comment_l = ["裏門からは神泉・渋谷方面に歩いて行きやすい。コロナの影響で正門以外の門が閉鎖されているのでほとんど役に立つことのない情報である。", "渋谷駅までは神泉を挟んで二駅分あるが、駅間距離がやたら短いので案外歩けてしまう。写真は神泉駅のかっこいいトンネル。", "ISSの高度は247-460kmの範囲で維持される。新幹線の浜松ー東京で約257kmである。Twitterで当日の東京上空を通過する時間を知ることができる。"];
const q2_name_r = ["じゃがりこの長さ", "Macbookのキー1つの大きさ", "ジャンボジェット(747-8)の翼の幅", "湘南新宿ラインの電車1両分の長さ"];
const q2_tanni_r = ["じゃがりこ",  "キー", "ジャンボジェット", "両"];
const q2_value_r = [0.07, 0.017, 68.5, 20];
const q2_answer_r = ["7cm", "a", "b", "c"];
const q2_comment_r = ["おいしい。じゃがりこLサイズでは、更にその1.2倍の長さになっているそう。", "愛しのバタフライキーボード。なんか最近変わったらしい。", "21世紀初頭の図鑑でおなじみだったのに、結局乗ることがなかったジャンボジェット。", "調べたら2000mmぴったりだった。東京で初めてみた時には編成が長すぎて驚いた。15両て。新幹線かよ。"];

const q3_name_l = ["駒場キャンパスの延べ床面積", "琵琶湖", "沖ノ鳥島のコンクリート含めた部分", "ISSの太陽電池"];
const q3_value_l = [148000, 670400000, 3215, 2449.52];
const q3_answer_l = ["148000㎡", "670400000㎡", "3215㎡", "2449.52㎡"];
const q3_comment_l = ["ちなみに本郷キャンパスの1/7くらい。本郷だけで東大全体のそれの半分超えるらしい。すごい。", "滋賀県の1/6くらい。2/3くらい琵琶湖だと思ってたし目分量そんなもんなのに。", "戦前は北小島海抜2.8m、東小島1.4メートルとそこそこでかかったのに知らん間に小さな..いえ、島ですよ？", "各ブランケットが4.57m×33.5mらしいのでそこから概算。16のブランケットには16400のセルがあり、それぞれ4100個ダイオードが入っている。もうわかんねえなこれ…。"];
const q3_name_r = ["テニスコート（シングルコート）", "A4", "文庫本の表紙", "Jリーグのサッカーボールの表面積", "トランプ(ブリッジサイズ）"];
const q3_tanni_r = ["面", "枚", "表紙", "個", "枚"];
const q3_value_r = [195.63, 0.06237, 0.01554, 0.1519, 0.005162];
const q3_answer_r = ["195.63㎡", "623.7㎠", "155.4㎠", "1519.76㎠", "51.62㎠"];
const q3_comment_r = ["写真のものは緑色をしているが、土のクレーコートや硬質素材のハードコートなどが存在し、大会ごとに様々な種類のコートを使うらしい。","A判の規格は19世紀末、ドイツの物理学者オズワルドによって考案された。1:√2なので何回二等分に切っても縦横比が同じ。A0を4回切るとA4。","文庫は新書より若干背が低いらしいが、所有している本は平積みしているので全く実感がない。ちなみに、何も考えずに買った『一兵卒』だが、出版年を見ると初版本らしい。","いわゆる5号球。中学生以上は社会人までこのサイズのボールを使うらしい。製作者は中学以降サッカーボールに触っていないが。","日本で一般的に使われるのはこのサイズ。ブリッジサイズと呼ばれ手札の多いゲームで使われる。より大きく、手札の少ないゲームなどで使われるのはポーカーサイズ。"];

const q4_name_l = ["駒場一号館の高さ", "a", "b", "c"];
const q4_value_l = [65, 1, 1, 1];
const q4_answer_l = ["65m", "a", "b", "c"];
const q4_comment_l = ["一号館は旧制第一高等学校の本校舎として建てられ、有形文化財に指定されています。", "aa", "bb", "cc"];
const q4_name_r = ["じゃがりこの長さ", "a", "b", "c"];
const q4_tanni_r = ["じゃがりこ", "a", "b", "c"];
const q4_value_r = [0.07, 1, 1, 1];
const q4_answer_r = ["7cm", "a", "b", "c"];
const q4_comment_r = ["じゃがりこLサイズでは、更にその1.2倍の長さになっているそうです。", "a", "b", "c"];


var sum  = function(arr) {
    return arr.reduce(function(prev, current, i, arr) {
        return prev+current;
    });
};

function choose_q() {
    for (let i = 0; i < q_candidate_l.length; i++){
        quiz_left_n.push(Math.floor(Math.random() * q_candidate_l[i]));
    }
    for (let i = 0; i < q_candidate_r.length; i++){
        quiz_right_n.push(Math.floor(Math.random() * q_candidate_r[i]));
    }
    for (let i = 0; i < quiz_left_n.length; i++){
        document.getElementById("q" + (i + 1).toString() + "_l").textContent = eval("q" + (i + 1).toString() + "_name_l[" + quiz_left_n[i].toString() + "]");
        document.getElementById("q" + (i + 1).toString() + "_l_i").src = "../images/q"+(i+1).toString()+"_left_"+quiz_left_n[i].toString()+".jpg";
    }
    for (let i = 0; i < quiz_right_n.length; i++){
        document.getElementById("q" + (i + 1).toString() + "_r").textContent = eval("q" + (i + 1).toString() + "_name_r[" + quiz_right_n[i].toString() + "]");
        document.getElementById("q" + (i + 1).toString() + "_r_i").src = "../images/q" + (i + 1).toString() + "_right_" + quiz_right_n[i].toString() + ".jpg";
        var ts = document.getElementsByName("q" + (i + 1).toString() + "_tanni");
        ts.forEach(t => {
            t.textContent = eval("q" + (i + 1).toString() + "_tanni_r[" + quiz_right_n[i].toString() + "]");
        });
    }
}

function next_2() {
    document.getElementById("scene-1").style.display = "none";
    document.getElementById("scene-2").style.display = "block";
    document.getElementById("q_frame_1").style.display = "block";
}

function nextq() {
    if (isAnswered) {
        document.getElementById("error").style.display = "none";
        location.href = "#";
        if (nowq == q_candidate_l.length) {
            document.getElementById("scene-2").style.display = "none";
            document.getElementById("scene-result").style.display = "block";
            document.getElementById("total_score").textContent = Math.round(sum(score)*10)/10;
        } else {
            document.getElementById("q_frame_" + nowq.toString()).style.display = "none";
            nowq++;
            document.getElementById("question_num").textContent = "第" + nowq + "問";
            document.getElementById("q_frame_" + nowq.toString()).style.display = "block";
            isAnswered = false;
        }
    } else {
        document.getElementById("error").style.display = "block";
    }
}

function returnq() {
    isAnswered = true;
    if (nowq == 1) {
        document.getElementById("scene-2").style.display = "none";
        document.getElementById("scene-1").style.display = "block";
    } else {
        document.getElementById("q_frame_" + nowq.toString()).style.display = "none";
        nowq--;
        document.getElementById("q_frame_" + nowq.toString()).style.display = "block";
    }
}

function answer(qin) {
    if (!isAnswered) {
        var ans = document.getElementById(qin).value;

        // right answer
        var a = eval("q" + nowq.toString() + "_value_l[" + quiz_left_n[nowq-1].toString() + "]") / eval("q" + nowq.toString() + "_value_r[" + quiz_right_n[nowq-1].toString() + "]");
        a = Math.round(a * 100) / 100;
        document.getElementById("q" + nowq.toString() + "_answer").textContent = a;

        // score
        score[nowq - 1] = Math.round(250 * Math.exp(- Math.abs(Math.log10(a) - Math.log10(ans)) / (2 / Math.max(1, Math.log10(a))))) / 10;

        var qs = document.getElementsByName("q" + nowq.toString() + "_score");
        for (let i = 0; i < qs.length; i++) {
            qs[i].textContent = score[nowq - 1];
        }

        // comment
        var str = eval("q" + nowq.toString() + "_name_l[" + quiz_left_n[nowq-1].toString() + "]") + "は" + eval("q" + nowq.toString() + "_answer_l[" + quiz_left_n[nowq-1].toString() + "]") + "。";
        str += eval("q" + nowq.toString() + "_comment_l[" + quiz_left_n[nowq-1].toString() + "]");
        str += "一方、" + eval("q" + nowq.toString() + "_name_r[" + quiz_right_n[nowq-1].toString() + "]") + "は" + eval("q" + nowq.toString() + "_answer_r[" + quiz_right_n[nowq-1].toString() + "]") + "。";
        str += eval("q" + nowq.toString() + "_comment_r[" + quiz_right_n[nowq-1].toString() + "]");
        document.getElementById("q" + nowq.toString() + "_comment").textContent = str;

        document.getElementById("q"+nowq.toString()+"_ansb").style.background = "#777";

        isAnswered = true;
        document.getElementById("q" + nowq.toString() + "_ans").style.display = "block";
    }
}

function share_twitter() {
    location.href = "https://twitter.com/share?ref_src=twsrc%5Etfw&text=得点は%0a%0a"+(Math.round(sum(score)*10)/10).toString()+"点！%0a%0aあなたの「単位感」ゲーム%20in%20dp9駒場祭2020%0a&lang=ja&hashtags=単位感ゲーム%2cわけるわけない&url="+location.href;
}

window.onload = choose_q();