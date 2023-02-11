/*
let x=+prompt("x :")
for(let i=1;i<=x;i++){
    for(let j=1;j<=x;j++){
        document.write(`<span>${j}</span>`)
    }
    document.write(`<br/>`)
}

let x=+prompt("x :")
for(let i=1;i<=x;i++){
    for(let j=1;j<=x;j++){
        document.write(`<span>${Math.round(Math.random()*10)}</span>`)
    }
    document.write(`<br/>`)
}


let x=+prompt("x :")
let i=1
while(i<=x){
    let j=1
    while(j<=x){
        document.write(`<span>${Math.round(Math.random()*10)}</span>`)
        j++
    }
    document.write(`<br/>`)
    i++
}


let x=+prompt("x :")
for(let i=1;i<=x;i++){
    for(let j=1;j<=x;j++){
        if(i===j){
            document.write(`<span>1</span>`)
        }else{
            document.write(`<span style="background-color:blue">0</span>`)
        }
    }
    document.write(`<br/>`)
}

let x=+prompt("x :")
for(let i=1;i<=x;i++){
    for(let j=1;j<=x;j++){
        if(i<=j){
            document.write(`<span>1</span>`)
        }else{
            document.write(`<span style="background-color:blue">0</span>`)
        }
    }
    document.write(`<br/>`)
}

let x=+prompt("x :")
for(let i=1;i<=x;i++){
    for(let j=1;j<=x;j++){
        if(i>=j){
            document.write(`<span>1</span>`)
        }else{
            document.write(`<span style="background-color:blue">0</span>`)
        }
    }
    document.write(`<br/>`)
}


let x=+prompt("x :")
for(let i=1;i<=x;i++){
    for(let j=1;j<=x;j++){
        document.write(`<span>${i*j}</span>`)
    }
    document.write(`<br/>`)
}

let x=+prompt("x :")
for(let k=1;k<=x;k++){
    document.write(`<div style="
    left:calc(50% - ${k*5}px);
    top:calc(50% - ${k*5}px);">`)
    for(let i=1;i<=x;i++){
        for(let j=1;j<=x;j++){
            document.write(`<span style="background-color:rgb(${10*j},${20*j},${30*j})">${i*j}</span>`)
        }
        document.write(`<br/>`)
    }
    document.write(`</div>`)
}


let i=11
do{
    console.log(i);
    i++
}while(i<10)
console.log("Hello World!");


//procedural
//functional

function karimPrint()
{
    console.log("Hello World!");
    console.log("Hello World!");
    console.log("Hello World!");
    console.log("Hello World!");
    console.log("Hello World!");
}

karimPrint() //invoke
console.log("****************");
karimPrint()


function checkevenodd()
{
    let x = +prompt()
    if (x%2===0){
        console.log("even");
    }else{
        console.log("odd");
    }
}

checkevenodd()


function checkEvenOdd(x)
{
    if (x%2===0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
let x = +prompt()
checkEvenOdd(x)


function calculator(x,y,op){
    switch (op){
        case "+" : console.log(x+y);
            break;
        case "-" : console.log(x-y);
            break;
        case "/" : console.log(x/y);
            break;
        case "*" : console.log(x*y);
            break;
        default: console.log("wrong!!!");
            break;
    }
}
let x =+prompt()
let y =+prompt()
let op=prompt()
calculator(x,y,op)

function salary(fullName,degree,hour)
{
    switch (degree) {
        case "phd": console.log(`salary :`,(hour*100000)-0.1*(hour*100000),"----",fullName);
            break;
        case "master": console.log(`salary :`,(hour*80000)-0.1*(hour*80000),"----",fullName);
            break;
        case "bachelor": console.log(`salary :`,(hour*50000)-0.1*(hour*50000),"----",fullName);
            break;
        case "diploma": console.log(`salary :`,(hour*30000)-0.1*(hour*30000),"----",fullName);
            break;
        default: console.log("wrong!!!");
            break;
    }
}
let fullName=prompt(`fullName :`)
let degree=prompt(`degree :`)
let hour=+prompt(`hour :`)

salary(fullName,degree,hour)


function prime()
{
    let x=+prompt("x :")
    let flag=0
    for(let i=1;i<=x;i++){
        if(x%i===0){
            flag++
            console.log(i);
    }
}console.log(`*******************`);
    if(flag===2){
        console.log(`${x} is prime!`);
    }else{
  console.log(`${x} is not prime!`);
}
}
prime()


function factorial()
{
    let x=+prompt(`x :`)
    let f=1
    for(let i=1;i<=x;i++){
        f*=i
    }
    console.log(`factorial ${x} :`,f);
}
factorial()


function matris()
{
    let x=+prompt(`x :`)
    for(let i=1;i<=x;i++){
        for(let j=1;j<=x;j++){
            document.write(`<span>${j}</span>`);
        }
        document.write(`<br/>`)
    }
}
matris()
//hoisting:

multiple()
function multiple()
{
    let x=+prompt(`x :`)
    for(let i=1;i<=x;i++){
        for(let j=1;j<=x;j++){
            document.write(`<span class="multiple">${i}*${j}=${i*j}</span>`);
        }
        document.write(`<br/>`)
    }
}



function returnHello()
{
    let fullName=prompt(`fullName :`)
    let lastName=prompt(`lastName :`)
    return fullName+" "+lastName
}
console.log(returnHello());


function returnX(x)
{
    console.log(x);
}
returnX(10)


function returnX(x)
{
    return x
}

for(let i=1;i<=returnX(30);i++){
    console.log(i);
}
*/

function returnMenu()
{
    return `<div class='menu'>
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">home</a></li>
                    <li><a href="#">home</a></li>
                    <li><a href="#">home</a></li>
                    <li><a href="#">home</a></li>
                    ${li()}
                </ul>
            </div>`
}
function li()
{
    return `<li><a href="https://elecodeiranzamin.com">Elecode</a></li>`
}
document.write(returnMenu())