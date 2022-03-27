function randomGen () {
 let randomNum = (Math.floor(Math.random() * 25))
 alert("Ваше число: " + randomNum)
}


/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');
/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', randomGen)