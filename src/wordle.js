
//Declaracion de grids
var grids = [];

let row = 1;
let rowLetters = 1;
let wordAttempt = [];

//Ingresar palabras
document.addEventListener("keydown", function(event) {
    if (/^[a-zA-Z]$/.test(event.key)) {
        if(rowLetters < 6) {
            let currentGrid = document.getElementById('r' + row + 'g' + rowLetters);
            currentGrid.textContent = event.key.toUpperCase();
            rowLetters++;
            wordAttempt.push(event.key);
            currentGrid.classList.add('changed');

            setTimeout(function () {
                currentGrid.classList.remove('changed');
              }, 150);
              
            currentGrid.style.border = '2px solid gray';
        }
    }
});

//Borrar palabras
document.addEventListener("keydown", function(event) {
    if (event.keyCode == 8 || event.keyCode == 46) {
        let currentGrid = document.getElementById('r' + row + 'g' + (rowLetters-1));
        if(currentGrid != null) {
            currentGrid.textContent = '';
            rowLetters--;
            wordAttempt.pop();
            currentGrid.style.border = '2px solid #d3d6da';
        }
        
        
    }
});

/* - - - - - - - - - - - - - - - - - - - - VIRTUAL KEYBOARD - - - - - - - - - - - - - - - - - - -  */ 

const keyboardButtons = document.querySelectorAll('.kbbtn1');
const kbtn_delete = document.getElementById('kbtn_delete');

keyboardButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const character = button.getAttribute('data-character');
    if (character) {
        if (rowLetters < 6) {
            const currentGrid = document.getElementById('r' + row + 'g' + rowLetters);
            currentGrid.textContent = character.toUpperCase();
            rowLetters++;
            wordAttempt.push(character);
            currentGrid.classList.add('changed');
            setTimeout(function () {
                currentGrid.classList.remove('changed');
              }, 150);
              
            currentGrid.style.border = '2px solid gray';
        } 
      
    }
  });
});

kbtn_delete.onclick = function(){
    let currentGrid = document.getElementById('r' + row + 'g' + (rowLetters-1));
        if(currentGrid != null) {
            currentGrid.textContent = '';
            rowLetters--;
            wordAttempt.pop();
            currentGrid.style.border = '2px solid #d3d6da';
        }
}

/* - - - - - - - - - - ACTUAL MECHANISM OF THE GAME - - - - - - - - - -  - - - -  */

