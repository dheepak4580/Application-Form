var phone = document.getElementById('phone');
var form = document.getElementById('form');
var country = document.getElementById('Cc');
// var India = country.children[0];
// var otherCountries = country.children[1];


phone.oninput = function(event){
	event.target.setCustomValidity("");
	if(!event.target.validity.valid){
		event.target.setCustomValidity('Phone number should start with a number from 6 to 9 and it should consist of 10 numbers in total');
	}
}	
	


// India.value= "+" + India.value;
// otherCountries.value = "+" + otherCountries.value;



// var pguniv = document.getElementById("University or Board of Educationpg");
// console.log(pguniv.children);
// console.log(pguniv.value);

// pguniv.oninput= function(){
// 	// pguniv.value = "+" + pguniv;
// 	console.log(pguniv.value);
// }

// country.oninput = () => {
// 	country.value= "+" + country.value;
// 	console.log(country.value);
// }

// var elem 				= document.createElement('div');
//  	elem.id  			='notify';
//  	elem.style.diplay	='none';
//     form.appendChild(elem);

/*input.addEventListener('input',function(event){
	

	event.preventDefault();
	if( event.target.validity === 'invalid'){
		event.target.setCustomValidity('Phone number should start with a number 6 to 9 and consist of 10 numbers in total.');
		console.log(event.target.CustomValidity);
	}
});
*/
// input.oninput = function(event){
// 	event.target.setCustomValidity(" ");
// }


// input.addEventListener('input',function(event){
// 	if( event.target.validity === 'valid'){
// 		event.target.setCustomValidity('');
// }
// });
