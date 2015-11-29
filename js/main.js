function askQuestions() {




	//			this is done by select cmd + ? :
		

		// var firstName = prompt('what is your first name?');
		// var lastName = prompt('what is your last name?');

		// // lastName =  parseInt(lastName);



		var faveColor = prompt('what is your favourit colour?').toLowerCase();
		console.log(faveColor);
		if(faveColor == 'red' ||
		faveColor == 'green' ||
		faveColor == 'blue' ||
		faveColor == 'yellow')  
		{
		$('h1').css('color', faveColor);
		}



		if (firstName == 'General' && lastName != 'lastName') {

		console.log("User is a real general!");
		alert('Hello Sir General!');
		$('h2').text('Hello ' + 'Sir. General');

		}





		/*
		if the user's firts name is 'General' and their last name is NOT 'Assembly' 
		then greet the general

		*/







}



// When the page has loaded (this is a js comment)
$(function() {

	// When the user clicks image run askQuestions;
	$('img').on('click', askQuestions);

	//hide all things to start with 
	$('h3').next().hide();

	// when the user clicks on an h3
	$('h3').on('click', function() {

		//hide (or write toggle to reveal or slideToggle) the next element
		$(this).next().slideToggle(5000);

	});
});