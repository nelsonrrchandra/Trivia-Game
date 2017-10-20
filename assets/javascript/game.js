$(document).ready(function(){

var gameState= "StartScreen"

var currentQuestion= 0;

var rightAnswers= 0;

var timer= 15;

var timeID;

var question1 = {
	image: "assets/images/image_01.jpg",
	answerA: "Revenge Baby",
	answerB: "Greivance Beach",
	answerC: "Determined Child",
	answerD: "Success Kid",
	correctAnswer: "Success Kid"
}

var question2 = {
	image: "assets/images/image_02.jpg",
	answerA: "Picture Day",
	answerB: "Bad Luck Brian",
	answerC: "Just Smile...",
	answerD: "Awkward Arnold",
	correctAnswer: "Bad Luck Brian"
}

var question3 = {
	image: "assets/images/image_03.jpg",
	answerA: "orly Willy",
	answerB: "Good Friend Willy",
	answerC: "Pedo Wonka",
	answerD: "Condecending Wonka",
	correctAnswer: "Condecending Wonka"
}

var question4 = {
	image: "assets/images/image_04.jpg",
	answerA: "Troll Face",
	answerB: "Laughing Pete",
	answerC: "Not My Problem",
	answerD: "Troll Mask",
	correctAnswer: "Troll Face"
}

var question5 = {
	image: "assets/images/image_05.jpg",
	answerA: "Roll Safe",
	answerB: "Sneaky Advice",
	answerC: "Mindful Mike",
	answerD: "Too Clever",
	correctAnswer: "Roll Safe"
}

var question6 = {
	image: "assets/images/image_06.jpg",
	answerA: "Sad Day",
	answerB: "Deprssed Dean",
	answerC: "Pepe The Frog",
	answerD: "No Happy Harry",
	correctAnswer: "Pepe The Frog"
}

var question7 = {
	image: "assets/images/image_07.jpg",
	answerA: "Irritated Ursa",
	answerB: "Depression Bear",
	answerC: "Confession Bear",
	answerD: "Chill Henry",
	correctAnswer: "Confession Bear"
}

var question8 = {
	image: "assets/images/image_08.jpg",
	answerA: "Me Gusta",
	answerB: "What Did I Just Smell?",
	answerC: "Screams Internally",
	answerD: "Disgust Face",
	correctAnswer: "Me Gusta"
}

var question9 = {
	image: "assets/images/image_09.jpg",
	answerA: "Did You Just?",
	answerB: "Condecending Meghan",
	answerC: "Awkward Car Ride",
	answerD: "Side Eyeing Chloe",
	correctAnswer: "Side Eyeing Chloe"
}

var question10 = {
	image: "assets/images/image_10.gif",
	answerA: "Clarification Frog",
	answerB: "Uniciycle Frog",
	answerC: "Dat Boi",
	answerD: "Banana Is My Favorite Color",
	correctAnswer: "Dat Boi"
}

var questionList = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

$("#bigButton").on("click", clickBigButton)
$("#answerA").on("click", clickAnswer);
$("#answerB").on("click", clickAnswer);
$("#answerC").on("click", clickAnswer);
$("#answerD").on("click", clickAnswer);

function clickBigButton(event){
	if (gameState=="end"){
		gameState= "StartScreen"
		currentQuestion= 0;
		rightAnswers= 0;
		timer= 15;

		$("#bigButton").text("START");
		$("#textDisp").text("Think you know your memes? See if you can name these memes before time runs out!");
	}

	if (currentQuestion<10){
		displayQuestion();
	}
	else{
		$("#imageDisp").html("<img id='memeImage'src='assets/images/image_00.jpg'>")
		$("#answerA").empty();
		$("#answerB").empty();
		$("#answerC").empty();
		$("#answerD").empty();
		$("#imageDisp").empty();
		$("#textDisp").text("You correctly Identified "+rightAnswers+" out of 10 memes.");
		$("#bigButton").text("Try Again?");
		gameState="end";
	}

}

function clickAnswer (){
		if ($(this).text()==questionList[currentQuestion].correctAnswer){
			gameState= "correct";
			$("#textDisp").text("That's right! This meme is called "+questionList[currentQuestion].correctAnswer+".");
			rightAnswers++;
		}
		else{
			gameState= "incorrect"
			$("#textDisp").text("Nope, that's not it! The correct answer was "+questionList[currentQuestion].correctAnswer+".");
		}

		stopTimer();
		$("timerDisp").empty();
		$("#answerA").empty();
		$("#answerB").empty();
		$("#answerC").empty();
		$("#answerD").empty();
		$("#bigButton").text("continue");
		currentQuestion++;
}

function displayQuestion (){
	countdown();
	$("#bigButton").empty();
	$("#textDisp").empty();
	$("#imageDisp").html("<img id='memeImage'src="+questionList[currentQuestion].image+">");
	$("#answerA").text(questionList[currentQuestion].answerA);
	$("#answerB").text(questionList[currentQuestion].answerB);
	$("#answerC").text(questionList[currentQuestion].answerC);
	$("#answerD").text(questionList[currentQuestion].answerD);
}

function countdown(){
	timer=15;
	$("#timerDisp").text(timer+ " seconds left...");
	timeID = setInterval(increment, 1000);
}

function increment (){
	timer--
	$("#timerDisp").text(timer+ " seconds left...");

	if (timer<0){
		stopTimer();
		gameState= "incorrect"
		$("#textDisp").text("Out of time! The correct answer was "+questionList[currentQuestion].correctAnswer+".");
		$("#answerA").empty();
		$("#answerB").empty();
		$("#answerC").empty();
		$("#answerD").empty();
		$("#bigButton").text("continue");
		currentQuestion++;
	}
}

function stopTimer (){
	$("#timerDisp").empty();
	clearInterval(timeID);
	time=15;
}

//////////////////////////end
});