let conteiner = document.querySelector('.conteiner');
conteiner.style.maxWidth = '750px';
conteiner.style.margin = 'auto';
conteiner.style.paddingTop = '50px';

let body = document.querySelector('body');
body.style.fontSize = '16px';
body.style.fontFamily = 'Roboto, sans-serif';
body.style.lineHeight = '1.6em';
body.style.background = '#f1f1f1';
body.style.color = '#0f141e';

let navbar = document.createElement('nav');

navbar.className = 'navbar';
navbar.style.position = 'fixed';
navbar.style.top = '0';
navbar.style.left = '0';
navbar.style.right = '0';
navbar.style.zIndex = '2';
navbar.style.background = 'lightcoral';
navbar.style.marginBottom = '10px';

conteiner.appendChild(navbar);

let links = document.createElement('ul');

links.style.listStyle = 'none';
links.style.margin = '0';
links.style.padding = '0';
links.style.display = 'flex';
links.style.padding = '0 20px';

navbar.appendChild(links);

const objLinks = {
    Youtube: 'https://youtube.com',
    Google: "https://google.com",
    Yndex: "https://yandex.ru",
    HTML: "https://developer.mozilla.org/ru/docs/Learn/HTML",
    Контакты: "#conect"
};

for (let key in objLinks) {
    let link = document.createElement('li');
    let linkText = document.createElement('a');
    linkText.href = objLinks[key];
    linkText.textContent = key;
    link.style.marginRight = '10px';
    link.style.padding = '10px';

    link.addEventListener('mouseover', function() {
        link.style.background = '#ea6767';
    });

    link.addEventListener('mouseout', function() {
        link.style.background = 'none';
    });

    link.appendChild(linkText);
    links.appendChild(link);
}

let info = document.createElement('div');
info.className = 'info';
info.style.marginBottom = '20px';
info.style.display = 'flex';

conteiner.appendChild(info);

let avatar = document.createElement('img');
avatar.src = 'avatar1.jpg';
avatar.alt = 'it';
avatar.className = 'avatar';
avatar.style.width = '200px';
// avatar.style.height = '202px';
avatar.style.borderRadius = '28px';
avatar.style.boxShadow = '4px 4px 14px rgba(0, 0, 0, .25)';

info.appendChild(avatar);

let infoText = document.createElement('div');
infoText.className = 'info-text';
infoText.style.marginLeft = '40px';

// info.appendChild(infoText);

infoText.innerHTML = '<h1>Вадим Каменщиков</h1>\
<p>Я живу в городе <strong>Минске</strong>. Изучаю <strong>программирование и работаю</strong>.</p>\
<p>Мне <em>нравится кататься на велосипеде</em> и тд.</p>\
<h4>Список ссылок</h4>\
<a href="https://youtube.com" target="_blank">Youtube</a>\
                #\
                <a href="https://google.com" target="_blank">Google</a>\
                #\
                <a href="https://yandex.ru" target="_blank">Yandex</a>';

info.appendChild(infoText);
let aboutMe = document.querySelectorAll('p');

for (let about of aboutMe) {
    about.style.color = '#86898f';
    about.style.fontStyle = 'italic';
    about.style.fontWeight = 'bold';
    about.style. margin = '0';
}
// info.appendChild(infoText);
let aboutMeLinks= document.querySelector('h4');
aboutMeLinks.style.marginBottom = '10px';

let linksTrue = document.querySelectorAll('a');

for (let l of linksTrue) {
    l.style.color = '#000';
    l.style.textDecoration = 'none';
}

let linkOver = document.querySelectorAll('a');

for (let l of linkOver) {

    l.addEventListener('mouseover', function() {
        l.style.textDecoration = 'underline';
    });

    l.addEventListener('mouseout', function() {
        l.style.textDecoration = 'none';
    });

    l.addEventListener('click', function() {
        l.style.color = 'grey';
    });
}

let cardBgYellow = document.createElement('div');

cardBgYellow.className = 'card bg-yellow';
cardBgYellow.style.border = '1px solid black';
cardBgYellow.style.borderRadius = '20px';
cardBgYellow.style.padding = '15px 20px';
cardBgYellow.style.marginBottom = '20px';
cardBgYellow.style.background = '#fff9dc';

