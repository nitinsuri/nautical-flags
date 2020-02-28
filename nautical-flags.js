let resultBlock = document.querySelector("#js-result"),
    resultMessage = {
        "success" : "That's CORRECT. You are awesome!",
        "fail" : "Well tried. But that's not the right answer.",
        "empty" : "Answer cannot be empty."
    },
    scoreBlock = document.querySelector("#totalScore"),
    score = parseInt(scoreBlock.textContent),
    theWord = document.querySelector("#word");

function generateWord(){
    const words = ["harmony","last","train","glass","thankful","jar","suppose","shoes","call","gather","sort","wish","truck","new","command","melted","car","fancy","analyse","cherries","damaged","bag","sisters","love","transport","decide","gun","ablaze","unbiased","aggressive","sniff","lean","separate","country","jealous","wrestle","skinny","future","languid","kneel","unarmed","lumber","scent","rifle","walk","crabby","bath","red","mom","condemned","lunch","kiss","tray","allow","vague","modern","tightfisted","rabid","time","coordinated","insidious","truculent","deliver","sky","pancake","coal","horrible","spy","testy","general","generate","next","egg","pen","stone","railway","offend","spoon","tired","venomous","punch","low","wrench","faithful","meddle","eggnog","stuff","painful","wine","zoom","mindless","chickens","nebulous","faint","sign","tan","flesh","war","strap","alluring","oranges","tasteful","tiny","lake","humdrum","spiritual","animated","steel","trip","ubiquitous","snakes","cold","degree","pour","agreement","time","balance","necessary","tender","thought","tight","smile","consider","gaping","purring","illustrious","stocking","pale","rapid","drain","dangerous","erratic","exchange","carve","nondescript","one","snobbish","imaginary","guiltless","bee","event","hanging","teeny","pollution","grouchy","year","domineering","crawl","inquisitive","gullible","merciful","story","pin","group","interfere","wretched","offer","store","volleyball","misty","boundary","bad","cat","periodic","lettuce","son","rainstorm","two","rich","sassy","spot","obeisant","abnormal","puzzling","crooked","whip","wasteful","gamy","feeling","absent","ugly","quarrelsome","voyage","slap","front","pump","calculate","woman","week","brass","pointless","show","ossified","befitting","fancy","spell","wire","ants","selfish","amazing","jewel","class","preach","TRUE","toad","toothpaste","juggle","design","tumble","toothsome","crow","tiger","tree","dinner","paltry","morning","airport","kick","known","debonair","steam","test","approval","match","unequal","multiply","respect","superb","appear","trucks","trick","blink","concerned","clean","introduce","jagged","mug","religion","boast","high","miss","parched","white","hole","memory","drip","flippant","melt","guarantee","mysterious","acid","houses","basket","warm","descriptive","smoggy","profuse","hook","attract","complete","bewildered","abrasive","settle","wiggly","battle","educate","bubble","boil","grubby","magical","jog","help","branch","pause","scrawny","hurried","assorted","sigh","press","lick","escape","mix","manage","dare","pan","precede","fearful","bored","alleged","irritate","crash","willing","stranger","plant","claim","hungry","lock","blood","rock","spiteful","invincible","overjoyed","cause","soda","phone","insurance","simple","rings","cars","knife","nut","reflect","wipe","flood","library","calendar","can","common","smelly","loose","detail","weather","pies","bustling","fire","ritzy","serve","phobic","medical","rock","level","short","petite","cover","swim","eggs","moan","silk","stir","fragile","poison","wave","driving","adorable","better","drunk","breath","arithmetic","five","scribble","dazzling","texture","belong","disagree","hysterical","lowly","axiomatic","alive","inconclusive","dashing","panicky","tense","cub","vein","box","grease","ill","left","unfasten","polite","eyes","replace","ignore","smile","woozy","purpose","joke","neighborly","incompetent","uttermost","stream","opposite","wing","literate","soggy","wise","hate","hover","reason","proud","brawny","contain","worm","wealthy","frame","zesty","worry","skip","wrist","curved","embarrassed","elite","receptive","signal","callous","scrub","grin","stereotyped","lush","donkey","faded","selection","fear","juice","angry","lock","jobless","distinct","needle","head","frame","leather","icicle","baseball","dust","walk","excellent","acoustics","smart","guide","straw","brash","joyous","wacky","point","dapper","arrive","panoramic","cream","waste","load","coast","wood","follow","coil","pencil","cactus","hushed","substantial","attraction","face","crown","gorgeous","desk","deceive","kiss","scary","evanescent","nasty","moldy","fanatical","nifty","measure","zealous","versed","scream","mighty","habitual","smell","pocket","brake","rinse","bathe","violent","disagreeable","illegal","limit","current","beautiful","army","tearful","flat","shiny","angle","tow","measly","visitor","blush","fold","pets","separate","consist","madly","position","subsequent","plantation","ragged","cheer","previous","hello"],
    flags = [{"id":"a","flag":"images/flag-a.jpg"},{"id":"b","flag":"images/flag-b.jpg"},{"id":"c","flag":"images/flag-c.jpg"},{"id":"d","flag":"images/flag-d.jpg"},{"id":"e","flag":"images/flag-e.jpg"},{"id":"f","flag":"images/flag-f.jpg"},{"id":"g","flag":"images/flag-g.jpg"},{"id":"h","flag":"images/flag-h.jpg"},{"id":"i","flag":"images/flag-i.jpg"},{"id":"j","flag":"images/flag-j.jpg"},{"id":"k","flag":"images/flag-k.jpg"},{"id":"l","flag":"images/flag-l.jpg"},{"id":"m","flag":"images/flag-m.jpg"},{"id":"n","flag":"images/flag-n.jpg"},{"id":"o","flag":"images/flag-o.jpg"},{"id":"p","flag":"images/flag-p.jpg"},{"id":"q","flag":"images/flag-q.jpg"},{"id":"r","flag":"images/flag-r.jpg"},{"id":"s","flag":"images/flag-s.jpg"},{"id":"t","flag":"images/flag-t.jpg"},{"id":"u","flag":"images/flag-u.jpg"},{"id":"v","flag":"images/flag-v.jpg"},{"id":"w","flag":"images/flag-w.jpg"},{"id":"x","flag":"images/flag-x.jpg"},{"id":"y","flag":"images/flag-y.jpg"},{"id":"z","flag":"images/flag-z.jpg"}],
    totalWords = words.length;

    let randomIndex = Math.floor(Math.random() * ((totalWords-1) - 0 + 1)) + 0,
        randomWord = words[randomIndex],
        randomWordArray = words[randomIndex].split(""),
        updateCharacter = randomWordArray.map(character => flags.filter(flag => item = flag.id === character)),
        flagImages = "";

        updateCharacter.forEach(item => flagImages += `<span><img src=${item[0].flag} alt=${item[0].id} class="flag" /></span>`);

        theWord.textContent = randomWord;
        document.querySelector("#flags").innerHTML = flagImages;
        document.querySelectorAll(".word-input")[0].classList.contains("hidden") ? document.querySelectorAll(".word-input")[0].classList.remove("hidden") : "";
        document.querySelector("#js-btn-check-answer").classList.contains("hidden") ? document.querySelector("#js-btn-check-answer").classList.remove("hidden") : "";
        document.querySelector("#word-found").value = "";
        resultBlock.classList.remove("success");
        resultBlock.classList.remove("fail");
        resultBlock.textContent = "";
}

function checkAnswer(){
    resultBlock.classList.remove("hidden");
    if(document.querySelector("#word-found").value.trim().length > 0) {
        if(theWord.textContent.toLowerCase().trim() === document.querySelector("#word-found").value.toLowerCase().trim()) {
            score = score + 1;
            resultBlock.textContent = resultMessage.success;
            resultBlock.classList.add("success");
            resultBlock.classList.remove("fail");
            generateWord();
        } else {
            score = 0;
            resultBlock.textContent = resultMessage.fail;
            resultBlock.classList.remove("success");
            resultBlock.classList.add("fail");
        }
        scoreBlock.textContent = score;
    } else {
        resultBlock.textContent = resultMessage.empty;
        resultBlock.classList.remove("success");
        resultBlock.classList.remove("fail");
    }
}

document.querySelector("#js-btn-generate-word").addEventListener("click", generateWord);
document.querySelector("#js-btn-check-answer").addEventListener("click",checkAnswer);