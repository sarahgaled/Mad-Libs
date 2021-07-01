/*-------------------------------- Constants --------------------------------*/

const colorScheme = {
    dark: "",
    change: function(){
        console.log(colorScheme.dark)
        colorScheme.dark = colorScheme.dark ? "" : "dark"
        document.querySelector("body").setAttribute("class", colorScheme.dark)
        console.log(colorScheme.dark)
    }
}

/*-------------------------------- Variables --------------------------------*/

let story

let selectedCategory = ""


let nounList = ['abandoned home', 'airfield', 'amusement park', 'antique shop', 'apple orchard', 'arena', 'auction house', 'Bangkok, Thailand', 'bathroom', 'bazaar', 'bridge', 'Cabo', 'cafeteria', 'cemetery', 'chamber', 'church', 'construction site', 'cornfield', 'courthouse', 'crack house', 'factory reset button', 'blood rage', 'idiot', 'toaster', 'legend', 'death wish', 'therapy', 'goal in life', 'marketing idea', 'psychic', 'knife', 'sandwich', 'hunting ground', 'lettuce', 'kitty', 'friendly grandma', 'french chef', 'antidepressant drug']


let adjectiveList = ['dead', 'hairless', 'sadistic', 'metal', 'wild', 'domesticated', 'abnormal', 'medicated', 'cocky', 'massive', 'disrespectful', 'impressive', 'out of control', 'internet worthy', 'hilarious', 'sexy', 'hot', 'very tactful', 'bearded', 'duck-like', 'violent', 'slimy', 'insanely creepy', 'embarrassed to the bone', 'self-centered', 'talking', 'naked', 'angry', 'shaky', 'deep', 'sick', 'zippy', 'sticky', 'fluffy', 'frozen', 'unholy', 'painfully honest', 'filthy', 'fighting', 'bonkers', 'harsh', 'frisky', 'greedy', 'crawly', 'insane', 'hideous', 'ungodly', 'abusive', 'drunken', 'hateful', 'idiotic', 'twisted', 'useless', 'yapping', 'magical', 'indecent', 'godawful', 'arrogant', 'confused', 'flirting', 'high-end', 'insecure', 'maniacal']


let verbList = ['surround', 'stab', 'return', 'medicate', 'blindside', 'boogie', 'flap', 'trip', 'swat', 'suck in', 'harass', 'trap', 'snoop', 'explode', 'sketch', 'scatter', 'challenge', 'fight', 'bury', 'splatter', 'smack', 'peddle', 'balance', 'trip up', 'boggle', 'poke', 'critique', 'fear', 'initiate', 'line up', 'run over', 'schedule', 'cook', 'imprison', 'underestimate', 'cajole', 'wheedle', 'soft soap', 'butter up', 'sweet-talk', 'prevail', 'shred', 'drink', 'dispute', 'echo', 'mimic', 'berate', 'castigate', 'underrate', 'taunt']


let adverbList = ['tightly', 'joyously', 'shyly', 'unaccountably', 'frantically', 'dreamily', 'evenly', 'enormously', 'loudly', 'joyfully', 'quaintly', 'afterwards', 'eventually', 'nervously', 'truthfully', 'fortunately', 'daily', 'poorly', 'frightfully', 'equally', 'less', 'annually', 'officially', 'acidly', 'wildly', 'dimly', 'readily', 'weakly', 'fiercely', 'quietly', 'perfectly', 'judgmentally', 'regularly', 'gently', 'madly', 'knowledgeably', 'scarily', 'helpfully', 'enormously', 'mostly', 'gladly', 'greatly', 'frightfully', 'woefully', 'irritably', 'fortunately', 'utterly', 'heavily', 'extremely', 'enthusiastically', 'reluctantly', 'patiently', 'kindly', 'faithfully', 'courageously', 'shakily', 'politely', 'daringly', 'powerfully', 'lazily', 'diligently', 'ingeniously', 'keenly', 'nearly', 'beautifully', 'cheerfully', 'physically', 'promptly', 'victoriously', 'unnecessarily', 'ferociously', 'stealthily', 'foolishly', 'valiantly', 'daintily', 'joyfully']


let pluralNounList = ['axes', 'heroes', 'crises', 'businesses', 'viruses', 'phenomena', 'mongooses', 'software', 'equipment', 'platypuses', 'dice', 'oxen', 'sheep']

/*------------------------ Cached Element References ------------------------*/

const madlibContent = document.getElementById("madlib-content")
const libIt = document.querySelector(".generate-madlib")
const reset = document.querySelector(".reset")
const form = document.querySelector("#form")
const noun = document.querySelector("#noun")
const verb = document.querySelector("#verb")
const adjective = document.querySelector("#adjective")
const adverb = document.querySelector("#adverb")
const pluralNoun = document.querySelector("#plural-noun")
const messageElement = document.querySelector("#message")
const randomNoun = document.querySelector("#random-noun")
const randomVerb = document.querySelector("#random-verb")
const randomAdjective = document.querySelector("#random-adjective")
const randomAdverb = document.querySelector("#random-adverb")
const randomPluralNoun = document.querySelector("#random-plural-noun")
const totallyRandom = document.querySelector("#totally-random-button")
const categoryContainer = document.querySelector('.category-container')
const specialButton = document.getElementById('magic')
const marriage = document.querySelector(".marriage")
const newYork = document.querySelector(".new-york")
const dating = document.querySelector(".dating")
const adultHood = document.querySelector(".adulthood")
const lightDarkBtn = document.querySelector("#light-dark-button")
categoryContainer.style.display = 'visible'