conteiner.appendChild(cardBgYellow);

let myHobby = document.createElement('h2');

myHobby.textContent = 'Мои хобби';
myHobby.style.marginBottom = '10px';

cardBgYellow.appendChild(myHobby);

let listHobby = document.createElement('ol');

listHobby.className = 'list';
listHobby.style.padding = '0 20px';

cardBgYellow.appendChild(listHobby);

const hobbyS = ['Велосипед', 'Программирование', 'Хоккей', 'Плавание'];

for ( let i = 0; i < hobbyS.length; i++) {
    let hobby = document.createElement('li');
    hobby.textContent = hobbyS[i];
    hobby.style.color = '#86898f';
    hobby.style.marginBottom = '10px';
    hobby.style.borderBottom = '1px solid #ccc';
    listHobby.appendChild(hobby);
}

let exWork = document.createElement('div');

exWork.className = 'card bg-red';
exWork.style.border = '1px solid black';
exWork.style.borderRadius = '20px';
exWork.style.padding = '15px 20px';
exWork.style.maarginBottom = '20px';
exWork.style.background = '#ffe5e5';

conteiner.appendChild(exWork);

let exWorkCh = document.createElement('h2');

exWorkCh.style.marginBottom = '10px';
exWorkCh.textContent = 'Опыт работы';

exWork.appendChild(exWorkCh);

let workTable = document.createElement('table');

workTable.className = 'table';
workTable.style.width = '100%';

exWork.appendChild(workTable);

let arrWorkHead = ['Название', 'Должность', 'Год'];

let workHead = document.createElement('thead');

let workHeadTr = document.createElement('tr');

for (let i = 0; i < arrWorkHead.length; i++) {
    let th = document.createElement('th');
    th.textContent = arrWorkHead[i];
    th.style.paddingBottom = '10px';
    workHeadTr.appendChild(th);
}

workHead.appendChild(workHeadTr);

workTable.appendChild(workHead);

let tableWork = [
    {name: 'ИнсервисСтрой', who: 'Арматурщик', year: '2009-2010'},
    {name: 'МонолитТрансСтрой', who: 'Арматурщик', year: '2010'},
    {name: 'АДС-2000', who: 'Арматурщик', year: '2010-2012'},
    {name: 'ИнсервисСтрой', who: 'Арматурщик', year: '2009-2010'},
    {name: 'ТримифИнжСтрой', who: 'Арматурщик', year: '2010-2022'}
];

let workBody = document.createElement('tbody');

for (let tableWorkObj = 0; tableWorkObj < tableWork.length; tableWorkObj++) {
    let tr = document.createElement('tr');

    for (let key in tableWork[tableWorkObj]) {
        let td = document.createElement('td');
        td.textContent = tableWork[tableWorkObj][key];
        td.style.paddingBottom = '10px';
        
        if (key == 'who' || key == 'year') {
            td.style.color = '#86898f';
        }
        tr.appendChild(td);
    }

    workBody.appendChild(tr);
}

workTable.appendChild(workBody);

let form = document.createElement('form');

form.className = 'form';

conteiner.appendChild(form);

let conect = document.createElement('h2');

conect.id = 'conect';
conect.textContent = 'Связаться со мной';
conect.style.textAlign = 'center';

form.appendChild(conect);

let formRow = document.createElement('div');

formRow.className = 'form-row';
formRow.style.marginBottom = '10px';
formRow.style.display = 'flex';

form.appendChild(formRow);

let arrFormGroup = [
    {for: 'name', type: 'text', id: 'name', placeholder: 'Введите имя'},
    {for: 'email', type: 'email', id: 'email', placeholder: 'Введите email'},
    {for: 'message', cols: '20', rows: '5', id: 'message', placeholder: 'Введите сообщение'}
];

