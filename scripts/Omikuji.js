const card = document.getElementById("card");
const card_contents = document.getElementById("card_contents");
const card_title = document.getElementById("card_title");
const card_message = document.getElementById("card_message");

function omikuji(){
    const kuji = {
        "大吉":["今日はきっといい日になるよ","ツイてるね","チャレンジしてみよう"],
        "中吉":["いい感じじゃん","のんびりしよう","電車で座れそう"],
        "小吉":["悪くないんじゃない？","ノーコメントで","道で小銭を拾う","初期値"],
        "凶":["まあ、、、ね、、、","こんな日もあるよ","今日、凶"],
        "大凶":["ハズレ引いたらしい","「だいき」までは大吉","家で寝てよう"]
    }
    const keys = Object.keys(kuji);

    let unsei = keys[Math.floor(Math.random()*keys.length)];
    let messages = kuji[unsei];
    let message = messages[Math.floor(Math.random()*messages.length)]
    card.style.display = "block";
    card_title.innerHTML = unsei;
    card_message.innerHTML = message;
    card_contents.classList.add("omikuji_open");
}

function ClosePanel(){
    card.style.display = "none";
    card_contents.classList.remove("omikuji_open");
}