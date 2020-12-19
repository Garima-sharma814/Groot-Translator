var translatebtn = document.querySelector("#btn-translate");
var InputText = document.querySelector("#txtInput");
var OutputText = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/groot.json"



function translation(text) {
    return serverUrl + "?" + "text=" + text
}

function errorhandling(error) {
	console.log("An error occured", error);
	alert("Something went Wrong..! Please try after sometime.");

function clickhandler() {
    var TxtInput = InputText.value;
    fetch(translation(TxtInput))
        .then((response) => response.json())
        .then((json) => {
            var translatedText = json.contents.translated;
            OutputText.innerText = translatedText;
        })
    .catch(errorhandling);
}

translatebtn.addEventListener("click", clickHandler);
