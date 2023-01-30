const header = document.querySelector('#header');
const image = document.querySelector('#image');
const question = document.querySelector('#question');
const link = document.querySelector('#link');
const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');

btnOne.addEventListener('click', fine);
function fine () {
    btnOne.removeEventListener('click', fine);
    btnTwo.removeEventListener('click', alright);

    moveButtons ();
    question.textContent = 'Хочется поразмышлять?'
    btnOne.textContent = 'Да';
    btnOne.addEventListener('click', think);

    btnTwo.textContent = 'Нет';
    btnTwo.addEventListener('click', notToThink);
};

function think () {
    btnOne.removeEventListener('click', think);
    btnTwo.removeEventListener('click', notToThink);

    header.textContent = 'Ваша книга';
    image.src = "https://cdn.glitch.me/4fd356b1-0ccc-4820-9849-6a169c784a3d%2Fcover_TheCathcer.jpg?v=1637430738067";
    image.classList.add('bookCover');
    question.textContent = 'Над пропастью во ржи';
    link.style.visibility= 'initial';
    link.href = "https://pstnv-favourite-books.glitch.me/page_TheCatcher.html";

    btnOne.textContent = 'В начало';
    btnOne.addEventListener('click', pageReload);
    btnTwo.style.display = 'none';
};

function pageReload () {
    document.location.reload();
}

function notToThink () {
    btnOne.removeEventListener('click', think);
    btnTwo.removeEventListener('click', notToThink);

    header.textContent = 'Ваша книга';
    image.src = "https://cdn.glitch.me/4fd356b1-0ccc-4820-9849-6a169c784a3d%2Fcover_Outlander.jpg?v=1637429769526";
    image.classList.add('bookCover');
    question.textContent = 'Чужестранка';
    link.style.visibility= 'initial';
    link.href = "https://pstnv-favourite-books.glitch.me/page_Outlander.html";

    btnOne.textContent = 'В начало';
    btnOne.addEventListener('click', pageReload);
    btnTwo.style.display = 'none';
};

btnTwo.addEventListener('click', alright);
function alright () {
    btnOne.removeEventListener('click', fine);
    btnTwo.removeEventListener('click', alright);

    moveButtons ();
    question.textContent = 'Поднять настроение?'
    btnOne.textContent = 'Да';
    btnOne.addEventListener('click', cheerUp);

    btnTwo.textContent = 'Нет';
    btnTwo.addEventListener('click', stay);
};

function cheerUp () {
    btnOne.removeEventListener('click', cheerUp);
    btnTwo.removeEventListener('click', stay);
    
    moveButtons ();
    question.textContent = 'Любовь или приключения?'
    btnOne.textContent = 'Любовь';
    btnOne.addEventListener('click', love);

    btnTwo.textContent = 'Приключения';
    btnTwo.addEventListener('click', adventure);
};

function love () {
    btnOne.removeEventListener('click', love);
    btnTwo.removeEventListener('click', adventure);

    header.textContent = 'Ваша книга';
    image.src = "https://cdn.glitch.me/4fd356b1-0ccc-4820-9849-6a169c784a3d%2Fcover_Pride.jpeg?v=1637429004142";
    image.classList.add('bookCover');
    question.textContent = 'Гордость и предубеждение';
    link.style.visibility= 'initial';
    link.href = "https://pstnv-favourite-books.glitch.me/page_Pride.html";

    btnOne.textContent = 'В начало';
    btnOne.addEventListener('click', pageReload);
    btnTwo.style.display = 'none';
};

function adventure () {
    btnOne.removeEventListener('click', love);
    btnTwo.removeEventListener('click', adventure);

    header.textContent = 'Ваша книга';
    image.src = "https://cdn.glitch.me/4fd356b1-0ccc-4820-9849-6a169c784a3d%2Fcover_WhiteFang.jpg?v=1637345483417";
    image.classList.add('bookCover');
    question.textContent = 'Белый клык';
    link.style.visibility= 'initial';
    link.href = "https://pstnv-favourite-books.glitch.me/page_WhiteFang.html";

    btnOne.textContent = 'В начало';
    btnOne.addEventListener('click', pageReload);
    btnTwo.style.display = 'none';
};


function stay () {
    btnOne.removeEventListener('click', cheerUp);
    btnTwo.removeEventListener('click', stay);
    
    moveButtons ();
    question.textContent = 'Реальность или фантазия?'
    btnOne.textContent = 'Реальность';
    btnOne.addEventListener('click', reality);

    btnTwo.textContent = 'Фантазия';
    btnTwo.addEventListener('click', fantasy);
};

function reality () {
    btnOne.removeEventListener('click', reality);
    btnTwo.removeEventListener('click', fantasy);
    
    header.textContent = 'Ваша книга';
    image.src = "https://cdn.glitch.me/4fd356b1-0ccc-4820-9849-6a169c784a3d%2Fcover_MartinEden.jpg?v=1637427470895";
    image.classList.add('bookCover');
    question.textContent = 'Мартин Иден';
    link.style.visibility= 'initial';
    link.href = "https://pstnv-favourite-books.glitch.me/page_MartinEden.html";

    btnOne.textContent = 'В начало';
    btnOne.addEventListener('click', pageReload);
    btnTwo.style.display = 'none';
};

function fantasy () {
    btnOne.removeEventListener('click', reality);
    btnTwo.removeEventListener('click', fantasy);

    header.textContent = 'Ваша книга';
    image.src = "https://cdn.glitch.me/4fd356b1-0ccc-4820-9849-6a169c784a3d%2Fcover_GoT.png?v=1637430404340";
    image.classList.add('bookCover');
    question.textContent = 'Песнь Льда и Огня';
    link.style.visibility= 'initial';
    link.href = "https://pstnv-favourite-books.glitch.me/page_GoT.html";

    btnOne.textContent = 'В начало';
    btnOne.addEventListener('click', pageReload);
    btnTwo.style.display = 'none';
};

function moveButtons () {
    gsap.from(".left", {
        x: 100,
        opacity: 0,
        duration: .5,
    });
    
    gsap.from(".right", {
        x: -100,
        opacity: 0,
        duration: .5,
    });
};

moveButtons ();