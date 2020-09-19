var p11 = 0; var p12 = 0; var p21 = 0; var p22 = 0; var p31 = 0; var p32 = 0; var p41 = 0; var p42 = 0; var p51 = 0;
var f11 = 0; var f12 = 0; var f21 = 0; var f22 = 0; var f31 = 0; var f32 = 0; var f41 = 0; var f42 = 0; var f51 = 0;
var i1 = 0; var i2 = 0; var i3 = 0; var i4 = 0;

var images_src = new Array("../images/play_imgs/play1-1.jpg", "../images/play_imgs/play1-2.jpg", "../images/play_imgs/play1-3.jpg",
    "../images/play_imgs/play2-1.jpg", "../images/play_imgs/play2-2.jpg", "../images/play_imgs/play2-3.jpg",
    "../images/play_imgs/play3-1.jpg", "../images/play_imgs/play3-2.jpg", "../images/play_imgs/play3-3.jpg",
    "../images/play_imgs/play4-1.jpg", "../images/play_imgs/play4-2.jpg", "../images/play_imgs/play4-3.jpg");

var p_text11 = new Array("　その日は天気が良かったので、かめはお出かけすることにしました。近くの山のふもとまで、ゆっくりのんびり歩いて行きました。するとばったり、知り合いのうさぎと出会いました。<br>　うさぎはお調子者で、かめとは良く競い合ってあそんでいました。「今日も何かで競うことになるのかな」かめはそう思いました。",
    "<span style='color:red'>うさぎ</span>「あらあら！こんにちは！かめさん。今日もいいお天気ね！」<br><span style='color:green'>かめ</span>「そうだね！うさぎさん。」<br><span style='color:red'>うさぎ</span>「明日もこれくらいいい日になるらしいね！気持ちのいい季節だね！」<br><span style='color:green'>かめ</span>「そうだね！お出かけ日和だね！」",
    "　かめが、ゆっくりゆっくり、平原の道を歩いていました。池にある、自分の家に帰るところでした。するとそこへ、うさぎがぴょんぴょんととびながらやって来て、一言。<br>「きみは相変わらずのろまだね。」<br>かめはうさぎのあおりにはうんざりでした。「そんなんだと家に着く前に、日が落ちてしまうよ。」",
    "　時はイ・ソプ王朝の時代。<br>　エジプトのある一帯をつかさどった俊足の兎神ウ・サギは、同じ地におはす亀神カ・メックの鈍足を憂い、また侮った。");

var p_text12 = new Array("　「明日にでも、あそこのまるい山のてっぺんまで競争しよう。」<br>うさぎがそう持ちかけました。<br>　かめは自分にとってそれが不利なのを感じながらも、仕方なく、次の日にまた今居る場所で待ち合わせすることにしました。",
    "<span style='color:red'>うさぎ</span>「突然なんだけどさ、あたしってかけっこ得意じゃない？」<br><span style='color:green'>かめ</span>「君に勝てる子なんていないよ！でも、それがどうかしたの？」<br><span style='color:red'>うさぎ</span>「それじゃあ、かけっこしましょ！あの山のてっぺんまで！」<br><span style='color:green'>かめ</span>「えぇ～っ！そんなの勝てっこないよ！」<br><span style='color:red'>うさぎ</span>「やってみなきゃわからないよ！！かめさんだってほんとうは足はやいかもしれないし」",
    "「明日にでも競争してみないか。まあ僕が勝つだろうけどね。」<br>　かめは、気分悪そうに言いました。<br>「僕だって、いざとなれば、とても早く走ることができるんだ。」<br>「果たしていつになるだろうね。あそこの山のてっぺんまで競争ね。」<br>「ちゃんと勝ってみせるよ。」<br>かめは答えました。",
    "「汝、我と俊足を競われたし。かの丘の頂上に先んじてたどり着いた方を、ラーの加護を受けし真の俊足とみなす」<br>兎神の俊足と自身の鈍足をよく知る亀神はおおいに驚き、困惑した。しかし神の立場ゆえ、快諾した。曰く、<br>「承った。汝、必ず契りを守られたし」");

