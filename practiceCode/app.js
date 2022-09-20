class Tool {
    constructor(name, purchasePrice, earnings) {
        this.name = name
        this.purchasePrice = purchasePrice
        this.earnings = earnings
    }
}
const tools = [
    new Tool ('Z', 1, 14),
    new Tool ('K', 1, 8),
    new Tool ('J', 1, 2),
    new Tool ('TH', 1, 9),
    new Tool ('QU', 1, 9),
    new Tool ('O', 1, 2),
    new Tool ('T', 1, 3),
    new Tool ('U', 1, 4),
    new Tool ('P', 1, 6),
    new Tool ('J', 1, 2),
    new Tool ('L', 1, 3),
    new Tool ('J', 1, 2),
    new Tool ('N', 1, 5),
    new Tool ('V', 1, 11),
    new Tool ('E', 1, 2),
    new Tool ('J', 1, 2),
    new Tool ('A', 1, 2),
    new Tool ('U', 1, 4),
    new Tool ('Z', 1, 14),
    new Tool ('E', 1, 2),
    new Tool ('J', 1, 2),
    new Tool ('W', 1, 10),
    new Tool ('C', 1, 8),
    new Tool ('M', 1, 5),
    new Tool ('A', 1, 2),
    new Tool ('U', 1, 4),
    new Tool ('R', 1, 5),
    new Tool ('R', 1, 5),
    new Tool ('Q', 1, 15),
    new Tool ('R', 1, 5),
    new Tool ('A', 1, 2),
    new Tool ('A', 1, 2),
    new Tool ('T', 1, 3),
    new Tool ('D', 1, 5),
    new Tool ('T', 1, 3),
    new Tool ('S', 1, 3),
    new Tool ('D', 1, 5),
    new Tool ('W', 1, 10),
    new Tool ('G', 1, 6),
    new Tool ('J', 1, 2),
    new Tool ('T', 1, 3),
    new Tool ('A', 1, 2),
    new Tool ('G', 1, 6),
    new Tool ('F', 1, 6),
    new Tool ('J', 1, 2),
    new Tool ('CL', 1, 10),
    new Tool ('Q', 1, 15),
    new Tool ('B', 1, 8),
    new Tool ('H', 1, 7),
    new Tool ('E', 1, 2),
    new Tool ('I', 1, 2),
    new Tool ('IN', 1, 7),
    new Tool ('ER', 1, 7),
    new Tool ('E', 1, 2),
    new Tool ('L', 1, 3),
    new Tool ('U', 1, 4),
    new Tool ('F', 1, 6),
    new Tool ('E', 1, 2),
    new Tool ('X', 1, 12),
    new Tool ('E', 1, 2),
    new Tool ('I', 1, 2),
    new Tool ('J', 1, 2),
    new Tool ('E', 1, 2),
    new Tool ('P', 1, 6),
    new Tool ('N', 1, 5),
    new Tool ('QU', 1, 9),
    new Tool ('V', 1, 11),
    new Tool ('J', 1, 2),
    new Tool ('I', 1, 2),
    new Tool ('Y', 1, 4),
    new Tool ('Y', 1, 4),
    new Tool ('U', 1, 4),
    new Tool ('R', 1, 5),
    new Tool ('O', 1, 2),
    new Tool ('O', 1, 2),
    new Tool ('I', 1, 2),
    new Tool ('O', 1, 2),
    new Tool ('C', 1, 8),
    new Tool ('R', 1, 5),
    new Tool ('M', 1, 5),
    new Tool ('O', 1, 2),
    new Tool ('G', 1, 6),
    new Tool ('TH', 1, 9),
    new Tool ('A', 1, 2),
    new Tool ('O', 1, 2),
    new Tool ('A', 1, 2),
    new Tool ('U', 1, 4),
    new Tool ('S', 1, 3),
    new Tool ('R', 1, 5),
    new Tool ('E', 1, 2),
    new Tool ('A', 1, 2),
    new Tool ('IN', 1, 7),
    new Tool ('G', 1, 6),
    new Tool ('K', 1, 8),
    new Tool ('J', 1, 2),
    new Tool ('L', 1, 3),
    new Tool ('I', 1, 2),
    new Tool ('N', 1, 5),
    new Tool ('J', 1, 2),
    new Tool ('D', 1, 5),
    new Tool ('T', 1, 3),
    new Tool ('E', 1, 2),
    new Tool ('B', 1, 8),
    new Tool ('L', 1, 3),
    new Tool ('I', 1, 2),
    new Tool ('N', 1, 5),
    new Tool ('A', 1, 2),
    new Tool ('E', 1, 2),
    new Tool ('D', 1, 5),
    new Tool ('Y', 1, 4),
    new Tool ('X', 1, 12),
    new Tool ('S', 1, 3),
    new Tool ('J', 1, 2),
    new Tool ('N', 1, 5),
    new Tool ('O', 1, 2),
    new Tool ('I', 1, 2),
    new Tool ('Y', 1, 4),
    new Tool ('I', 1, 2),
    new Tool ('ER', 1, 7),
    new Tool ('N', 1, 5),
    new Tool ('J', 1, 2),
    new Tool ('E', 1, 2),
    new Tool ('E', 1, 2),
    new Tool ('A', 1, 2),
    new Tool ('T', 1, 3),
    new Tool ('CL', 1, 10)
];
function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  let shuffledArray = shuffleArray(tools)


