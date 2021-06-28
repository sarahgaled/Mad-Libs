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

let player, submit, generate, story

// let noun = [ 'abandoned home', 'airfield', 'amusement park', 'antique shop', 'apple orchard', 'arena', 'auction house', 'Bangkok, Thailand', 'bathroom', 'bazaar', 'bridge', 'Cabo', 'cafeteria', 'cemetery', 'chamber', 'church', 'construction site', 'cornfield', 'courthouse', 'crack house', 'factory reset button', 'blood rage', 'idiot', 'toaster', 'legend', 'death wish', 'therapy', 'goal in life', 'marketing idea', 'psychic', 'knife', 'sandwich', 'hunting ground', 'lettuce', 'kitty', 'friendly grandma', 'french chef', 'antidepressant drug']


// let adjective = ['dead', 'hairless', 'sadistic', 'metal', 'wild', 'domesticated', 'abnormal', 'medicated', 'cocky', 'massive', 'disrespectful', 'impressive', 'out of control', 'internet worthy', 'hilarious', 'sexy', 'hot', 'very tactful', 'bearded', 'duck-like', 'violent', 'slimy', 'insanely creepy','embarrassed to the bone', 'self-centered', 'talking', 'naked', 'angry', 'shaky', 'deep', 'sick', 'zippy', 'sticky', 'fluffy', 'frozen', 'unholy', 'painfully honest', 'filthy', 'fighting', 'bonkers', 'harsh', 'frisky', 'greedy', 'crawly', 'insane', 'hideous', 'ungodly', 'abusive', 'drunken', 'hateful', 'idiotic','twisted', 'useless', 'yapping', 'magical', 'indecent', 'godawful', 'arrogant', 'confused', 'flirting', 'high-end','insecure', 'maniacal']


// let verb = [
//     'surround', 'stab','return','medicate','blindside', 'boogie', 'flap', 'trip', 'swat', 'suck in', 'harass', 'trap', 'snoop', 'explode', 'sketch', 'scatter', 'challenge','fight', 'bury', 'splatter', 'smack', 'peddle', 'balance', 'trip up', 'boggle', 'poke','critique', 'fear', 'initiate', 'line up', 'run over', 'schedule', 'cook', 'imprison','underestimate', 'cajole', 'wheedle', 'soft soap', 'butter up', 'sweet-talk', 'prevail', 'shred', 'drink', 'dispute', 'echo', 'mimic', 'berate', 'castigate','underrate', 'taunt']


// let adVerb = [
//     'tightly', 'joyously', 'shyly' ,'unaccountably', 'frantically', 'dreamily', 'evenly', 'enormously', 'loudly', 'joyfully', 'quaintly', 'afterwards', 'eventually', 'nervously','truthfully', 'fortunately', 'daily', 'poorly', 'frightfully', 'equally', 'less', 'annually', 'officially', 'acidly', 'wildly', 'dimly', 'readily', 'weakly', 'fiercely','quietly', 'perfectly', 'judgmentally', 'regularly', 'gently', 'madly', 'knowledgeably','scarily', 'helpfully', 'enormously', 'mostly', 'gladly', 'greatly', 'frightfully', 'woefully', 'irritably', 'fortunately', 'utterly', 'heavily', 'extremely', 'enthusiastically', 'reluctantly', 'patiently', 'kindly', 'faithfully', 'courageously', 'shakily', 'politely', 'daringly', 'powerfully', 'lazily', 'diligently', 'ingeniously','keenly', 'nearly', 'beautifully', 'cheerfully', 'physically', 'promptly', 'victoriously','unnecessarily', 'ferociously', 'stealthily', 'foolishly', 'valiantly', 'daintily', 'joyfully']


// let pluralNoun = [
//     'axes', 'heroes', 'crises', 'businesses', 'viruses', 'phenomena', 'mongooses', 'software', 'equipment', 'platypuses', 'dice', 'oxen', 'sheep']

/*------------------------ Cached Element References ------------------------*/

const madlibContent = document.getElementById("madlib-content")
const libIt = document.querySelector(".generate-madlib")
const reset = document.querySelector(".reset")
const form = document.querySelector(".input-text")
const noun = document.querySelector("#noun")
const verb = document.querySelector("#verb")
const adjective = document.querySelector("#adjective")
const adverb = document.querySelector("#adverb")
const pluralNoun = document.querySelector("#plural-noun")
const messageElement = document.querySelector("#message")

/*----------------------------- Event Listeners -----------------------------*/

//randomWord.addEventListener()
//totallyRandomWord.addEventListener()
// lightDarkBtn.addEventListener("click", colorScheme.change)
libIt.addEventListener('click', generateStory)
reset.addEventListener("click", resetStory)
form.addEventListener("submit", function(evt){
    evt.preventDefault()
})
/*-------------------------------- Functions --------------------------------*/


function generateStory(){ //grab the input values to generate the story

    let noun = document.getElementById('noun').value
    let verb = document.getElementById('verb').value
    let adjective = document.getElementById('adjective').value
    let adverb = document.getElementById('adverb').value
    let pluralNoun = document.getElementById('plural-noun').value

    let story = ""
    story = 'There are too many ' + pluralNoun + ' on this ' + noun + ' that are ' + verb + ' too loud. Someone please ' + verb + ' what your ' + verb + ' ah this sun is too ' + adjective + ', please someone do something about it ' + adverb
    
    madlibContent.innerHTML = story

 }

 function noInputs(){
    // need to check if no inputs and empty form fields then dont generate the story

    if(noun.value === "" && verb.value === "" && adjective.value === "" && adverb.value === "" && pluralNoun.value === ""){
        renderError(`please enter a ${noun}, ${verb}, ${adjective}, ${adverb}, and a ${pluralNoun} please!`)
        return
    } 
    
}

function renderError(error){
    messageElement.className = "error"
    messageElement.innerText = error
}

 function resetStory(){ //reseting all the inputs to strings which essentially resets the story
    noun.value = ""
    verb.value = ""
    adjective.value = ""
    adverb.value = ""
    pluralNoun.value = ""

    madlibContent.innerHTML = ""
 }



// nounAmount = noun.length

// randomNoun = Math.floor(Math.random()* nounAmount)



// function autoFill(){

// }


// function handleClick(){

// }
