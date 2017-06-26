
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardElement;
var cardsInPlay = [];
var checkForMatch = function (){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

var flipCard = function (){
	cardId = this.getAttribute('data-id');
	this.setAttribute('src',cards[cardId].cardImage);
	console.log ("User flipped " + cards[cardId].rank);
	console.log (cards[cardId].cardImage);
	console.log (cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2)
	{checkForMatch();}	
};

var createBoard = function (){
	for (var i = 0; i < 4;i++){
		cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);

		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement)
	}
}
createBoard();