let wordsArr = [
  "About", "Alert", "Argue", "Beach",
  "Above", "Alike", "Arise", "Began",
  "Abuse", "Alive", "Array", "Begin",
  "Actor", "Allow", "Aside", "Begun",
  "Acute", "Alone", "Asset", "Being",
  "Admit", "Along", "Audio", "Below",
  "Adopt", "Alter", "Audit", "Bench",
  "Adult", "Among", "Avoid", "Billy",
  "After", "Anger", "Award", "Birth",
  "Again", "Angle", "Aware", "Black",
  "Agent", "Angry", "Badly", "Blame",
  "Agree", "Apart", "Baker", "Blind",
  "Ahead", "Apple", "Bases", "Block",
  "Alarm", "Apply", "Basic", "Blood",
  "Album", "Arena", "Basis", "Board",
  "Boost", "Buyer", "China", "Cover",
  "Booth", "Cable", "Chose", "Craft",
  "Bound", "Calif", "Civil", "Crash",
  "Brain", "Carry", "Claim", "Cream",
  "Brand", "Catch", "Class", "Crime",
  "Bread", "Cause", "Clean", "Cross",
  "Break", "Chain", "Clear", "Crowd",
  "Breed", "Chair", "Click", "Crown",
  "Brief", "Chart", "Clock", "Curve",
  "Bring", "Chase", "Close", "Cycle",
  "Broad", "Cheap", "Coach", "Daily",
  "Broke", "Check", "Coast", "Dance",
  "Brown", "Chest", "Could", "Dated",
  "Build", "Chief", "Count", "Dealt",
  "Built", "Child", "Court", "Death",
  "Debut", "Entry", "Forth", "Group",
  "Delay", "Equal", "Forty", "Grown",
  "Depth", "Error", "Forum", "Guard",
  "Doing", "Event", "Found", "Guess",
  "Doubt", "Every", "Frame", "Guest",
  "Dozen", "Exact", "Frank", "Guide",
  "Draft", "Exist", "Fraud", "Happy",
  "Drama", "Extra", "Fresh", "Harry",
  "Drawn", "Faith", "Front", "Heart",
  "Dream", "False", "Fruit", "Heavy",
  "Dress", "Fault", "Fully", "Hence",
  "Drill", "Fibre", "Funny", "Night",
  "Drink", "Field", "Giant", "Horse",
  "Drive", "Fifth", "Given", "Hotel",
  "Drove", "Fifty", "Glass", "House",
  "Dying", "Fight", "Globe", "Human",
  "Eager", "Final", "Going", "Ideal",
  "Early", "First", "Grace", "Image",
  "Earth", "Fixed", "Grade", "Index",
  "Eight", "Flash", "Grand", "Inner",
  "Elite", "Fleet", "Grant", "Input",
  "Empty", "Floor", "Grass", "Issue",
  "Enemy", "Fluid", "Great", "Irony",
  "Enjoy", "Focus", "Green", "Juice",
  "Enter", "Force", "Gross", "Joint",
  "Judge", "Metal", "Media", "Newly",
  "Known", "Local", "Might", "Noise",
  "Label", "Logic", "Minor", "North",
  "Large", "Loose", "Minus", "Noted",
  "Laser", "Lower", "Mixed", "Novel",
  "Later", "Lucky", "Model", "Nurse",
  "Laugh", "Lunch", "Money", "Occur",
  "Layer", "Lying", "Month", "Ocean",
  "Learn", "Magic", "Moral", "Offer",
  "Lease", "Major", "Motor", "Often",
  "Least", "Maker", "Mount", "Order",
  "Leave", "March", "Mouse", "Other",
  "Legal", "Music", "Mouth", "Ought",
  "Level", "Match", "Movie", "Paint",
  "Light", "Mayor", "Needs", "Paper",
  "Limit", "Meant", "Never", "Party",
  "Peace", "Power", "Radio", "Round",
  "Panel", "Press", "Raise", "Route",
  "Phase", "Price", "Range", "Royal",
  "Phone", "Pride", "Rapid", "Rural",
  "Photo", "Prime", "Ratio", "Scale",
  "Piece", "Print", "Reach", "Scene",
  "Pilot", "Prior", "Ready", "Scope",
  "Pitch", "Prize", "Refer", "Score",
  "Place", "Proof", "Right", "Sense",
  "Plain", "Proud", "Rival", "Serve",
  "Plane", "Prove", "River", "Seven",
  "Plant", "Queen", "Quick", "Shall",
  "Plate", "Sixth", "Stand", "Shape",
  "Point", "Quiet", "Roman", "Share",
  "Pound", "Quite", "Rough", "Sharp",
  "Sheet", "Spare", "Style", "Times",
  "Shelf", "Speak", "Sugar", "Tired",
  "Shell", "Speed", "Suite", "Title",
  "Shift", "Spend", "Super", "Today",
  "Shirt", "Spent", "Sweet", "Topic",
  "Shock", "Split", "Table", "Total",
  "Shoot", "Spoke", "Taken", "Touch",
  "Short", "Sport", "Taste", "Tough",
  "Shown", "Staff", "Taxes", "Tower",
  "Sight", "Stage", "Teach", "Track",
  "Since", "Stake", "Teeth", "Trade",
  "Sixty", "Start", "Texas", "Treat",
  "Sized", "State", "Thank", "Trend",
  "Skill", "Steam", "Theft", "Trial",
  "Sleep", "Steel", "Their", "Tried",
  "Slide", "Stick", "Theme", "Tries",
  "Small", "Still", "There", "Truck",
  "Smart", "Stock", "These", "Truly",
  "Smile", "Stone", "Thick", "Trust",
  "Smith", "Stood", "Thing", "Truth",
  "Smoke", "Store", "Think", "Twice",
  "Solid", "Storm", "Third", "Under",
  "Solve", "Story", "Those", "Undue",
  "Sorry", "Strip", "Three", "Union",
  "Sound", "Stuck", "Threw", "Unity",
  "South", "Study", "Throw", "Until",
  "Space", "Stuff", "Tight", "Upper",
  "Upset", "Whole", "Waste", "Wound",
  "Urban", "Whose", "Watch", "Write",
  "Usage", "Woman", "Water", "Wrong",
  "Usual", "Train", "Wheel", "Wrote",
  "Valid", "World", "Where", "Yield",
  "Value", "Worry", "Which", "Young",
  "Video", "Worse", "While", "Youth",
  "Virus", "Worst", "White", "Worth",
  "Visit", "Would", "Vital", "Voice"
];

