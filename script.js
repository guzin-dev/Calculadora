const first_number = document.getElementById('first-number')
const result = document.getElementById('result')

function writeNumber(number){
    if(result.innerHTML == '0') {
        result.innerHTML = number
    } else {
        result.innerHTML += number
    }
}

function removeNumber(){
    if(result.innerHTML.length > 1){
        result.innerHTML = result.innerHTML.replace(result.innerHTML[result.innerHTML.length-1], '')
    } else {
        result.innerHTML = 0
    }
}

function clearResult(){
    first_number.innerHTML = 0
    result.innerHTML = 0
}

function percent(){
    result.innerHTML = result.innerHTML / 100
}

function sum(){
    first_number.innerHTML = `${result.innerHTML}+`
    result.innerHTML = 0
}

function minus(){
    first_number.innerHTML = `${result.innerHTML}+`
    result.innerHTML = 0
}

function subtract(){
    first_number.innerHTML = `${result.innerHTML}-`
    result.innerHTML = 0
}

function multiply(){
    first_number.innerHTML = `${result.innerHTML}x`
    result.innerHTML = 0
}

function divide(){
    first_number.innerHTML = `${result.innerHTML}/`
    result.innerHTML = 0
}

function calculate(){
    if(first_number.innerHTML[first_number.innerHTML.length-1] == '+'){
        first_number.innerHTML = first_number.innerHTML.replace(first_number.innerHTML[first_number.innerHTML.length-1], '')
        result.innerHTML = Number(first_number.innerHTML) + Number(result.innerHTML)
        first_number.innerHTML = 0
    }
    else if(first_number.innerHTML[first_number.innerHTML.length-1] == '-'){
        first_number.innerHTML = first_number.innerHTML.replace(first_number.innerHTML[first_number.innerHTML.length-1], '')
        result.innerHTML = Number(first_number.innerHTML) - Number(result.innerHTML)
        first_number.innerHTML = 0
    }
    else if(first_number.innerHTML[first_number.innerHTML.length-1] == 'x'){
        first_number.innerHTML = first_number.innerHTML.replace(first_number.innerHTML[first_number.innerHTML.length-1], '')
        result.innerHTML = Number(first_number.innerHTML) * Number(result.innerHTML)
        first_number.innerHTML = 0
    }
    else if(first_number.innerHTML[first_number.innerHTML.length-1] == '/'){
        first_number.innerHTML = first_number.innerHTML.replace(first_number.innerHTML[first_number.innerHTML.length-1], '')
        result.innerHTML = Number(first_number.innerHTML) / Number(result.innerHTML)
        first_number.innerHTML = 0
    }
}