function s(h) {
    h.style.width = '100%';
    h.style.boxSizing = 'border-box';
    h.style.border = 'none';
    h.style.background = 'transparent';
    h.style.borderBottom = '1px solid #ccc';
    h.style.color = '#000';
    h.style.padding = '15px 0 10px';
    h.style.outline = 'none';
    h.style.fontFamily = 'inherit';
}

for (let arrFormGroupObj = 0; arrFormGroupObj < arrFormGroup.length; arrFormGroupObj++) {
    let formGroup = document.createElement('div');
    formGroup.className = 'form-group';
    
    let labelName;
    let textArea;
    let inputName;

    

    if (arrFormGroupObj <= 1) {
        labelName = document.createElement('label');
        inputName = document.createElement('input');

        formGroup.style.marginRight = '20px';
        formGroup.style.width = '50%';
    
        for (let key in arrFormGroup[arrFormGroupObj]) {
            
            if (key == 'for') {
                labelName[key] = arrFormGroup[arrFormGroupObj][key];
            }
            else {
                inputName[key] = arrFormGroup[arrFormGroupObj][key];
            }       
        }
        s(inputName);
        formGroup.appendChild(labelName);
        formGroup.appendChild(inputName);
        formRow.appendChild(formGroup);
    }
    else {
        labelName = document.createElement('label');
        textArea = document.createElement('textarea');

        for (let key in arrFormGroup[arrFormGroupObj]) {
            textArea[key] = arrFormGroup[arrFormGroupObj][key];
        }
        s(textArea);
        formGroup.appendChild(labelName);
        formGroup.appendChild(textArea);
        form.appendChild(formGroup);
    }

    labelName.style.display = 'block';
    labelName.style.fontSize = '14px';
    labelName.style.color = '#86898f';
}

let labelNameT = document.querySelector("body > div > form > div > div:nth-child(1) > label");
let labelNameE = document.querySelector("body > div > form > div > div:nth-child(2) > label");
let labelNameM = document.querySelector("body > div > form > div.form-group > label");

labelNameT.textContent = 'Ваше имя';
labelNameE.textContent = 'Ваше email';
labelNameM.textContent = 'Ваше сообщение';

let inputButton = document.createElement('input');

inputButton.className = 'btn';
inputButton.type = 'submit';
inputButton.value = 'Отправить!';

inputButton.addEventListener('mouseover', function() {
	inputButton.style.opacity = '0.8';
});

inputButton.addEventListener('mouseout', function() {
	inputButton.style.opacity = '1';
});

inputButton.style.background = '#111';
inputButton.style.padding = '15px 20px';
inputButton.style.color = '#fff';
inputButton.style.border = 'none';
inputButton.style.fontFamily = 'inherit';
inputButton.style.cursor = 'pointer';

form.appendChild(inputButton);

function myFunction(x) {
    if (x.matches) { 
        // document.body.style.backgroundColor = "yellow";
        info.style.display = 'block';
        info.style.textAlign = 'center';
        navbar.style.display = 'block';
        formRow.style.display = 'block';
        let r = document.querySelectorAll(".form-row div");
        for (let rt of r) {
            rt.style.width = '100%';
            rt.style.marginBottom = '10px';
            rt.style.marginRight = '0';
        }
        let link = document.querySelectorAll(".navbar ul li");
        for (let l of link) {
            l.style.marginRight = '0';
            l.style.width = '100%';
            l.style.marginBottom = '10px';
            l.style.fontSize = '12px';
        }
    } 
    else {
        // document.body.style.backgroundColor = "pink";
        info.style.display = 'flex';
        info.style.textAlign = 'left';
        navbar.style.display = 'inline';
        formRow.style.display = 'flex';
        let r = document.querySelectorAll(".form-row div");
        for (let rt of r) {
            rt.style.width = '50%';
            rt.style.marginBottom = '0';
            rt.style.marginRight = '20px';
        }
        let link = document.querySelectorAll(".navbar ul li");
        for (let l of link) {
            l.style.marginRight = '10px';
            l.style.width = '58.5469px';
            l.style.marginBottom = '0';
            l.style.fontSize = '16px';
        }
    }
}
  
const x = window.matchMedia("(max-width: 742px)")

x.addEventListener('change', myFunction);
myFunction(x);