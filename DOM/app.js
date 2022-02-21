let emptyDiv = document.createElement("div");
let btn = document.createElement("button");
let txt = document.createTextNode("Button");
btn.appendChild(txt);
emptyDiv.appendChild(btn);


document.body.appendChild(btn);

btn.addEventListener("click", ()=>{
alert("Hello, Welcome to The DOM Website");
});

let hButton = document.getElementById("H-Button");
let message = document.getElementById("message");


hButton.addEventListener("click",()=>{
    let messageVal =  message.value;
    alert(messageVal);
});


let colorDiv = document.getElementById("color-div");
colorDiv.addEventListener("mouseenter", (e)=>{
    e.target.style.color = "red";
});
colorDiv.addEventListener("mouseleave", (e)=>{
    e.target.style.color = "black";
})

let hr1 = document.createElement("hr");
colorDiv.appendChild(hr1)


let para = document.createElement("p");
let paraText = document.createTextNode("Paragraph Text");
para.appendChild(paraText);
document.body.appendChild(para);
para.addEventListener("click", (e)=>{
    // e.target.style.color = "blue";
    let colors = ["red", "green", "blue", "purple", "black", "orange", "yellow", "pink"];
    e.target.style.color = colors[Math.floor(Math.random() * colors.length)];
});
let hr2 = document.createElement("hr");
para.appendChild(hr2);

let emptyDiv2 = document.createElement("div");
let btn3 = document.createElement("button");
btn3Text = document.createTextNode("button 3");
btn3.appendChild(btn3Text);
document.body.appendChild(emptyDiv2);
document.body.appendChild(btn3);
btn3.addEventListener("click", ()=>{
    let span = document.createElement("span");
    span.className = "span";
    let name = document.createTextNode(`${"Quinton"} `);
    span.appendChild(name);
    document.body.appendChild(span);
    
})

let friends = ["Joshua","Lauren","Michael","Erica", "Hector","Taylor", "Carson","Victoria", "Thomas", "Jackson"];
let btn4 = document.getElementById("friendBtn");
btn4.append("Button4");

btn4.addEventListener("click", ()=>{
    let ul = document.getElementById("friendUl");
    let li = document.createElement("li");
    li.style.listStyle = "none";
    ul.appendChild(li);
    li.id = "lists";
    let friends = ["Joshua","Lauren","Michael","Erica", "Hector","Taylor", "Carson","Victoria", "Thomas", "Jackson"];
     function printNames(){
         friends.forEach(function (el){
             document.getElementById("lists").innerHTML+="<br>" + el;
         })
     }
    printNames(friends);
 
});
    