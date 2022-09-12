const fiveLetterWords = ["Abuse", "Adult", "Agent", "Anger", "Apple", "Award", "Basis", "Beach", "Birth", "Block", "Blood", "Board", "Brain", "Bread", "Break", "Brown", "Buyer", "Cause", "Chain", "Chair", "Chest", "Chief", "Child", "China", "Claim", "Class", "Clock", "Coach", "Coast", "Court", "Cover", "Cream", "Crime", "Cross", "Crowd", "Crown", "Cycle", "Dance", "Death", "Depth", "Doubt", "Draft", "Drama", "Dream", "Dress", "Drink", "Drive", "Earth", "Enemy", "Entry", "Error", "Event", "Faith", "Fault", "Field", "Fight", "Final", "Floor", "Focus", "Force", "Frame", "Frank", "Front", "Fruit", "Glass", "Grant", "Grass", "Green", "Group", "Guide", "Heart", "Henry", "Horse", "Hotel", "House", "Image", "Index", "Input", "Issue", "Japan", "Jones", "Judge", "Knife", "Laura", "Layer", "Level", "Lewis", "Light", "Limit", "Lunch", "Major", "March", "Match", "Metal", "Model", "Money", "Month", "Motor", "Mouth", "Music", "Night", "Noise", "North", "Novel", "Nurse", "Offer", "Order", "Other", "Owner", "Panel", "Paper", "Party", "Peace", "Peter", "Phase", "Phone", "Piece", "Pilot", "Pitch", "Place", "Plane", "Plant", "Plate", "Point", "Pound", "Power", "Press", "Price", "Pride", "Prize", "Proof", "Queen", "Radio", "Range", "Ratio", "Reply", "Right", "River", "Round", "Route", "Rugby", "Scale", "Scene", "Scope", "Score", "Sense", "Shape", "Share", "Sheep", "Sheet", "Shift", "Shirt", "Shock", "Sight", "Simon", "Skill", "Sleep", "Smile", "Smith", "Smoke", "Sound", "South", "Space", "Speed", "Spite", "Sport", "Squad", "Staff", "Stage", "Start", "State", "Steam", "Steel", "Stock", "Stone", "Store", "Study", "Stuff", "Style", "Sugar", "Table", "Taste", "Terry", "Theme", "Thing", "Title", "Total", "Touch", "Tower", "Track", "Trade", "Train", "Trend", "Trial", "Trust", "Truth", "Uncle", "Union", "Unity", "Value", "Video", "Visit", "Voice", "Waste", "Watch", "Water", "While", "White", "Whole", "Woman", "World", "Youth", "One’s", "There", "Where", "Which", "Whose", "Whoso", "Yours", "Yours",  "Admit", "Adopt", "Agree", "Allow", "Alter", "Apply", "Argue", "Arise", "Avoid", "Begin", "Blame", "Break", "Bring", "Build", "Burst", "Carry", "Catch", "Cause", "Check", "Claim", "Clean", "Clear", "Climb", "Close", "Count", "Cover", "Cross", "Dance", "Doubt", "Drink", "Drive", "Enjoy", "Enter", "Exist", "Fight", "Focus", "Force", "Guess", "Imply", "Issue", "Judge", "Laugh", "Learn", "Leave", "Let’s", "Limit", "Marry", "Match", "Occur", "Offer", "Order", "Phone", "Place", "Point", "Press", "Prove", "Raise", "Reach", "Refer", "Relax", "Serve", "Shall", "Share", "Shift", "Shoot", "Sleep", "Solve", "Sound", "Speak", "Spend", "Split", "Stand", "Start", "State", "Stick", "Study", "Teach", "Thank", "Think", "Throw", "Touch", "Train", "Treat", "Trust", "Visit", "Voice", "Waste", "Watch", "Worry", "Would", "Write",  "Above", "Acute", "Alive", "Alone", "Angry", "Aware", "Awful", "Basic", "Black", "Blind", "Brave", "Brief", "Broad", "Brown", "Cheap", "Chief", "Civil", "Clean", "Clear", "Close", "Crazy", "Daily", "Dirty", "Early", "Empty", "Equal", "Exact", "Extra", "Faint", "False", "Fifth", "Final", "First", "Fresh", "Front", "Funny", "Giant", "Grand", "Great", "Green", "Gross", "Happy", "Harsh", "Heavy", "Human", "Ideal", "Inner", "Joint", "Large", "Legal", "Level", "Light", "Local", "Loose", "Lucky", "Magic", "Major", "Minor", "Moral", "Naked", "Nasty", "Naval", "Other", "Outer", "Plain", "Prime", "Prior", "Proud", "Quick", "Quiet", "Rapid", "Ready", "Right", "Roman", "Rough", "Round", "Royal", "Rural", "Sharp", "Sheer", "Short", "Silly", "Sixth", "Small", "Smart", "Solid", "Sorry", "Spare", "Steep", "Still", "Super", "Sweet", "Thick", "Third", "Tight", "Total", "Tough", "Upper", "Upset", "Urban", "Usual", "Vague", "Valid", "Vital", "White", "Whole", "Wrong", "Young", "Afore", "After", "Bothe", "Other", "Since", "Slash", "Until", "Where", "While",  "Aback", "Abaft", "Aboon", "About", "Above", "Accel", "Adown", "Afoot", "Afore", "Afoul", "After", "Again", "Agape", "Agogo", "Agone", "Ahead", "Ahull", "Alife", "Alike", "Aline", "Aloft", "Alone", "Along", "Aloof", "Aloud", "Amiss", "Amply", "Amuck", "Apace", "Apart", "Aptly", "Arear", "Aside", "Askew", "Awful", "Badly", "Bally", "Below", "Canny", "Cheap", "Clean", "Clear", "Coyly", "Daily", "Dimly", "Dirty", "Ditto", "Drily", "Dryly", "Dully", "Early", "Extra", "False", "Fatly", "Feyly", "First", "Fitly", "Forte", "Forth", "Fresh", "Fully", "Funny", "Gaily", "Gayly", "Godly", "Great", "Haply", "Heavy", "Hella", "Hence", "Hotly", "Icily", "Infra", "Intl.", "Jildi", "Jolly", "Laxly", "Lento", "Light", "Lowly", "Madly", "Maybe", "Never", "Newly", "Nobly", "Oddly", "Often", "Other", "Ought", "Party", "Piano", "Plain", "Plonk", "Plumb", "Prior", "Queer", "Quick", "Quite", "Ramen", "Rapid", "Redly", "Right", "Rough", "Round", "Sadly", "Secus", "Selly", "Sharp", "Sheer", "Shily", "Short", "Shyly", "Silly", "Since", "Sleek", "Slyly", "Small", "So-So", "Sound", "Spang", "Srsly", "Stark", "Still", "Stone", "Stour", "Super", "Tally", "Tanto", "There", "Thick", "Tight", "Today", "Tomoz", "Truly", "Twice", "Under", "Utter", "Verry", "Wanly", "Wetly", "Where", "Wrong", "Wryly",  "Abaft", "Aboon", "About", "Above", "Adown", "Afore", "After", "Along", "Aloof", "Among", "Below", "Circa", "Cross", "Furth", "Minus", "Neath", "Round", "Since", "Spite", "Under", "Until", "5 Letter Interjections", "Aargh", "Adieu", "Adios", "Alack", "Aloha", "Avast", "Bakaw", "Basta", "Begad", "Bless", "Blige", "Brava", "Bravo", "Bring", "Chook", "Damme", "Dildo", "Ditto", "Frick", "Fudge", "Golly", "Gratz", "Hallo", "Hasta", "Havoc", "Hella", "Hello", "Howay", "Howdy", "Hullo", "Huzza", "Jesus", "Kapow", "Loose", "Lordy", "Marry", "Mercy", "Night", "Plonk", "Psych", "Quite", "Salve", "Skoal", "Sniff", "Sooey", "There", "Thiam", "Thwap", "Tough", "Twirp", "Viola", "Vivat", "Wacko", "Wahey", "Whist", "Wilma", "Wirra", "Woops", "Wowie", "Yecch", "Yeeha", "Yeesh", "Yowch", "Zowie"]
const fourLetterWords =["Area", "Army", "Baby", "Back", "Ball", "Band", "Bank", "Base", "Bill", "Body", "Book", "Call", "Card", "Care", "Case", "Cash", "City", "Club", "Cost", "Date", "Deal", "Door", "Duty", "East", "Edge", "Face", "Fact", "Farm", "Fear", "Fig", "File", "Film", "Fire", "Firm", "Fish", "Food", "Foot", "Form", "Fund", "Game", "Girl", "Goal", "Gold", "Hair", "Half", "Hall", "Hand", "Head", "Help", "Hill", "Home", "Hope", "Hour", "Idea", "Jack", "John", "Kind", "King", "Lack", "Lady", "Land", "Life", "Line", "List", "Look", "Lord", "Loss", "Love", "Mark", "Mary", "Mind", "Miss", "Move", "Name", "Need", "News", "Note", "Page", "Pain", "Pair", "Park", "Part", "Past", "Path", "Paul", "Plan", "Play", "Post", "Race", "Rain", "Rate", "Rest", "Rise", "Risk", "Road", "Rock", "Role", "Room", "Rule", "Sale", "Seat", "Shop", "Show", "Side", "Sign", "Site", "Size", "Skin", "Sort", "Star", "Step", "Task", "Team", "Term", "Test", "Text", "Time", "Tour", "Town", "Tree", "Turn", "Type", "Unit", "User", "View", "Wall", "Week", "West", "Wife", "Will", "Wind", "Wine", "Wood", "Word", "Work", "Year", "Four Letter Pronouns", "Dese", "Enuf", "Feel", "Hern", "Hers", "Many", "Mine", "Mine", "Much", "Nada", "Nish", "None", "Nowt", "Ours", "Same", "Self", "Some", "Such", "That", "Thee", "Them", "They", "This", "Thon", "Thor", "Thou", "Thou", "Tone", "What", "When", "Whom", "Yere", "Your", "Four Letter Verbs", "Bear", "Beat", "Blow", "Burn", "Call", "Care", "Cast", "Come", "Cook", "Cope", "Cost", "Dare", "Deal", "Deny", "Draw", "Drop", "Earn", "Face", "Fail", "Fall", "Fear", "Feel", "Fill", "Find", "Form", "Gain", "Give", "Grow", "Hang", "Hate", "Have", "Head", "Hear", "Help", "Hide", "Hold", "Hope", "Hurt", "Join", "Jump", "Keep", "Kill", "Know", "Land", "Last", "Lead", "Lend", "Lift", "Like", "Link", "Live", "Look", "Lose", "Love", "Make", "Mark", "Meet", "Mind", "Miss", "Move", "Must", "Name", "Need", "Note", "Open", "Pass", "Pick", "Plan", "Play", "Pray", "Pull", "Push", "Read", "Rely", "Rest", "Ride", "Ring", "Rise", "Risk", "Roll", "Rule", "Save", "Seek", "Seem", "Sell", "Send", "Shed", "Show", "Shut", "Sign", "Sing", "Slip", "Sort", "Stay", "Step", "Stop", "Suit", "Take", "Talk", "Tell", "Tend", "Test", "Turn", "Vary", "View", "Vote", "Wait", "Wake", "Walk", "Want", "Warn", "Wash", "Wear", "Will", "Wish", "Work", "Four Letter Adjectives", "Able", "Back", "Bare", "Bass", "Blue", "Bold", "Busy", "Calm", "Cold", "Cool", "Damp", "Dark", "Dead", "Deaf", "Dear", "Deep", "Dual", "Dull", "Dumb", "Easy", "Evil", "Fair", "Fast", "Fine", "Firm", "Flat", "Fond", "Foul", "Free", "Full", "Glad", "Good", "Grey", "Grim", "Half", "Hard", "Head", "High", "Holy", "Huge", "Just", "Keen", "Kind", "Last", "Late", "Lazy", "Like", "Live", "Lone", "Long", "Loud", "Main", "Male", "Mass", "Mean", "Mere", "Mild", "Nazi", "Near", "Neat", "Next", "Nice", "Okay", "Only", "Open", "Oral", "Pale", "Past", "Pink", "Poor", "Pure", "Rare", "Real", "Rear", "Rich", "Rude", "Safe", "Same", "Sick", "Slim", "Slow", "Soft", "Sole", "Sore", "Sure", "Tall", "Then", "Thin", "Tidy", "Tiny", "Tory", "True", "Ugly", "Vain", "Vast", "Very", "Vice", "Warm", "Wary", "Weak", "Wide", "Wild", "Wise", "Zero", "Both", "Else", "Ergo", "Lest", "Like", "Once", "Only", "Plus", "Save", "Sith", "Than", "That", "Then", "Thou", "Till", "Unto", "When", "Some",  "Ably", "Afar", "Anew", "Away", "Back", "Damn", "Dead", "Deep", "Down", "Duly", "Easy", "Else", "Even", "Ever", "Fair", "Fast", "Flat", "Full", "Good", "Half", "Hard", "Here", "High", "Home", "Idly", "Just", "Late", "Like", "Live", "Long", "Loud", "Much", "Near", "Nice", "Okay", "Once", "Only", "Over", "Part", "Past", "Real", "Slow", "Solo", "Soon", "Sure", "That", "Then", "This", "Thus", "Very", "When", "Wide", "Four Letter Prepositions", "Ajax", "Amid", "Anti", "Apud", "Atop", "Bout", "Chez", "Come", "Dahn", "Doon", "Down", "From", "Gain", "Half", "Into", "Like", "Mang", "Mong", "Near", "Nigh", "Offa", "Onto", "Outa", "Over", "Past", "Post", "Save", "Than", "Thro", "Thru", "Till", "Unto", "Upon", "Vice", "Whiz", "With",  "Ahem", "Ahoy", "Alas", "Amen", "Bang", "Blah", "Ciao", "Crud", "Damn", "Darn", "Egad", "Eina", "Fact", "Flip", "Fore", "Gosh", "Heck", "Hell", "Here", "Hist", "Hiya", "Hmmm", "Hmph", "Honk", "Hunh", "Jeez", "Jinx", "Like", "Lord", "Meow", "Mwah", "Nome", "Nyet", "Okay", "Oops", "Ouch", "Phew", "Phut", "Poof", "Pooh", "Pugh", "Shoo", "Snap", "Stop", "Sure", "Tara", "This", "Urgh", "Wall", "Waly", "Wham", "Whoa", "Word", "Yuck"]
const threeLetterWords =["Ace", "Aid", "Aim", "Air", "Ale", "Arm", "Art", "Awl", "Eel", "Ear", "Era", "Ice", "Ire", "Ilk", "Oar", "Oak", "Oat", "Oil", "Ore", "Owl", "Urn", "Web", "Cab", "Dab", "Jab", "Lab", "Tab", "Dad", "Fad", "Lad", "Mad", "Bag", "Gag", "Hag", "Lag", "Mag", "Rag", "Tag", "Pal", "Cam", "Dam", "Fam", "Ham", "Jam", "Ram", "Ban", "Can", "Fan", "Man", "Pan", "Tan", "Bap", "Cap", "Lap", "Pap", "Rap", "Sap", "Tap", "Yap", "Bar", "Car", "Jar", "Tar", "War", "Bat", "Cat", "Hat", "Mat", "Pat", "Tat", "Rat", "Vat", "Caw", "Jaw", "Law", "Maw", "Paw", "Bay", "Cay", "Day", "Hay", "Ray", "Pay", "Way", "Max", "Sax", "Tax", "Pea", "Sea", "Tea", "Bed", "Med", "Leg", "Peg", "Bee", "Lee", "Tee", "Gem", "Bet", "Jet", "Net", "Pet", "Set", "Den", "Hen", "Men", "Pen", "Ten", "Yen", "Dew", "Mew", "Pew", "Bib", "Fib", "Jib", "Rib", "Sib", "Bid", "Kid", "Lid", "Vid", "Tie", "Lie", "Pie", "Fig", "Jig", "Pig", "Rig", "Wig", "Dim", "Bin", "Din", "Fin", "Gin", "Pin", "Sin", "Tin", "Win", "Yin", "Dip", "Lip", "Pip", "Sip", "Tip", "Git", "Hit", "Kit", "Pit", "Wit", "Bod", "Cod", "God", "Mod", "Pod", "Rod", "Doe", "Foe", "Hoe", "Roe", "Toe", "Bog", "Cog", "Dog", "Fog", "Hog", "Jog", "Log", "Poi", "Con", "Son", "Ton", "Zoo", "Cop", "Hop", "Mop", "Pop", "Top", "Bot", "Cot", "Dot", "Lot", "Pot", "Tot", "Bow", "Cow", "Sow", "Row", "Box", "Lox", "Pox", "Boy", "Soy", "Toy", "Cub", "Nub", "Pub", "Sub", "Tub", "Bug", "Hug", "Jug", "Mug", "Rug", "Tug", "Bum", "Gum", "Hum", "Rum", "Tum", "Bun", "Gun", "Pun", "Run", "Sun", "Cup", "Pup", "Cut", "Gut", "Hut", "Nut", "Rut", "Egg", "Ego", "Elf", "Elm", "Emu", "End", "Era", "Eve", "Eye", "Ink", "Inn", "Ion", "Ivy", "Lye", "Dye", "Rye", "Pus", "Gym",  "Her", "His", "Him", "Our", "You", "She",  "Add", "Ail", "Are", "Eat", "Err", "Oil", "Use", "Nab", "Jab", "Bag", "Lag", "Nag", "Rag", "Sag", "Tag", "Wag", "Jam", "Ram", "Ran", "Tan", "Cap", "Lap", "Nap", "Rap", "Sap", "Tap", "Yap", "Mar", "Has", "Was", "Pat", "Sat", "Lay", "Pay", "Say", "Max", "Tax", "Fed", "See", "Get", "Let", "Net", "Met", "Pet", "Set", "Wet", "Mew", "Sew", "Lie", "Tie", "Bog", "Jog", "Boo", "Coo", "Moo", "Bop", "Hop", "Lop", "Mop", "Pop", "Top", "Sop", "Bow", "Mow", "Row", "Tow", "Dub", "Rub", "Dug", "Lug", "Tug", "Hum", "Sup", "Buy", "Got", "Jot", "Rot", "Nod", "Hem", "Led", "Wed", "Fib", "Jib", "Rib", "Did", "Dig", "Jig", "Rig", "Dip", "Nip", "Sip", "Rip", "Zip", "Gin", "Win", "Bit", "Hit", "Sit", "Won", "Pry", "Try", "Cry", "Three Letter Adjectives", "All", "Fab", "Bad", "Had", "Mad", "Rad", "Tad", "Far", "Fat", "Raw", "Lax", "Max", "Gay", "Big", "Dim", "Fit", "Red", "Wet", "Old", "New", "Hot", "Coy", "Fun", "Ill", "Odd", "Shy", "Dry", "Wry", "And", "But", "Yet", "For", "Nor", "The", "Not", "How", "Too", "Yet", "Now", "Off", "Any",  "Out",  "Bam", "Nah", "Yea", "Yep", "Naw", "Hey", "Yay", "Nay", "Pow", "Wow", "Moo", "Boo", "Bye", "Yum", "Ugh", "Bah", "Umm", "Why", "Aha", "Aye", "Hmm", "Hah", "Huh", "Ssh", "Brr", "Heh", "Oop", "Oof", "Zzz", "Gee", "Grr", "Yup", "Gah", "Mmm", "Dag", "Arr", "Eww", "Ehh"]