var p_text21 = new Array("　次の日、かめとうさぎは山のてっぺん目指して、よーい、どん！うさぎはぴょんぴょんと川を渡り、森を走り去り、野原をすばやく横切りました。<br>　かめの方はうさぎが通り過ぎていく様子を見ながら頑張って進みましたが、やはりあまり速くないようでした。",
    "　よーい、どん！さあかけっこのはじまりです。うさぎさんはぴょーんぴょーんとはねて、あっというまにまえへまえへとすすんでしまいます。<br>　いっぽうかめさんはというと…のろのろ、のろのろ。ちっともまえへすすみません。<br>「へへーん、やっぱりちっともおいつけないじゃないか。このままいけばぼくがかつにきまってるさ！」",
    "　競争がはじまった。<br><span style='color:red'>うさぎ</span>「ハァ…ハァ…ここまで走れば十分だろう…かめの野郎もついてこれまい…」「しかし奇妙だ…さっきから全速力で走っているというのにヤツの姿をチラリとも見てねえ…」<br>「前方は崖だ…行き止まりになってるはずだから途中会っていないというのは―」「？…なんだ？崖の方に何か動くものが見えるが…」");

var p_text22 = new Array("　いよいよ山のてっぺんへと登る坂道まで来た時、うさぎは振り返りましたが、かめの姿はまったく見えません。<br>「ふん、どんなもんだい。だいたい、かめがうさぎとかけっこしようなんて馬鹿な話なのさ。」",
    "　うさぎさんはさらにすすみます。<br>　かめさんはそれでも、いっしょうけんめいにあるきます。<br>「だいじょうぶ。きっとうまくいく」<br>じぶんにいいきかせながら、ゆっくりゆっくりとすすんでいきます。",
    "　ゴゴゴゴゴゴゴ<br>「馬鹿な…！何かの見間違いだ…！そんな…そんな!!　こんなことがッ!!」<br>　ドドドドドドドッ！<br>「そんなッ…!亀が崖を登っているッ…!!ショートカットしやがったッ!!!」<br>うさぎは全速力でかめに追いつき、追い越していった。");

var p_text31 = new Array("「これじゃあ、あんまり張り合いがないなぁ。見えないくらい遠いことだし、どれ、ここいらで一休みしようかな。」<br>ちょうどそばの草原には横たわるのにちょうどいい大きさのくぼみがありました。うさぎは目を閉じて休むことにしました。",
    "　ぴょんぴょこぴょんぴょこ。うさぎさんはずいぶん先へ進んでいました。<br>「ふぁ～あ。なんだか眠くなっちゃった。そうだ！どうせかめさんはしばらく来ないし、ここでひと眠りしようっと」<br>　おやおや？どうやらうさぎさん、すっかり安心してここでお昼寝してしまうようです。でもそんなことして、本当に大丈夫でしょうか？",
    "　山には、くるぶし程度の高さの細く肌触りの良い狗尾草が敷き詰められ、なびいていた。うさぎにとってかめはあまりに遅く感じられ、退屈さが生じてきていた。<br>　道なりには、正に身体を置くのに最適な窪みが点在し、うさぎはその一つで横になって休みを得ることにした。");

var p_text32 = new Array("　草が肌に触れて心地よく、また、ここまで長く走ってきたために、うさぎは眠くなって寝てしまいました。<br>　気持ちよく寝ているうさぎはなかなか起きなさそうです。一方のかめさんは、地道にじっくりと山を登っていました。",
    "　うさぎさんがそうこうしている間も、かめさんはゆっくりゆっくり進んできます。<br>「うーんしょ、よーいしょ」<br>　はてさてどうなることやら。うさぎさん、ほんとに寝ちゃって、大丈夫？",
    "<span style='line-height: 3; font-size: 130%;'>ここまできちゃったら<br>かめさんおいつかないよねぇ。<br>眠いねぇ…もう寝ちゃおうかなぁ…<br>おやすみぃ…すやぁ</span>",
    "　うさぎは実によく走ったもので、その体には思わぬ疲れが潜んでいたのであろう。ただすこし休むという心づもりに反して、瞼が閉じ深い眠りについてしまった。<br>未だ競争の最中の事であった。");

