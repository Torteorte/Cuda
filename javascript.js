let objectLi = [
    {id: 1, title: "Cuda"},
    {id: 2, title: "Services"},
    {id: 3, title: "Our team"},
    {id: 4, title: "Skills"},
    {id: 5, title: "Portfolio"},
    {id: 6, title: "Poeple about us"},
    {id: 7, title: "Your Message"},
    {id: 8, title: "Contacts"}
]

function createMenu() {
    let menu = document.createElement("ul")

    menu.classList.add("side-menu")
    for (let i = 0; i < objectLi.length ; i++) {
        menu.insertAdjacentHTML('beforeend', `
            <li ${objectLi[i].id}> <a href="#"> ${objectLi[i].title} </a> </li>     
        `)
    }
    document.body.appendChild(menu)
}

createMenu()

let ul = document.querySelector(".side-menu")

ul.onmouseover = function(event) {
    let target = event.target.closest("li")
    if (!target) return
    target.classList.add("selected")
}

ul.onmouseout = function(event) {
    let target = event.target.closest("li")
    if (!target) return
    target.classList.remove("selected")
}

// let header = document.querySelector("header")
// let ourService = document.querySelector(".our-service")
// let ourTeam = document.querySelector(".our-team")
// let ourSkills = document.querySelector(".our-skills")
// let ourPortfolio = document.querySelector(".our-portfolio")
// let feedBack = document.querySelector(".feed-back")
// let formField = document.querySelector(".form-field")
// let footer = document.querySelector("footer")

// let links = [header, ourService, ourTeam, ourSkills, ourPortfolio,
//     feedBack, formField, footer]

let links = [
    document.querySelector("header"),
    document.querySelector(".our-service"),
    document.querySelector(".our-team"),
    document.querySelector(".our-skills"),
    document.querySelector(".our-portfolio"),
    document.querySelector(".feed-back"),
    document.querySelector(".form-field"),
    document.querySelector("footer")
]

let lists = ul.querySelectorAll("li")

for (let i = 0; i < links.length; i++) {
    lists[i].onclick = function() {
        event.preventDefault()
        if (i === links.length-1) {
            links[i].scrollIntoView(false)
        } else {
            links[i].scrollIntoView(top)
        }
    }
}

ul.classList.add("hidden")
// ul.style.display = "none"

// меню бургер

let burger = document.createElement("div")
// let burgerItem = document.createElement("div")

burger.classList.add("burger")
// burgerItem.classList.add("burger-item")

document.body.appendChild(burger)
burger.insertAdjacentHTML("afterbegin", `
<div class="burger-item"> </div>
<div class="burger-item"> </div>
<div class="burger-item"> </div>
`)

let burgerItems = burger.querySelectorAll(".burger-item")
// burgerItems.style.width = "60px"

burger.onclick = function() {
    ul.classList.toggle("hidden")

    // for (let i = 0; i < 3; i++) 
    for (let item of burgerItems) {
        item.classList.toggle("change")
    }
    burger.classList.toggle("change")
}
