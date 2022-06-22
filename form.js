var input = document.getElementById('phone');
var form = document.getElementById('form');

var elem 				= document.createElement('div');
 	elem.id  			='notify';
 	elem.style.diplay	='none';
    form.appendChild(elem);

/*input.addEventListener('input',function(event){
	

	event.preventDefault();
	if( event.target.validity === 'invalid'){
		event.target.setCustomValidity('Phone number should start with a number 6 to 9 and consist of 10 numbers in total.');
		console.log(event.target.CustomValidity);
	}
});
*/
input.oninvalid = function(event) {
    event.target.setCustomValidity('Phone number should start with a number from 6 to 9 and it should consist of 10 numbers in total');
}