for(let i = 0; i < wordsArr.length; i++) {
  wordsArr[i] = wordsArr[i].toLowerCase();
}

function getRandomWord() {
    let random = wordsArr[Math.floor(Math.random() * wordsArr.length)];
    return random;
}

let missingWord = getRandomWord();
let msn = missingWord;
let isOver = false;
const flashMessage = document.getElementById("flashMessage");

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      if(rowLetters < 6) {
        //pop up "Not enough letters"
          
          flashMessage.style.display = "block";
              setTimeout(function () {
                  flashMessage.style.display = "none";
              }, 700);
          
      } else {
        if(wordsArr.includes(wordAttempt.join(""))){
        
          //check word algorithm
              let att = wordAttempt.join("");
              console.log("msn: " + msn);
              console.log("att: " + att);
              //console.log(wordAttempt.join(""));
              let feedback = [];
                for(let i = 0; i < msn.length; i++) {
                  if(msn[i] == att[i]) {
                    feedback.push("#6aaa64");
                  } else {
                    feedback.push(null);
                  }
                }
  
                for(let i = 0; i < msn.length; i++) {
                  if(feedback[i] == null && msn.includes(att[i])) {
                    feedback[i] = "#c9b458";
                  }
                }
  
                for(let i = 0; i < msn.length; i++) {
                  if(feedback[i]== null) {
                    feedback[i] = "#787c7e";
                  }
                }
                
                for(let i = 0; i < att.length; i++) {
                  let currentGrid = document.getElementById('r' + row + 'g' + (i+1));
                  currentGrid.style.backgroundColor = feedback[i];
                  currentGrid.style.border = `2px solid ${feedback[i]}`;
                  let currentKey = document.getElementById('kbtn' + att[i]);
                  
                  currentKey.style.backgroundColor = feedback[i]
                  currentKey.style.color = "#fff";
                  currentGrid.style.color = "#fff";
                  currentGrid.classList.add('flip-in-hor-top');
                }
  
                
  
                if(feedback[0] == "#6aaa64" && feedback[1] == "#6aaa64" && feedback[2] == "#6aaa64" && feedback[3] == "#6aaa64" && feedback[4] == "#6aaa64") {
                  console.log("win the game");
                  isOver = true;
                  flashMessage.textContent = "Algo bien!";
                  flashMessage.style.display = 'block';
  
                  setTimeout(function () {
                    flashMessage.style.display = "none";
                }, 700);
                
                  
                } else {
                  console.log("didnt win");
                  console.log(feedback);
                }
                rowLetters = 1;
                row++;
                wordAttempt = [];
              } else {
                flashMessage.textContent = "Not a word!";
                  flashMessage.style.display = 'block';
  
                  setTimeout(function () {
                    flashMessage.style.display = "none";
                }, 700);
              }
      }
      
      
            
        
      }
  });

