// Setting time interval
setInterval(checkBackground,200);

function checkBackground(){
generateRandomColor();
changeBackgroundColor();
changeBackgroundText();
}

// Generating random color
function generateRandomColor(){
return '#'+Math.floor(Math.random()*16777215).toString(16);
}

// Changing background color
function changeBackgroundColor(){
let colorBg = document.getElementById("color-overlay");
colorBg.style.backgroundColor = generateRandomColor();
}

// Changing background text
function changeBackgroundText(){
    let textbg = document.getElementById("text-bg")
    if(textbg.innerHTML == 'Happy birthday Stuti')
    textbg.innerHTML = 'You were born on this day ';
    else if(textbg.innerHTML == 'And you are now three years')
    textbg.innerHTML = 'And have now all your theeth';
    else if(textbg.innerHTML ==  'Happy Birthday  ')
    textbg.innerHTML = ' You were born on this day ';
    else if(textbg.innerHTML == 'And you are now three years ')
    textbg.innerHTML = 'And have now all your theeth' ;
    }
