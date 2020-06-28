import { savannaRound } from './savannaGetRoundData';

let count = 0;
let countCorrect = 0;
let answer = false;
let countHealth = 5;
const maxPositionYHiddenWord = 350;
const maxPositionXHiddenWord = 60;

const playSound = (src) => {
    const audio = new Audio(src);
    audio.play();
}

const fallWord = () => {
    const elem = document.querySelector('.savanna__hidden-word');
    const fallSpeed = 15;
    let posY = 0;
    let word = setInterval(fall, fallSpeed);
    function fall() {
        if (posY === maxPositionYHiddenWord || answer) {
            clearInterval(word);
        } else if (posY < maxPositionYHiddenWord) {
            posY += 1;
            elem.style.top = `${posY}px`;
        }
        if (elem.style.top === '340px') {
            countHealth -= 1;
            count += 1;
            if (countHealth === 0) {
                playSound('assets/audio/error.mp3');
                setTimeout(() => savannaShortStatistics(), 500);
                setTimeout(() => playSound('assets/audio/failure.mp3'), 500);
            } else {
                playSound('assets/audio/error.mp3');
                savannaHealth(countHealth);
                setTimeout(() => savannaRound(count), 500);
            }
        }
    }
}

const goOutWord = (correct) => {
    const elem = document.querySelector('.savanna__hidden-word');
    const goOutSpeed = 15;
    let posY = elem.style.top.slice(0, -2);
    let posX = 50;
    setInterval(goOut, goOutSpeed);
    function goOut() {
        if (elem.style.top !== maxPositionYHiddenWord) {
            if (correct) {
                posY -= 10;
                elem.style.top = `${posY}px`; 
            } else {
                while (posX < maxPositionXHiddenWord) {
                    posX += 1;
                    elem.style.left = `${posX}%`; 
                    console.log(elem.style.left);
                }
            }
        }
    }
}

const savannaBullet = () => {
    const bullet = document.querySelector('.savanna__bullet');
    const bulletSpeed = 5;
    let posY = 90;
    setInterval(bullets, bulletSpeed);
    function bullets() {
        posY -= 2;
        bullet.style.top = `${posY}%`;
    }
}

const savannaHealth = (hp) => {
    const health = ['<span><i class="fa fa-heart"></i></span>', '<span><i class="fa fa-heart"></i></span>', '<span><i class="fa fa-heart"></i></span>', '<span><i class="fa fa-heart"></i></span>', '<span><i class="fa fa-heart"></i></span>'];
    // const savannaHealths = document.createElement('div');
    const savannaHealths = document.querySelector('.savanna__health');
    savannaHealths.innerHTML = health.slice(0, hp).join('');
}

const actionForRound = () => {
    const weapon = document.querySelector('.savanna__footer');
    weapon.classList.add('savanna__footer_active');
    setTimeout(() => weapon.classList.remove('savanna__footer_active'), 100);
    answer = true;
    savannaBullet();
    setTimeout(() => answer = false, 500);
}

const savannaShortStatistics = () => {
    const visibleStat = document.querySelector('.savanna__short-statistics');
    const hiddenMainPage = document.querySelector('.savanna__main');
    const error = document.querySelector('.savanna__error');
    const correct = document.querySelector('.savanna__correct');
    const numberStartWords = 10;

    visibleStat.classList.add('savanna-active');
    hiddenMainPage.classList.add('savanna-hidden');
    error.innerHTML = numberStartWords - `${countCorrect}`
    correct.innerHTML = `${countCorrect}`;
}

const savannaGameplayMouse = (data, index) => {
    const clickBtn = document.querySelectorAll('.savanna__choise span');
    const span = document.querySelectorAll('*[data-word]');
    
    clickBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            count += 1;
            if (count < 10) {
                if (elem.innerText === data[index].wordTranslate.toUpperCase()) {
                    span[index].innerHTML = '+';
                    countCorrect += 1;
                    elem.classList.add('correct');
                    actionForRound();
                    playSound('assets/audio/correct.mp3');
                    savannaHealth(countHealth);
                    setTimeout(() => goOutWord(true), 250);
                    setTimeout(() => savannaRound(count), 500);
                } else {
                    countHealth -= 1;
                    if (countHealth === 0) {
                        elem.classList.add('wrong');
                        actionForRound();
                        playSound('assets/audio/error.mp3');
                        goOutWord(false);
                        setTimeout(() => savannaShortStatistics(), 500);
                    } else {
                        savannaHealth(countHealth);
                        elem.classList.add('wrong');
                        actionForRound();
                        playSound('assets/audio/error.mp3');
                        goOutWord(false);
                        setTimeout(() => savannaRound(count), 500);
                    }
                    
                }                
            } else {
                if (elem.innerText === data[index].wordTranslate.toUpperCase()) {
                    elem.classList.add('correct');
                    actionForRound();
                    playSound('assets/audio/correct.mp3');
                    setTimeout(() => goOutWord(true), 250);
                    span[index].innerHTML = '+';
                    countCorrect += 1;
                    setTimeout(() => savannaShortStatistics(), 500);
                } else {
                    elem.classList.add('wrong');
                    actionForRound();
                    playSound('assets/audio/error.mp3');
                    goOutWord(false);
                    setTimeout(() => savannaShortStatistics(), 500);
                }
            }
        })
    })
}

const savannaGameplayKeyboard = () => {
    document.addEventListener('keyup', (event) => {
        event.preventDefault();
        const span = document.querySelectorAll('*[data-word]');
        const hiddenWord = document.querySelector('.savanna__hidden-word');
        count += 1;
        if (count < 10) {
            if (document.getElementById(event.code).innerText === hiddenWord.id.toUpperCase()) {
                document.getElementById(event.code).classList.add('correct');
                actionForRound();
                playSound('assets/audio/correct.mp3');
                setTimeout(() => goOutWord(true), 250);
                span[count - 1].innerHTML = '+';
                countCorrect += 1;
                setTimeout(() => savannaRound(count), 500);
            } else {
                countHealth -= 1;
                if (countHealth === 0) {
                    document.getElementById(event.code).classList.add('wrong');
                    actionForRound();
                    playSound('assets/audio/error.mp3');
                    goOutWord(false);
                    setTimeout(() => savannaShortStatistics(), 500);
                } else {
                    savannaHealth(countHealth);
                    document.getElementById(event.code).classList.add('wrong');
                    actionForRound();
                    playSound('assets/audio/error.mp3');
                    goOutWord(false);
                    setTimeout(() => savannaRound(count), 500);
                }
            }                
        } else {
            if (document.getElementById(event.code).innerText === hiddenWord.id.toUpperCase()) {
                document.getElementById(event.code).classList.add('correct');
                actionForRound();
                playSound('assets/audio/correct.mp3');
                setTimeout(() => goOutWord(true), 250);
                span[count - 1].innerHTML = '+';
                countCorrect += 1;
                setTimeout(() => savannaShortStatistics(), 500);
            } else {
                document.getElementById(event.code).classList.add('wrong');
                actionForRound();
                playSound('assets/audio/error.mp3');
                goOutWord(false);
                setTimeout(() => savannaShortStatistics(), 500);
            }
        }
    })
}

export { countHealth, fallWord, savannaHealth, savannaGameplayMouse, savannaGameplayKeyboard } ;