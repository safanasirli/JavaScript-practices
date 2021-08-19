const container = document.querySelector(".container");
//console.log(container)

const h1 = document.createElement("h1");
h1.innerText = "Hogwarts School of Witchcraft And Wizardry";
container.appendChild(h1);

const h2 = document.createElement("h2");
h2.innerText = "🧙🏻‍♀️ Safa Nasirli";
container.appendChild(h2);

const h3 = document.createElement("h3");
h3.innerText = "Gryffindor";
container.appendChild(h3);

const h4 = document.createElement("h4");
h4.classList.add("cat");
h4.innerText = "🐈 Salazar";
container.appendChild(h4);

const secondh4 = document.createElement("h4");
secondh4.innerText = "Elder Wand";
container.appendChild(secondh4);

const ul = document.createElement("ul");
ul.setAttribute("storage", "trunk");
container.appendChild(ul);

//In order not to write the same lines of code over and over, I used a function which creates, adds text and appends list items to the parent element(ul).
const createList = (text) => {
    const li = document.createElement('li');
    li.innerText = text
    ul.appendChild(li)
}

createList('butter beer')
createList('invisibility cloak')
createList('time turner')
createList('leash')
createList('Bertie Bott\'s Every Flavor [Jelly] Beans');
document.querySelectorAll('li')[1].classList = 'secret';
document.querySelectorAll('li')[2].classList = 'secret';
document.querySelectorAll('li')[3].classList = 'cat';

const h5 = document.createElement("h5");
h5.innerText = "Spring 2021";
container.append(h5);

const table = document.createElement("table");
container.appendChild(table);

const thead = document.createElement("thead");
table.appendChild(thead);

const tr1 = document.createElement("tr");
thead.appendChild(tr1);

const th1 = document.createElement("th");
th1.innerText = "Day";
tr1.appendChild(th1);

const th2 = document.createElement("th");
th2.innerText = "Classes";
tr1.appendChild(th2);

const createTable = (day, classes) => {
    const tr = document.createElement("tr");
    thead.appendChild(tr);
    const td1 = document.createElement("td");
    td1.innerText = day;
    tr.appendChild(td1);
    const td2 = document.createElement("td");
    td2.innerText = classes;
    tr.appendChild(td2);
};

createTable("Monday", "Herbology and Divination");
createTable("Tuesday", "History of Magic and Charms");
createTable("Wednesday", "Potions and Transfiguration");
createTable("Thursday", "Defense Against the Dark Arts and Quidditch practice");
createTable("Friday", "Transfiguration and Defense Against the Dark Arts ");

document.querySelectorAll("h4")[1].remove();
ul.firstChild.remove();
secondh4.innerText = " 🪄 Fir Wood Wand with Dragon Heartstring Core";
container.insertBefore(secondh4, ul);
secondh4.style.color = "white";
h4.style.display = "none";
h4.style.display = "block";

//Year 6
document.getElementsByClassName("secret")[0].style.display = "none";
document.getElementsByClassName("secret")[1].style.display = "none";
document.getElementsByClassName("secret")[0].style.display = "block";
document.getElementsByClassName("secret")[1].style.display = "block";
document.getElementsByClassName("cat")[1].classList.add("cabbage");
document.getElementsByClassName("cat")[1].classList.remove("cabbage");
//document.querySelectorAll('li')[3].classList.remove("cabbage");

//Year 7
h5.innerText = "Fall 2021";
const newLi = document.createElement('li');
newLi.innerText = 'Butter beer';
ul.prepend(newLi)
ul.setAttribute("storage", "chest");
