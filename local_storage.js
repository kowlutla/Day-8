let saveButton = document.getElementById("saveButton");
let message = document.getElementById("message");
let storedUserInputValue=localStorage.getItem("userEnteredText");
if(storedUserInputValue===null){
    message.value="";
}else{
    message.value=storedUserInputValue;
}
saveButton.onclick = function() {
    let userEnteredText = message.value;
    localStorage.setItem("userEnteredText", userEnteredText);
}