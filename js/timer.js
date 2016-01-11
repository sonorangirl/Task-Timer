
$(document).ready(function() {


////Set Time Buttons////

//breaks
var breakTime = 5;
var breakValue = $('#set-break-time');

var increaseBreak = $('#break-up').click(function() {
	breakTime += 1;
	breakValue.html(breakTime);
});

var decreaseBreak = $('#break-down').click(function() {
	if (breakTime != 1) {
		breakTime -= 1;
		breakValue.html(breakTime);
	}
});

//tasks
var taskTime = 25;
var taskValue = $('#set-task-time');

var increaseTask = $('#task-up').click(function() {
	taskTime += 1;
	taskValue.html(taskTime);
});

var decreaseTask = $('#task-down').click(function() {
	if (taskTime != 1) {
		taskTime -= 1;
		taskValue.html(taskTime);
	}
});



////Timer Functionality////

var minutes;
var seconds;
var isBreak = false;
var engage;
var count;

var currentMin = $('#minutes').html();
var currentSec = $('#seconds').html();

//Adds zeros in front of single digit numbers
function zeros() {

	if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

}

//Plays audio file for the user when timer is completed
var audio = new Audio('interactive_alert_tone.mp3');
// audio.play();

//Check if on a task or a break
function getCurrentTime() {
	
	if (isBreak) {
		count = $('#set-break-time').html();
		$('#status-message').html('Well Done! Take a break!');
	} else {
		count = $('#set-task-time').html();
		$('#status-message').html('Add a task below');
	}

	return parseInt(count, 10);
}

function countdown() {

	count -= 1;

	//Find the current seconds and minutes
	seconds = Math.floor(count%60);
	minutes = Math.floor(count/60);

	//Change html to display new time
	zeros();
	$('#minutes').html(minutes);
	$('#seconds').html(seconds);

	//Change isBreak value
	if (count === 0) {
		audio.play();
		clearInterval(engage);

		if (isBreak) {
			isBreak = false;
		} else {
			isBreak = true;
		}

		count = getCurrentTime() * 60;
		timer();

	}
}

function timer() {
	engage = setInterval(countdown, 1000);
}



////Set Control Buttons////

var start = $('#start').click(function() {
	count = getCurrentTime() * 60;
	timer();
	
	//sets transition duration for border animation equal to count
	$('.clock').css({
        'border-width': '150px',
        'webkit-transition-duration' : count + 's',
        'transition-duration': count + 's'
    });

});

var stop = $('#stop').click(function() {
	clearInterval(engage);
	$('#start').addClass('paused');
	$('#unpaused').removeClass('paused');
	
	//pauses border transition
});

var unpause = $('#unpaused').click(function() {
	seconds = currentSec;
	minutes = currentMin;
	timer();
	$('#start').removeClass('paused');
	$('#unpaused').addClass('paused');
	
	//restarts border transition

});

var reset = $('#reset').click(function() {
	clearInterval(engage);
	count = getCurrentTime() * 60;
	seconds = Math.floor(count%60);
	minutes = Math.floor(count/60);

	//Change html to display new time
	zeros();
	$('#minutes').html(minutes);
	$('#seconds').html(seconds);

	//resets border to original size
});




});












