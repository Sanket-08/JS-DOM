const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'one' ){
            body.style.backgroundColor = '#331D2C';
        }

        if(e.target.id === 'two'){
            body.style.backgroundColor = '#3F2E3E';
        }

        if(e.target.id === 'three'){
            body.style.backgroundColor = '#A78295';
        }

        if(e.target.id === 'four'){
            body.style.backgroundColor = '#EFE1D1';
        }
    })
});