/*----------------------------- Event Listeners -----------------------------*/

// lightDarkBtn.addEventListener("click", colorScheme.change)

randomNoun.addEventListener('click', autoFillNoun)
randomVerb.addEventListener('click', autoFillVerb)
randomAdjective.addEventListener('click', autoFillAdjective)
randomAdverb.addEventListener('click', autoFillAdverb)
randomPluralNoun.addEventListener('click', autoFillPluralNoun)
marriage.addEventListener('click', setCategory)
newYork.addEventListener('click', setCategory)
dating.addEventListener('click', setCategory)
adultHood.addEventListener('click', setCategory)
totallyRandom.addEventListener('click', totalAutoFill)
libIt.addEventListener('click', generateStory)
reset.addEventListener("click", resetStory)
form.addEventListener("submit", generateStory)
lightDarkBtn.addEventListener("click", colorScheme.change)
/*-------------------------------- Functions --------------------------------*/

checkUserColorSchemePreference()

function checkUserColorSchemePreference(){
    if(
        window.matchMedia("(prefers-color-scheme:dark)").matches && !colorScheme.dark
    ){
        colorScheme.change()
    }
}

function generateStory(event) { //grab the input values to generate the story
    event.preventDefault()
    console.log('running')
    let noun = document.getElementById('noun').value
    let verb = document.getElementById('verb').value
    let adjective = document.getElementById('adjective').value
    let adverb = document.getElementById('adverb').value
    let pluralNoun = document.getElementById('plural-noun').value


    if (noun && verb && adjective && adverb && pluralNoun && event.target.id === 'generate-madlib') {

        if (selectedCategory === 'dating'){
            madlibContent.innerText = `I went on a date in ${noun} and it was interestingly ${adjective}. The guy couldn't stop ${verb} and ${adverb} too! Dating ${pluralNoun} is weak.`
        }
        if (selectedCategory === 'marriage'){
            madlibContent.innerText = `Marriage is like ${noun}, it's all ${noun} until you realize you made the biggest mistake by ${verb} this shmuck. Just the thought of ${adverb} makes you nauseous.`
        }
    
        if (selectedCategory === 'adulthood'){
            madlibContent.innerText = `There is nothing like a adulthood. Everyone tells you it's going to be ${noun} and ${adjective}. But then you start ${verb} and ${adverb} and you realize all ${pluralNoun}s were wrong. Adulthood sucks.`
        }
    
        if (selectedCategory === 'new-york'){
            madlibContent.innerText = `New York is filled with ${noun}s and ${adjective}s who like to ${verb} and ${adverb} all over the place with ${pluralNoun}`
            
        } if (selectedCategory === "" ) {
            madlibContent.innerText = `Getting into a car accident is like ${noun}. You feel like ${verb} and ${adjective} and hope ${pluralNoun} is okay.`
            categoryContainer.style.visibility = 'hidden'
        }  
    }
}

function resetStory() { //reseting all the inputs to strings which essentially resets the story
    noun.value = ""
    verb.value = ""
    adjective.value = ""
    adverb.value = ""
    pluralNoun.value = ""

    madlibContent.innerHTML = ""

    selectedCategory = ""

    toggleVisibility()
}

function generateRandom(choicesArr) {

    let randomItem
    randomItem = choicesArr[Math.floor(Math.random() * choicesArr.length)]
    return randomItem
}

function autoFillNoun() {
    noun.value = generateRandom(nounList)
}

function autoFillVerb() {
    verb.value = generateRandom(verbList)
}

function autoFillAdjective() {
    adjective.value = generateRandom(adjectiveList)
}

function autoFillAdverb() {
    adverb.value = generateRandom(adverbList)
}

function autoFillPluralNoun() {
    pluralNoun.value = generateRandom(pluralNounList)
}

function totalAutoFill() {
    noun.value = generateRandom(nounList)
    verb.value = generateRandom(verbList)
    adjective.value = generateRandom(adjectiveList)
    adverb.value = generateRandom(adverbList)
    pluralNoun.value = generateRandom(pluralNounList)
}



function toggleVisibility(){
  
    // if (categoryContainer.style.visibility === 'visible') {
    // } else {
        categoryContainer.style.visibility = 'visible'
    // }
    console.log(`visibility is ${categoryContainer.style.visibility}`)
    
}

function setCategory(evt){   
    
    selectedCategory = evt.target.id
    console.log(selectedCategory)
    categoryContainer.style.visibility = 'hidden'
    
}




  //categoryContainer.style.display= 'none'