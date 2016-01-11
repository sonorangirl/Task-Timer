$(document).ready(function() {

	//Add tasks to list
	$('#add-task').click(function() {
    
		var addTask = $('input[name=taskItem]').val();
    
		event.preventDefault();
		$('.task-list').append('<li class="item">' + addTask + '</li>');
		$('.task-options').append('<div class="btn-group pull-right" role="group" aria-label="task-options"><button type="button" class="btn btn-default select">select</button><button type="button" class="btn btn-default completed">completed</button><button type="button" class="btn btn-default delete">delete</button></div>');
		//set input field back to nothing
		$('input[name=taskItem]').val("");
	});



	//Task Buttons

	//Get the task associated with its buttons - possible solution - create a variable to get the current index of the div for the buttons - $('.task-options').index(this)
	//use jQuery eq(var) to select the li with the same index (they would be the same, since created at the same time


	// var selectTaskItem = function(options) {

	// 	var indexOfTask = $('.' + options).index(this);

	// 	var selectTask = $('.task-list li').eq(indexOfTask);

	// 	console.log('function working, index of task is ' + indexOfTask);
	
	// }


	//Select task and add to status
	$(".task-options").on("click", ".select", function(){
		
		var indexOfTask = $('.select').index(this);

		var selectTask = $('.task-list li').eq(indexOfTask);

		console.log('function working, index of task is ' + indexOfTask);
		
		var taskName = selectTask.html();

		$('#status-message').html(taskName);

	});
	

	//Show task as completed by striking through task
	$(".task-options").on("click", ".completed", function(){
		
		var indexOfTask = $('.completed').index(this);

		var selectTask = $('.task-list li').eq(indexOfTask);

		console.log('function working, index of task is ' + indexOfTask);
		
		selectTask.css('text-decoration', 'line-through');

	});


    //Delete tasks from list
	$(".task-options").on("click", ".delete", function(){
		
		var indexOfTask = $('.delete').index(this);

		var selectTask = $('.task-list li').eq(indexOfTask);

		console.log('function working, index of task is ' + indexOfTask);
		
		selectTask.remove();

		//select the button group and delete it also

		$(this).parent().remove();

	});



}); // end document.ready








