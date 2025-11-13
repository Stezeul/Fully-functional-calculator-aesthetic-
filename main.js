const butoane = [
    {text: "AC", label: "clear"},
    {text: "⌫", label: "backspace"},
    {text: "/", label: "operatie"},
    {text: 7, label: "cifra"}, 
    {text: 8, label: "cifra"}, 
    {text: 9, label: "cifra"}, 
    {text: "×", label: "operatie"}, 
    {text: 4, label: "cifra"}, 
    {text: 5, label: "cifra"}, 
    {text: 6, label: "cifra"}, 
    {text: "-", label: "operatie"}, 
    {text: 1, label: "cifra"}, 
    {text: 2, label: "cifra"}, 
    {text: 3, label: "cifra"}, 
    {text: "+", label: "operatie"}, 
    {text: 0, label: "cifra"}, 
    {text: ".", label: "virgula"}, 
    {text: "=", label: "rezultat"}  
] ;
const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");
let valoareCurenta = "";
const citit = document.getElementById("citit");
let rez;
let = ecuatieSus = "";
const ecuatie = document.getElementById("ecuatie");

butoane.map((buton, idx) => {
   const butonDiv = document.createElement("button");
   butonDiv.textContent = buton.text;  // butonDiv.innerText
   if(idx<3) {
        butonDiv.id="butoanesus";
        if(idx === 0)
            butonDiv.classList.add("w-1/2");
        else
            butonDiv.classList.add("w-1/4");
       r1.appendChild(butonDiv);
   }
   else if(idx<15){
    butonDiv.id="butoanesus";
    r2.appendChild(butonDiv);
   }
   else {
    r3.appendChild(butonDiv);
    butonDiv.id="butoanesus";
    if(idx === 15)
            butonDiv.classList.add("w-1/2");
        else
            butonDiv.classList.add("w-1/4");
   }
   if(buton.label === "cifra" || buton.label === "operatie" || buton.label === "virgula") {
    butonDiv.onclick = () => handleInput(buton.text);
    }
    if(buton.label == "clear") {
        butonDiv.onclick = () => handleClear(buton.text);
    }
    if(buton.label == "backspace") {
        butonDiv.onclick = () => handleBackspace(buton.text);
    }
    if(buton.label == "rezultat") {
        butonDiv.onclick = () => handleResult(buton.text);
    }
})


document.addEventListener("keydown", (e) => {
  const k = e.key;

  if (k === "0" || k === "1" || k === "2" || k === "3" || k === "4"  || k === "5" || k === "6" || k === "7" || k === "8" || k === "9") {
    handleInput(k);
  }

  if (k === "." || k === ",") {
    handleInput(".");
  }

  if (k === "+" || k === "-" || k === "/" || k === "*") {
    handleInput(k);
  }

  if (k === "Enter" || k === "=") { 
    handleResult();
  }

  if (k === "Backspace") {
    handleBackspace();
  }

  if (k === "Escape") {
    handleClear();
  }
});



function handleInput(cifra) {


    let okv=1;
    if(cifra  === ".") {
      for(let i=0; i<valoareCurenta.length; i++)
      {
        if(valoareCurenta[i] === ".") {
          okv=0;
        }
        if(valoareCurenta[i] === "+" || valoareCurenta[i] === "-" || valoareCurenta[i] === "/" || valoareCurenta[i] === "×") {
          okv=1;
        }
      }
    }

    let oks=1;
    if (['-', '+', "×", '/', '*'].includes(cifra)) {

      if(['-', '+', "*", '/', '×'].includes(valoareCurenta[valoareCurenta.length - 1])){
        handleBackspace();
      }
    }

    valoareCurenta += cifra;
    render();
    
    if(okv === 0) {
      handleBackspace();
    }
    
}   

function render() {
    let ceva = valoareCurenta.replace(/\*/g, "×");
    valoareCurenta ="";
    valoareCurenta += ceva;
    citit.textContent = valoareCurenta;
}

function  handleClear()
{
    valoareCurenta = "";
    ecuatieSus = "";
    renderSus();
    render();
}

function handleBackspace() {
    valoareCurenta = valoareCurenta.slice(0, -1);
    render();
}

function handleResult() {
    let nou = valoareCurenta.replace(/×/g, "*");
    rez=eval(nou);
    ecuatieSus = "";
    ecuatieSus += valoareCurenta;
    renderSus();
    valoareCurenta ="";
    valoareCurenta += rez;
    render();
}

function renderSus() {
    ecuatie.textContent = ecuatieSus;
}