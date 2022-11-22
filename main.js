
const screenDiv = document.querySelector(".screen");
const screenText = document.querySelector("#para");


const buttons = document.querySelectorAll(".buttons");
let string = "";



document.addEventListener("DOMContentLoaded",function(){


    // operation function
    Array.from(buttons).forEach((button) => {

        button.addEventListener("click",(e)=>{
            if(e.target.innerHTML == "="){
                string = eval(string);
                screenText.textContent = string;
            }
            // code for clear functionalities
            else if(e.target.innerHTML == "C"){
                screenText.textContent = "00";
                string = "";
            }
            // code for delete functionalities
            else if(e.target.innerHTML == "D"){
                string = string.slice(0,-1);
                screenText.textContent = string;
            }
            else{
                string = string + e.target.innerHTML;
                screenText.textContent = string;
            }
        })
    })


})