let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let ScreenValue='';

for(item of buttons){
    item.addEventListener('click',(e) =>{
        buttonText=e.target.innerText;
        console.log('Button text is' , buttonText);
        if (buttonText=='x') {
            buttonText='*';
            ScreenValue +=buttonText;
            screen.value =ScreenValue;
        }
        else if(buttonText=='C'){
            ScreenValue ='';
            screen.value = ScreenValue;
        }
        else if(buttonText=='='){
            screen.value = eval(ScreenValue);
            ScreenValue = screen.value;
        }
        else if(buttonText=='CE'){
            screen.value=screen.value.slice(0, screen.value.length -1);
            ScreenValue = screen.value;
        }

        else{
            ScreenValue +=buttonText;
            screen.value =ScreenValue;
        }

    })
}