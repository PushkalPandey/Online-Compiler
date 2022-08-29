var compileBtn=document.getElementById("compilebtn");
var outputDiv = document.getElementById("output");
var langSelector = document.getElementById("langId");
var text = document.getElementById("text");


var local;


var codeIn;
var codeX;
var result;


var obj ={
    code: null,
    langId : "77"
};


compileBtn.addEventListener("click",function(){
    console.log(langSelector.value);
    obj.code = text.value;
    obj.langId = langSelector.value;

    var request = new XMLHttpRequest();
    request.open("POST","https://codequotient.com/api/executeCode");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(obj));

    request.addEventListener("load",function(){
       codeIn = JSON.parse(request.responseText);
        if(codeIn.codeId){
           console.log(codeIn.codeId); 
            codeX = codeIn.codeId;
           local = setTimeout(output,2000);
         
        }
        else{
            console.log("COde is empty");
        }

        
        
    });


    

});


function output(){
    
  console.log("Inside fn");

  var request = new XMLHttpRequest();
    console.log(`https://codequotient.com/api/codeResult/${codeX}`);
  request.open("GET", `https://codequotient.com/api/codeResult/${codeX}`);
  request.setRequestHeader("Content-Type", "application/json");
 
  
  

  request.addEventListener("load", function()
  {
     
     result =  JSON.parse(request.responseText).data;
     
     result =JSON.parse(result);
     console.log(result);
     showOutput(result);
    clearTimeout(local);
    
  });
  
  request.send( );

}


function showOutput(result){

  console.log("inside showOutput");
     var htmlString ="";
    if(result.errors){
        htmlString += "<p>"+result.errors+"</p>";}
        else{
        htmlString +=  result.output+"</p>";}


   
    // outputDiv.insertAdjacentHTML('beforeend',htmlString);
    console.log(htmlString);
    outputDiv.innerHTML= htmlString;

}