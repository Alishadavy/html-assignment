

function store()
{
var namee = document.getElementById('name').value;
localStorage.setItem('Name',namee);

var emaill = document.getElementById('email').value;
localStorage.setItem('Email',emaill);

var passs = document.getElementById('password').value;
localStorage.setItem('Password',passs);

var malee = document.getElementById('male');
var femalee = document.getElementById('female');
if(malee.checked){
localStorage.setItem('Gender',malee.value);
}
else{
localStorage.setItem('Gender',femalee.value);
}
var agg = document.getElementById('ag').value;
localStorage.setItem('Age',agg);


}
window.onload=function()
{

	document.getElementById('sessionName').innerHTML = localStorage.getItem('Name');
	document.getElementById('sessionEid').innerHTML = localStorage.getItem('Email');
	document.getElementById('sessionPass').innerHTML = localStorage.getItem('Password');
	document.getElementById('sessionAge').innerHTML = localStorage.getItem('Age');
	document.getElementById('sessionGender').innerHTML = localStorage.getItem('Gender');
	

}

