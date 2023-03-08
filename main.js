let img = document.querySelector('img');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    if (img.getAttribute('src') == 'img/off.png') {
        img.src = 'img/on.png';
        button.innerHTML = 'off';
        audio("audio/off.mp3").play();
    } else {
        img.src = 'img/off.png';
        button.innerHTML = 'on';
        audio("audio/on.mp3").play();
    }
});
// Play audio
let playOn = () => new Audio("audio/on.mp3").play();