var p_text41 = new Array("　かめはずいぶんたってから、うさぎの所まで来ました。必死に歩いたので、汗がびっしょりです。<br>　寝ているうさぎを見て、にっこり笑いながらかめは言いました。<br>「まさか追いつくなんてね、お先に失礼。」",
    "<span style='color=red'>うさぎ</span>かめ</span>「もううさぎはゴールしたのかな…とにかく登らないとな」<br>「あれ、あそこで寝ているのは…」<br>かめは横たわるうさぎをみてビックリし、また密かに喜びました。",
    "<span style='green'>亀戸堅次郎（かめどけんじろう）</span>「頑張れ堅次郎!頑張れ!! 俺は今までよくやってきた!俺はできる奴だ!!」<br>　とはいえ、休まず動き続けたからか、既に呼吸は限界に達していた。<br>「動け動け足を動かせ！これじゃまた目の前で宇佐助にぬかされる！」",);

var p_text42 = new Array("　うさぎが目を覚ましたとき、すでにかめは山のてっぺんのすぐ目の前にいました。うさぎはすぐに走って追いつこうとしましたが、かめはゴールにたどりついたようです。競争に勝てたことに、かめはとても喜びました。", 
    "<span style='color=red'>うさぎ</span>「う～んよく寝た...ってえ!?もう夕方!?じゃああの時からずっと寝てたってこと!?」<br>あせるうさぎが遠くに目をやると…<br><span style='color=green'>かめ</span>「ふんぬ」カメさんはあっという間にゴールしました。<br><span style='color=red'>うさぎ</span>「うそ…」<br>これにはさすがのうさぎも呆然としてしまったようです。",
    "うさぎが目を覚ましたのは既に夕刻であった。<br><span style='color=red'>うさぎ</span>「もう夕方じゃん!? 何やってんの俺!? てか堅次郎めっちゃ進んでんじゃん!? 無理無理無理!!!! 無理だってこっから追い越すなんて!!!」<br>「ふり絞れ‼これが最後でいい‼とにかくありったけの力を込めるんだ‼」<br>　気の遠くなるような一瞬、その足はゴールに--届いた");

var p_text51 = new Array("こうしてうさぎさんは、かめさんにかけっこで負けました。でも不思議と悔しくはなかったようです。<br>うさぎさんはかめさんを甘くみて寝てしまったけれど、どんな相手でも全力で戦うことがたいせつだと、気づいたからです。<br><br>「かめさん、次はぜったい勝つよ。もちろん、途中で寝ずにね」<br>「もちろん受けて立つよ。ぼくだって負けていられないさ」<br><br>ふたりはまえよりもずっとなかよしになり、よきライバルになりましたとさ<br><br><br><span style='font-size: 130%'>めでたしめでたし</span>",
    "こうしてうさぎはかめに負けました。<br><br>油断大敵ってことだね！<br><br><br><span style='font-size:130%'>おしまい</span>");

var ff = new Array("Noto Sans JP, sans-serif", "Sawarabi Mincho, sans-serif", "source-han-sans-japanese, sans-serif", "ta-f1blockline, source-han-sans-japanese, sans-serif", "Noto Serif JP, sans-serif", "dnp-shuei-4gob-std, sans-serif", "tbcinergothic-std, sans-serif", "ro-brush-std, sans-serif");
var fw = new Array("250", "200", "700", "900", "400", "700", "600", "400");

function change_n(n, N, to, a) {
    if (to == 's') {
        n = a % N;
    }else if (to == 'l') {
        n = (n + N - 1) % N;
    } else {
        n = (n + 1) % N;
    }
    return n;
}

function changed() {
    document.getElementById("share_link_text").textContent = "リンクのコピー";
}

