# Blackjack

The following techniques are used with this project. It is fairly early in my coding development, but it introduced me to many foundational concepts and skills.
* Selecting DOM elements using JavaScript
* Adding event listeners to DOM elements
* Creating new DOM Elements
* Setting DOM element Attributes
* Using template strings
* Loops (and nested loops)
* HTML and CSS

## Step 1: Familiarise yourself with the HTML and JS

## Step 2: Styling the page

## Step 3: Getting cards on the table

## Step 4: Dealing the cards

## Step 5: Adding a "hit me"

## Step 6: Creating a deck

King of Hearts:
```js
{ rank: 13, suit: 'hearts' }
```

4 of Spades:
```js
{ rank: 4, suit: 'spades' }
```

Ace of Diamonds:
```js
{ rank: 1, suit: 'diamonds' }
```

## Step 7: Dealing the deck

  * dealerHand
  * playerHand

## Step 8: Adding images for cards

`images/{rank}_of_{suit}.png`

For example:
* `5_of_hearts.png`
* `ace_of_spades.png`
* `jack_of_diamonds.png`

## Step 9: Render Hands

## Step 10: Shuffle the deck

## Step 11: Calculate points for a hand

```js
const playerHand = [ 
     { rank: 10, suit: 'diamonds' }, 
     { rank: 12, suit: 'spades'} 
];
const playerPoints = calculatePoints(playerHand);
console.log(playerPoints);
// 20
```

```js
const playerHand = [ 
     { rank: 10, suit: 'diamonds' }, 
     { rank: 1, suit: 'clubs'} 
];
const playerPoints = calculatePoints(playerHand);
console.log(playerPoints);
// 21
```

## Step 12: Display points

## Step 13: Display busts

## Step 14: Setup player "stands"

## Step 15: Determine winner

## Step 16: Allow restart game
