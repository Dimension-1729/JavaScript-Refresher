const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (btn) => {
    btn.addEventListener('click', function (onClick){
        // console.log(onClick);
        // console.log(onClick.target); giving me answer with ID on click
        if (onClick.target.id == 'grey') {    //not using inverted commas for css value, all CSS values must be wrapped inside ""
            body.style.backgroundColor = onClick.target.id; //used == here
        }
        if (onClick.target.id == 'white') {
            body.style.backgroundColor = onClick.target.id;
        }
        if (onClick.target.id == 'blue') {
            body.style.backgroundColor = onClick.target.id;
        }
        if (onClick.target.id =='yellow') {
            body.style.backgroundColor = onClick.target.id;
        }
        
    })
})