function OnChange_p(id, to, a) {
    eval("p" + id + " = change_n(p" + id + ", p_text"+id+".length, to, a);");
    eval("document.getElementById(id).innerHTML = p_text" + id + "[p" + id + "];");
    changed();
}
function OnChange_f(id, to, a) {
    eval("f" + id + "=change_n(f" + id + ", ff.length, to, a);");
    eval("document.getElementById(id).style.fontFamily=ff[f" + id + "];");
    eval("document.getElementById(id).style.fontWeight=fw[f" + id + "];");
    changed();
}
function OnChange_i(id, to, a) {
    eval("i" + id + "=change_n(i" + id + ", 3, to, a);");
    eval("document.getElementById(id).src=images_src[" +String((parseInt(id)-1)*3)+"+i" + id + "];");
    changed();
}
function toggle() {
    btn.classList.toggle("open"), header_content.classList.toggle("open")
}
var d = 0;
function switch_del() {
    d = (d + 1) % 2;
    var changer_list = document.getElementsByClassName("changer");
    if (d == 1) {
        for (var i = 0; i < changer_list.length; i++) {
            changer_list[i].style.display = "none";
        }
        document.getElementById("del__btn").textContent = "ボタンを戻す";
    } else {
        for (var i = 0; i < changer_list.length; i++) {
            changer_list[i].style.display="block";
        }
        document.getElementById("del__btn").textContent = "ボタンを消す";
    }
}
var del_btn = document.getElementById("del__btn");
del_btn.addEventListener("click", switch_del, !1);
var btn = document.getElementById("js__btn"), header_content = document.getElementById("mobile_header_content");
btn.addEventListener("click", toggle, !1);

function get_current_link() {
    var url = location.protocol + location.host + location.pathname + "?";
    var n;
    var flag = 0;
    for (var i = 0; i < 8; i++) {
        n = eval("p" + String(Math.floor(i / 2) + 1) + String((i % 2) + 1));
        if (n != 0) {
            if (flag) {
                url += "_";
            } else {
                flag = 1;
            }
            url += "p" + String(Math.floor(i / 2) + 1) + String((i % 2) + 1) + "=" + n;
        }
    }
    for (var i = 0; i < 9; i++) {
        n = eval("f" + String(Math.floor(i / 2) + 1) + String((i % 2) + 1));
        if (n != 0) {
            if (flag) {
                url += "_";
            } else {
                flag = 1;
            }
            url += "f" + String(Math.floor(i / 2) + 1) + String((i % 2) + 1) + "=" + n;
        }
    }
    for (var i = 1; i < 5; i++) {
        n = eval("i" + String(i));
        if (n != 0) {
            if (flag) {
                url += "_";
            } else {
                flag = 1;
            }
            url += "i" + String(i) + "=" + n;
        }
    }
    return url;
}

function sharelink_copy() {
    var url = get_current_link();
    var tmp = document.createElement("div");
    var pre = document.createElement("pre");
    pre.style.userSelect = "auto";
    tmp.appendChild(pre).textContent = url;
    tmp.style.position = "fixed";
    tmp.right = "200%";
    document.body.appendChild(tmp);
    document.getSelection().selectAllChildren(tmp);
    document.execCommand("copy");
    document.body.removeChild(tmp);
    document.getElementById("share_link_text").textContent = "コピーしました。";
}

var link = document.getElementById("share_link");
link.addEventListener("click", sharelink_copy, !1);

function twitterlink() {
    document.getElementById("twitter_link").setAttribute("href", "https://twitter.com/share?ref_src=twsrc%5Etfw&text=昔ばなしにメリハリをつけてみたよ！読んでみて\n%20&lang=ja&hashtags=作る%2c壊す%2c解き明かす%2cメリハリデザイン展&url="+get_current_link());
}

var twitter = document.getElementById("twitter_link");
twitter.addEventListener("click", twitterlink, !1);

function facebooklink() {
    document.getElementById("facebook_link").setAttribute("href", "http://www.facebook.com/share.php?href="+get_current_link());
}

var facebook = document.getElementById("facebook_link");
facebook.addEventListener("click", facebooklink, !1);

function setParams() {
    var qStr = window.location.search;
    if (qStr) {
        qStr = qStr.substring(1);
        var params = qStr.split('_');
        for (var i = 0; i < params.length; i++) {
            var pName = params[i].split('=')[0];
            var pVal = params[i].split('=')[1];
            if (eval("!" + pName) && !isNaN(pVal)) {
                if (pName[0] == "p") {
                    eval("OnChange_p(" + pName.substring(1) + ", 's', " + pVal + ");");
                } else if (pName[0] == "f") {
                    eval("OnChange_f(" + pName.substring(1) + ", 's', " + pVal + ");");
                } else if (pName[0] == "i") {
                    eval("OnChange_i(" + pName.substring(1) + ", 's', " + pVal + ");");
                }
            }
        }
    }
}

window.onload = function () {
    setParams();
    //const spinner = document.getElementById('loading'); spinner.classList.add('loaded'); document.body.className = "";
};
