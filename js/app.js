/*-------------------------------- Constants --------------------------------*/

// const colorScheme = {
//     dark: "",
//     change: function(){
//         console.log(colorScheme.dark)
//         colorScheme.dark = colorScheme.dark ? "" : "dark"
//         document.querySelector("body").setAttribute("class", colorScheme.dark)
//         console.log(colorScheme.dark)
//     }
// }

/*-------------------------------- Variables --------------------------------*/

let noun = [ 'abandoned home', 'airfield', 'amusement park', 'antique shop', 'apple orchard', 'arena', 'auction house', 'Bangkok, Thailand', 'bathroom', 'bazaar', 'bridge', 'Cabo', 'cafeteria', 'cemetery', 'chamber', 'church', 'construction site', 'cornfield', 'courthouse', 'crack house', 'factory reset button', 'blood rage', 'idiot', 'toaster', 'legend', 'death wish', 'therapy', 'goal in life', 'marketing idea', 'psychic', 'knife', 'sandwich', 'hunting ground', 'lettuce', 'kitty', 'friendly grandma', 'french chef', 'antidepressant drug']


let adjective = ['dead', 'hairless', 'sadistic', 'metal', 'wild', 'domesticated', 'abnormal', 'medicated', 'cocky', 'massive', 'disrespectful', 'impressive', 'out of control', 'internet worthy', 'hilarious', 'sexy', 'hot', 'very tactful', 'bearded', 'duck-like', 'violent', 'slimy', 'insanely creepy','embarrassed to the bone', 'self-centered', 'talking', 'naked', 'angry', 'shaky', 'deep', 'sick', 'zippy', 'sticky', 'fluffy', 'frozen', 'unholy', 'painfully honest', 'filthy', 'fighting', 'bonkers', 'harsh', 'frisky', 'greedy', 'crawly', 'insane', 'hideous', 'ungodly', 'abusive', 'drunken', 'hateful', 'idiotic','twisted', 'useless', 'yapping', 'magical', 'indecent', 'godawful', 'arrogant', 'confused', 'flirting', 'high-end','insecure', 'maniacal']


let verb = [
    'surround', 'stab','return','medicate','blindside', 'boogie', 'flap', 'trip', 'swat', 'suck in', 'harass', 'trap', 'snoop', 'explode', 'sketch', 'scatter', 'challenge','fight', 'bury', 'splatter', 'smack', 'peddle', 'balance', 'trip up', 'boggle', 'poke','critique', 'fear', 'initiate', 'line up', 'run over', 'schedule', 'cook', 'imprison','underestimate', 'cajole', 'wheedle', 'soft soap', 'butter up', 'sweet-talk', 'prevail', 'shred', 'drink', 'dispute', 'echo', 'mimic', 'berate', 'castigate','underrate', 'taunt']


let adVerb = [
    'tightly', 'joyously', 'shyly' ,'unaccountably', 'frantically', 'dreamily', 'evenly', 'enormously', 'loudly', 'joyfully', 'quaintly', 'afterwards', 'eventually', 'nervously','truthfully', 'fortunately', 'daily', 'poorly', 'frightfully', 'equally', 'less', 'annually', 'officially', 'acidly', 'wildly', 'dimly', 'readily', 'weakly', 'fiercely','quietly', 'perfectly', 'judgmentally', 'regularly', 'gently', 'madly', 'knowledgeably','scarily', 'helpfully', 'enormously', 'mostly', 'gladly', 'greatly', 'frightfully', 'woefully', 'irritably', 'fortunately', 'utterly', 'heavily', 'extremely', 'enthusiastically', 'reluctantly', 'patiently', 'kindly', 'faithfully', 'courageously', 'shakily', 'politely', 'daringly', 'powerfully', 'lazily', 'diligently', 'ingeniously','keenly', 'nearly', 'beautifully', 'cheerfully', 'physically', 'promptly', 'victoriously','unnecessarily', 'ferociously', 'stealthily', 'foolishly', 'valiantly', 'daintily', 'joyfully']


let pluralNoun = [
    'axes', 'heroes', 'crises', 'businesses', 'viruses', 'phenomena', 'mongooses', 'software', 'equipment', 'platypuses', 'dice', 'oxen', 'sheep']

/*------------------------ Cached Element References ------------------------*/

const madLibContainer = document.querySelector(".madlib-container")
const madlibContent = document.querySelector(".madlib-content")
const inputText = document.getElementById("input-text")
const randomWord = document.querySelector(".random-word")
const totallyRandomWord = document.querySelector(".totally-random-word")
const libIt = document.querySelector(".generate-madlib")
const replay = document.querySelector(".replay")


/*----------------------------- Event Listeners -----------------------------*/

randomWord.addEventListener()
totallyRandomWord.addEventListener()
libIt.addEventListener('click', render)
replay.addEventListener()
// lightDarkBtn.addEventListener("click", colorScheme.change)

/*-------------------------------- Functions --------------------------------*/

// nounAmount = noun.length

// randomNoun = Math.floor(Math.random()* nounAmount)

init()



function initialize(){

}

function autoFill(){

}

function render(){

    let noun = document.getElementById('noun').value
    let verb = document.getElementById('verb').value
    let adjective = document.getElementById('adjective').value
    let adverb = document.getElementById('adverb').value
    let pluralNoun = document.getElementById('plural-noun').value
    
    let madlibContent = (`There are too many ${pluralNoun} on this ${noun} that are ${verb} too loud. Someone please ${verb} what your ${verb}. ah this sun is too ${adjective}, please someone do something about it ${adverb}. `)

    document.getElementById("madlibContent").innerHTML = madlibContent
}

function reset(){

}

function handleClick(){

}

render()