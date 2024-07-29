

let bginput=document.getElementById('input2')
let sminput=document.getElementById('input1')
let shouldclear=false
let firstvalue,operator=''
// let secondvalue=''

function show(number){
    if (shouldclear==true) {
        bginput.value=''
        shouldclear=false
    }
    bginput.value+=number;
}
function view(signs){
    if (operator) {
        equals()
        
    }
    sminput.value= bginput.value+signs 
    shouldclear=true
    operator=signs
    firstvalue=bginput.value

}


function equals(){
sminput.value=firstvalue+operator+bginput.value+'='
if (operator=='-') {
    bginput.value=firstvalue-bginput.value
}

if (operator=='+') {
    bginput.value=Number(firstvalue)+Number(bginput.value)
}
if (operator=='*') {
    bginput.value=firstvalue*bginput.value
}
if (operator=='/') {
    bginput.value=Number(firstvalue)/Number(bginput.value)
}
}

function clear1(signs){
   document.getElementById('input2').value=''
}
function clear2 (signs){
    document.getElementById('input2').value=''
    document.getElementById('input1').value=''
}
function clearonebyone(){
    let value = document.getElementById('input2').value
   bginput.value=value.slice( 0,  -1);
}
function percent(){
    percentage=(bginput.value/100)
    sminput.value=firstvalue + 'x' + bginput.value/100
    bginput.value = percentage
}
function inverse(){
    firstvalue=bginput.value
    bginput.value=1/Number(bginput.value)
    sminput.value='1/'+(firstvalue)
}