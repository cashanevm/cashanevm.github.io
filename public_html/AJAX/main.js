var servResponse = document.querySelector('#response');
document.forms.ourForm.onsubmit = function(e){
    e.preventDefault();
    var userInput = document.forms.ourForm.ourForm__inp.value;
     userInput = encodeURIComponent(userInput);
    var xhr = new XMLHttpRequest();
//     xhr.open('GET','form.php?'+'ourForm__inp=' + userInput);
xhr.open('POST','form.php');

var formData = new FormData(document.forms.ourForm);

xhr.setRequestHeader('Content-Type',
'application/x-www-form-urlencoded');

xhr.onreadystatechanga = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
     servResponse.textContent = xhr.responseText;
 }

};









xhr.send(formData);

};