/////////////////
let cardDeckArray = [];
class Card {
     constructor (suit, count, value) {
       this.suit = suit;
       this.count = count;
       this.value = value;
       }
       makeSingleCard(suit,value){
        let  card = (console.log(i + " - " + j))
}
}
const cardsArray = [
     new Card("A",10,2),
     new Card("B", 2,8),
     new Card("C", 2,8), 
     new Card("D", 4,5),
     new Card("E", 12,2),
     new Card("F", 2,6),
     new Card("G", 4,6),
     new Card("H", 1,7),
     new Card("I", 8,2),
     new Card("J", 13,2),
     new Card("K", 2,8),
     new Card("L", 4,3),
     new Card("M", 2,5),
     new Card("N", 6,5),
     new Card("O", 7,2),
     new Card("P", 2,6),
     new Card("Q", 2,15),
     new Card("R",6,5),
     new Card("S",3,3),
     new Card("T",6,3),
     new Card("U",6,4),
     new Card("V",2,11),
     new Card("W",2,10),
     new Card("X", 2,12),
     new Card("Y",4,4),
     new Card("Z",2,14),
     new Card("CL", 2,10),
     new Card("QU",2,9),
     new Card("TH",2,9),
     new Card("IN",2,7),
     new Card("ER",2,7)
]

const getDeck =()=> {
    let deck = [];
    for (let i = 0; i<cardsArray.length; i++){
        for (let j = 0; j<cardsArray[i].count; j++){
            let card = new Card(cardsArray[i].suit, 1, cardsArray[i].value)
            deck.push(card)
    }
    } return deck
}
// getDeck()
function shuffle()
{
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}

	getDeck();
}

function renderDeck()
{
	document.getElementById('deck').innerHTML = '';
	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("div");
		var suit = document.createElement("h1");
		var value = document.createElement("div");
		card.className = "card";
        card.style.color = 'white';

		value.className = "value";
        value.style.color = "grey";
        value.style.textAlign = 'left';
        suit.className = "suit";
        suit.style.fontSize = '55px';
        suit.style.accentColor = "pink";
        suit.style.color = "black";
        suit.style.fontFamily = "Luminari, fantasy";
		value.innerText = deck[i].value;
        suit.innerHTML = deck[i].suit;
        card.appendChild(suit);
		card.appendChild(value);
        


		document.getElementById("deck").appendChild(card);
	}
}

function load()
{
	deck = getDeck();
	shuffle();
	renderDeck();
}

window.onload = load;