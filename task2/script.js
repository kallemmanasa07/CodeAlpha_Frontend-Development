const display = document.getElementById("display");
const historyList = document.getElementById("history");
const themeBtn = document.getElementById("themeBtn");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{

        const expression = display.value;
        const result = eval(expression);

        if(result === Infinity || result === -Infinity){
            display.value = "Cannot divide by 0";
            return;
        }

        const item = document.createElement("li");
        item.textContent = `${expression} = ${result}`;

        historyList.prepend(item);

        display.value = result;

    }catch{

        display.value = "Error";

    }
}

/* Keyboard Support */

document.addEventListener("keydown",(e)=>{

    const key = e.key;

    if(!isNaN(key)){
        display.value += key;
    }

    else if(
        ["+","-","*","/","%","(",")","."]
        .includes(key)
    ){
        display.value += key;
    }

    else if(key === "Enter"){
        e.preventDefault();
        calculate();
    }

    else if(key === "Backspace"){
        deleteLast();
    }

    else if(key === "Delete" || key === "Escape"){
        clearDisplay();
    }

});

/* Dark Mode */

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    themeBtn.textContent =
    document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";

});