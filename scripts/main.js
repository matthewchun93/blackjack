var playerPoints = document.getElementById('player-points')
var dealerPoints = document.getElementById('dealer-points')
var messageBox = document.getElementById('messages');
var dealButton = document.getElementById('deal-button');
var hitButton = document.getElementById('hit-button');
var standButton = document.getElementById('stand-button');
var againButton = document.getElementById('again-button');

var gameStarted = false,
dealerCards = [],
playerCards = [],
dealerScore = 0,
playerScore = 0,
deck = [];

againButton.style.visibility = 'hidden';
hitButton.style.visibility = 'hidden';
standButton.style.visibility = 'hidden';

dealButton.addEventListener('click', (e)=>{
  hitButton.style.visibility = 'visible';
  standButton.style.visibility = 'visible';
  againButton.style.visibility = 'visible'
  dealButton.style.visibility = 'hidden';
  deck = newDeck();
  fullDeck = matchCards(deck);
  shuffleDeck = shuffleArray(fullDeck);

  dealCard(dealerCards, "dealer-hand");
  dealCard(playerCards, "player-hand");
  dealCard(dealerCards, "dealer-hand");
  dealCard(playerCards, "player-hand");
  updateScores()
})

hitButton.addEventListener('click', (e)=>{
  dealCard(playerCards, "player-hand");
  updateScores()
  if (playerScore > 21) {
    gameOverButtons()
    messageBox.innerHTML = "You lose!";
  }
})

standButton.addEventListener('click', (e)=>{
  if (dealerScore > playerScore) {
    gameOverButtons()
    messageBox.innerHTML = "You lose!";
  }

  while (getScore(dealerCards) < 17) {
    dealCard(dealerCards, "dealer-hand");
    updateScores()
  }

  if (dealerScore > 21) {
    gameOverButtons()
    messageBox.innerHTML = "You win!";
  } else if (playerScore > 21) {
    gameOverButtons()
    messageBox.innerHTML = "You lose!";
  } else {

    if (dealerScore > playerScore) {
      gameOverButtons()
      messageBox.innerHTML = "You lose!";
    } else if (playerScore === dealerScore) {
      gameOverButtons()
      messageBox.innerHTML = "Draw!";
    } else if (dealerScore < playerScore) {
      gameOverButtons()
      messageBox.innerHTML = "You win!";
    } 
  }
})

againButton.addEventListener('click', (e)=>{
  hitButton.style.visibility = 'hidden';
  standButton.style.visibility = 'hidden';
  dealButton.style.visibility = 'visible';
  againButton.style.visibility = 'hidden'
  purgeTable()
  gameStarted = false;
  gameOver = false;
  dealerCards = [];
  playerCards = [];
  dealerScore = 0;
  playerScore = 0;
  deck = [];
  messageBox.innerHTML = "Let's play a blackjack game"
  updateScores();
})

function gameOverButtons() {
  hitButton.style.visibility = 'hidden'
  dealButton.style.visibility = 'hidden'
  standButton.style.visibility = 'hidden'
  againButton.style.visibility = 'visible'
}

function newDeck() {  
  var cards = [];   
  for (var i = 1; i <= 13; i++) {  
    cards.push({point: i, suit: 'spades'});
    cards.push({point: i, suit: 'hearts'});
    cards.push({point: i, suit: 'clubs'});
    cards.push({point: i, suit: 'diamonds'});
  }
  return cards;
}

function matchCards(cards) {
  var deckTemp = []
  var cardName;
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].point === 1) {
      cardName = 'ace';
    } else if (cards[i].point === 11) {
      cardName = 'jack';
    } else if (cards[i].point === 12) {
      cardName = 'queen';
    } else if (cards[i].point === 13) {
      cardName = 'king';
    } else {
      cardName = cards[i].point;
    }
    deckTemp.push({point: cards[i].point, id:'images/' + cardName + '_of_' + cards[i].suit + '.png'})
  }
  return deckTemp;
}

function dealCard(hand, element) {
  card = shuffleDeck.pop();
  hand.push(card);

  var img = document.createElement("img");

  img.src = card.id;

  var src = document.getElementById(element);

  src.appendChild(img)
}

function calculatePoints(card, sum) {
  var point = card.point;
  if (point > 10) {
    point = 10;
  }
  if (point === 1 && sum < 11) {
    point = 11;
  }
  return point;
}

function getScore(hand){
  var score = 0;
  var hasAce = false;
  for(var i = 0; i < hand.length; i++){
    let card = hand[i];
    score += calculatePoints(card, score);
    if(card.value == 'Ace'){
      hasAce = true;
    }
    if(hasAce && score + 10 <= 21){
      return score + 10;
    }
  }
  return score; 
}

function updateScores(){
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards); 
  dealerPoints.innerHTML = dealerScore
  playerPoints.innerHTML = playerScore
}

function purgeTable() {
  var cardImgs = document.getElementsByTagName('img')
  var cardTotal = playerCards.length + dealerCards.length
  for (var i = 0; i < cardTotal; i++) {
    cardImgs[0].parentNode.removeChild(cardImgs[0]);
  }
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
} 
