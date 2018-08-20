//let keya = document.getElementById('')
let a = document.getElementById('A');
let s = document.getElementById('S');
let d = document.getElementById('D');
let f = document.getElementById('F');
let g = document.getElementById('G');
let h = document.getElementById('H');
let j = document.getElementById('J');
let k = document.getElementById('K');
let l = document.getElementById('L');
function play(sound,button)
{
    //console.log(key);
    //let x = document.getElementById('sound');
    button.classList.add('active');
    sound.currentTime=0;
    sound.play();
    window.addEventListener('keyup',function()
    {
        console.log('release');
        button.classList.remove('active');
    });    
    //x.classList.remove('color');
}
function clickOn(x)
{
    //console.log(document.getElementById(`Key${x.id}`));
    //let s = document.getElementById(`Key${x.id}`);
    play(document.getElementById(`Key${x.id}`),document.getElementById(`${x.id}`));
}
window.addEventListener('keydown',function(e)
{
    //gather sound element via INTERPOLATION w/ backticks
    let s = document.querySelector(`#${e.code}`); //i.e 'KeyA....KeyS
    let b = document.getElementById(`${e.code[3]}`);//i.e..'A'.....'S'
    //console.log(button);
    play(s,b);
                //\/ better than a switch \/
    /* 
    switch(e.code)   
    {
        case 'KeyA':
            //console.log(a);
            a.classList.add('active');//add css rule
            a.addEventListener('keyup',play);
            //a.classList.remove('color');
            break;

        case 'KeyS':
        console.log('pressed a');
        break;

        case 'KeyD':
        console.log('pressed a');
        break;

        case 'KeyF':
        console.log('pressed a');
        break;

        case 'KeyG':
        console.log('pressed a');
        break;

        case 'KeyH':
        console.log('pressed a');
        break;

        case 'KeyJ':
        console.log('pressed a');
        break;

        case 'KeyK':
        console.log('pressed a');
        break;

        case 'KeyL':
        console.log('pressed a');
        break;
    } */
})