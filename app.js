// Action to take on user event
function updateResult() {


const nounInput = document.getElementById('nounInput');
const adjectiveInput = document.getElementById('adjectiveInput');
const learnInput = document.getElementById('learnInput');

const nounResult = document.getElementById('nounResult');
const adjectiveResult = document.getElementById('adjectiveResult');
const learnResult = document.getElementById('learnResult');

document.getElementById("myStory").setAttribute('style', 'visibility: visible');

nounResult.innerText = nounInput.value;
adjectiveResult.innerText = adjectiveInput.value;
learnResult.innerText = learnInput.value;

}


