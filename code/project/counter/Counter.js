const buttons = document.querySelectorAll('button');
const value = document.getElementById('countDisplay')
// console.log(value);


buttons.forEach((button) => {
    button.addEventListener('click',(e)=>{       
        console.log(this)
        if(e.target.id == "dec"){
            value.textContent = Number(value.textContent) - 1;
        } else if(e.target.id == "inc"){
            value.textContent = Number(value.textContent) + 1;
        } else if(e.target.id == "res"){
            value.textContent = 0;
        }
    })
    
})