class Player {
    constructor(money, tool = [], letters) {
        this.money = money
        this.tool = tools.splice(0,5)
        this.letters = []
    }
    loopArray(){
        let result = []
        this.tool.forEach(function(tool){
            result.push(`<span>${tool.name}</span>
            `)
        })
        return result

    }
    // holding(){
    //     let result = []
    //     let next = []
    //     this.tool.forEach(function(tool){
    //         result.push(`<span>${tool.name}</span>
    //         `)
    //     })
    //     return result

    // }
    resetPlayerData() {
        this.letters = this.letters
        this.money = 0
        this.tool = ''
        
    }
    nextTool(tools) {
        this.tool = tools.splice(0,5)
        this.letters = this.letters
        
    }
    excludeEmpty(letters) {
        if (this.letters.length > 0){
            this.letters
        } 
    }
}
const player = new Player(0)
const startGame = () => {
    // initialize a new player
    // automatically give player the new tool
    player.nextTool(tools)
    // alert('the game has started');
    // alerts are annoying - let's use a simple div and update the innerHTML as needed
    message('the game has started');
    renderStore();
};

const message = (newMessage) => {

    
    document.querySelector('.messages').innerHTML = `
     <h5>${newMessage}</h5>
     <h6>Current Hand:<span id="letter">${player.loopArray().join(' ')}</span></h6>
     <h6>Current Points:<span>${player.tool.earnings}</span></h6>
     <h6>Player Bank Account: <span>${player.money}</span></h6>
     <h6>Player Cards: <span>${player.letters}</span></h6>
     `
}

const renderStore = () => {
    const store = document.querySelector('.store')
    // Let me see if there are even any tools to select
    if (tools.length > 0) {
        store.innerHTML = `
          <h5>Item available for purchase</h5>
          <h6>${tools[0].name}</h6>
          <h6> Purchase price: ${tools[0].purchasePrice}</h6>
         `
        // Do I add the button or not
        store.innerHTML += (player.money >= tools[0].purchasePrice) ? `<button class="purchase">Purchase</button>` : `<h6>You can't afford this yet</h6>`
        const purchaseBtn = document.querySelector('.purchase')
        if (purchaseBtn) {
            purchaseBtn.addEventListener('click', (evt) => {
                player.nextTool(tools)
                player.money -= player.tool.purchasePrice
                player.letters += player.tool.name
                renderStore()
                message(`You have picked a new ${player.tool.name}
                `)
            })
        }
    } else {
        store.innerHTML = `
         <h5>You are a boss you got all the juice now</h5>
         `
    }


}

const landscape = (evt) => {
    player.money += player.tool.earnings
    if (player.money >= 1000 && player.tool.name === 'starving students') {
        message('You have won the game')
        evt.target.remove()
    } else {
        message('You are working so hard you make all of us proud')
        renderStore()
    }
}

startGame()
const landscapeBtn = document.querySelector('.landscape')
landscapeBtn.addEventListener('click', landscape)