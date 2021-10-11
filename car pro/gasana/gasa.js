const four = document.querySelector(".four");
const three = document.querySelector(".three");
const five = document.querySelector(".five");
const emailInput = document.querySelector("#emailInput");
const nameInput = document.querySelector("#nameInput");

three.addEventListener("click", onsubmit);
function onsubmit(a) {
    a.preventDefault();
    if(nameInput.value ==="" || emailInput.value ===""){
            five.innerHTML = "please try again for Entering complately";
            five.classlist.add('error');
            setTimeout ( () => five.remove(),3000 );
            }
            else{
            const li= document.createElement("li");
            li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
            four.appendChild(li);

    }
}
