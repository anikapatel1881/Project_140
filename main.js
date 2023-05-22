//1. To declare both paddles, the players and the computers paddle:
var paddle2 = 10, paddel1 = 10;

//2. To set the position and size of the paddles:
var paddle1X = 10, paddle1Height = 110;
var paddle2Y = 685, paddle2Height = 70;

//3. To set the score of the game:
var score1 = 0, score2 = 0;

//4. To set the beginning position of the player paddle:
var paddle1Y;

//5. To set the changing score:
var playerscore = 0;
var pcscore = 0;

//6. To set balls x and y to the canavs:
var ball = {
    x:350/2,
    y:480/2,
    r:20,
    dx:3,
    dy:3
}