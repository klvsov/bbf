'use strict'

let login = prompt("Введіть ім'я користувача");
console.log(login);

if(login == null){
	alert('Відміна входу');
} else if(login == 'адмін'){

	let password = prompt("Введіть свій пароль");
	
	if(password == null){
		alert('Відміна входу');
	} else if(password == 'темний володар'){
		alert('Ласкаво просимо!');
	} else{
		alert('Пароль не вірний!');
	}

} else{
	alert('Я вас не знаю!');
}