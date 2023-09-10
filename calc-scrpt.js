
function addToDisplay(value) {
    if(document.getElementById("input-data").value=='0'){
        document.getElementById("input-data").value= document.getElementById("input-data").value.slice(0, -1);
        document.getElementById("input-data").value += value;
    }else{
        document.getElementById("input-data").value += value;
    }
   
}

function calculate() {
    try {
        document.getElementById("input-data").value = eval(document.getElementById("input-data").value);
    } catch (error) {
        document.getElementById("input-data").value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("input-data").value = "0";
}
function removeCharacter() {
    const inputElement = document.getElementById("input-data");
    const inputValue = inputElement.value;

    if (inputValue.length > 0) {
        const newValue = inputValue.slice(0, -1);
        inputElement.value = newValue;
        
    }
    const inputElementNew = document.getElementById("input-data");
    const inputValueNew = inputElementNew.value;
    if(inputValueNew.length==0){
        inputElementNew.value = '0';
    }
}