//LINE COUNTER

const input = document.querySelector('textarea');
const gutter = document.querySelector('.gutter');
let val = input.value;
let numOfLines = 1;
 
function update(e) {
    val = input.value;
    
    let lineBreaks = val.match(/\n/gi) || [];
    let numOfSpans = gutter.childElementCount;
    numOfLines = lineBreaks.length ? lineBreaks.length + 1 : 1;
    
    gutter.innerHTML = ""
    for(var i = 0; i < numOfLines; i++) {
        
        var el = document.createElement('span');
        el.innerHTML = i+1;
        gutter.appendChild(el);
    }
}
 
input.addEventListener('input', update);



//Remaining Logic