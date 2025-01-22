// VARIABLE DECLARATIONS


var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize"); 
var story = document.querySelector(".story"); 

var storyText = 'It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but he was not surprised — :insertX: weighs 300 pounds, and it was a hot day.';

var insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(/:insertX:/g, xItem);
    newStory = newStory.replace(/:insertY:/g, yItem);
    newStory = newStory.replace(/:insertZ:/g, zItem);

    if (customName.value !== "") {
        var name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    if (document.getElementById("metric").checked) {
        var weight = Math.round(300 * 0.453592);
        newStory = newStory.replace("300 pounds", weight + " kilograms");
        var temp = Math.round((94 - 32) * 5 / 9);
        newStory = newStory.replace("94 fahrenheit", temp + " celsius");
    }

    story.textContent = newStory;
    story.style.visibility = "visible";
}

// Adding the event listener to the button using class
randomize.addEventListener("click", result);
