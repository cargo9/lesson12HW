document.getElementById('container').innerHTML = '<h2>Привіт!</h2>';

document.getElementById('myList').insertAdjacentHTML('beforeend', '<li>Новий пункт</li>');

document.getElementById('myButton').innerHTML = 'Натиснуто!';

const infoDiv = document.getElementById('info');
infoDiv.insertAdjacentHTML('beforebegin', '<p>Новий абзац перед інфоблоком</p>');

document.getElementById('link-container').insertAdjacentHTML('beforeend', '<a href="#">Посилання</a>');