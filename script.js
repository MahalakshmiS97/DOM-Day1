// Creating elements example:
// const element=document.createElement("div")
// element.innerHTML="this is dynamic div"
// document.body.append(element);

// const element1 = document.createElement("div")
// element1.innerHTML = "<span>this is dynamic span</span>"
// doucument.body.append(element1);

// const element = document.createElement("div")
// const element1 = document.createElement("div")
// const element2 = document.createElement("span")
// element2.innerHTML="this is span"
// element1.append(element2);
// element.append(element1);
// document.body.append(element)

// const element1=document.createElement("header")
// const element2=document.createElement("section")
// const element3=document.createElement("span")
// const element4=document.createElement("article")
// const element5=document.createElement("p")

// element3.innerHTML="this is span"
// element5.innerHTML="this is paragraph"

// element2.append(element3)
// element1.append(element2)

// document.body.append(element1)

// const art=document.createElement("div")
// art.setAttribute("class", "container")
// art.setAttribute("id","container")
// art.innerHTML="this is attribute example"
// document.body.append(art)

const div=document.createElement("div")
const header1=document.createElement("header")
const section1=document.createElement("section")
const span1=document.createElement("span1") 

div.setAttribute("class","divbg")
header1.setAttribute("class","header1bg")
section1.setAttribute("class","sectionbg")
span1.setAttribute("class", "span1clr")

span1.innerHTML="this is span"

section1.append(span1)
header1.append(section1)
div.append(header1)
document.body.append(div)


