
let checkbox = document.getElementById("switch");



function change(){
    const container = document.querySelector('.container');
    if (checkbox.checked){
        container.style.background='black';
    }
    else{
        container.style.background='rgb(224, 224, 135)';
    }
    
}
