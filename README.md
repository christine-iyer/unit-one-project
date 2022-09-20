## Unit 1 Project

My unit one project is an adaptation of the word card game called Quiddler. 


### Game Bakground
This version will be a single player competing against the computer. Like many cardgames, players are dealt hands of shuffled cards and take turns picking up a facedown card from a 'pickup-pile' or a faceup card from a discard pile. In this game, each card represents a letter and player's objective is to write word/s using the same number of cards dealt that round. There are 8 rounds. In round 1, each player is dealt 3 cards, starting with the guest player. Again, guest first, players alternate picking up and discarding one card until one of them is able to use all of the letters in a word. Words must be at least two letters in length. Because different letters have different point values, the player who has the most points wins. Once someone checks out, the other player is offered a final opportunity to pick up, use their letters in words, and discard. Their correct word will be tallied for points and unused letters will be deducted. Finally, any time someone uses all of their letters in a single word, a bonus 5 points will e added to their score. The window of the screen will have the pickup and discard piles and the players hand will be bottom center, the computer will not play a hand, rather it will be a word checker. A scoreboard for each player will be updated in real time in a location TBA. I like the candy crush layout with drag and drop capabilities, but I don't know how to handle the incrementally increasing hand lengths by round."

### Why I chose Quiddler

I am not a game person. Aside from a few simple card games, I don't play. I do however like simple word games, so for this project I chose Quiddler. The logic seems replicable. Additionally, my interests lie in data so learning data manipulation techniques resonates most. 

Building this game has been absolutely overwhelming and I have yet to succeed. 

My first couple of days were spent reformatting the card data...I had created a card class and then made the individual cards with a letter and its assigned point value. There are varying quantities of each letter. 

| Letter      | Points | Count in Deck     |
| :---        |    :----:   |          ---: |
| A      | 2       | 8   |
| B   | 6        | 3     |



| Letter      |  Points     |
| :---          |          ---: |
| A      | 2        |
| A   | 2            |
| A      | 2        |
| A   | 2            |
| A      | 2        |
| A   | 2            |
| A      | 2        |
| A   | 2            |
| B   | 6            |
| B      | 6        |
| B   | 6            |

Once I built the deck, I needed to learn how to randomize, i.e., shuffle, and deal. Using online resources and video tutorials, I patchworked some code together that rendered a ready to use deck. Unfortunately I couldn't access it as it was deeply nested, until Arthur introduced me to the window property...with Josh's help it worked. 

Meanwhile, I built some letter tiles which are a hybrid of the quiddler cards and scrabble tiles, but as they were styled in js, they were deeply nested. I was afraid of a reprise, so I hand coded a deck and started again. 

Using the landscaper homework project, I plugged my data in and got it operable. 

Presently, it only shuffles and displays letters. I have not yet connected the word checker yet. I plan to incorporate a word object in the game...it will consist of a checker, the current letters in the player's hand, and the word the player submits. I need to create a pick up and a discard button, a word submit button and a calculator. Previously, the calculator worked, but now it doesn't. 

### Evaluation

I really have a hard time putting a project together at this pint. I am probably not ready for this class.





### Resources
[W3](https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop2) 

[Medium](https://medium.com/@blakeeh723/how-to-build-a-card-game-with-object-oriented-programming-c43cd2cadb3a)