let dropDownList = document.querySelector("#select-box")
let listElements = document.querySelector("#dropdown-list")
let arrow = document.querySelector("#dropdown-arrow")
let options = document.querySelectorAll("#dropdown-list li");

let openList = 0;

dropDownList.addEventListener('click', ()=>{
if (openList==0)
{
    openList = 1;
    arrow.style.transform = "rotate(180deg)";
    for (element of options)
    {
        element.style.height = "1.3rem";
        element.style.padding = "0.2rem";
        element.style.border = "0.1rem solid #FFFFFF"; 
    }

}
else
{
        openList = 0;
        arrow.style.transform = "rotate(0deg)";
        for (element of options)
        {
            element.style.height = "0rem"
            element.style.padding = "0rem";
            element.style.border = "0rem solid #FFFFFF"; 
        }
}
})

let choosen = document.querySelector("#choosen")

    for ( let i = 0; i < options.length; i++ ) {
    options[i].addEventListener( 'click', (e) => {
        choosen.innerText = e.target.innerText
        openList = 0;
        arrow.style.transform = "rotate(0deg)";
        for (element of options)
        {
            element.style.height = "0rem"
            element.style.padding = "0rem";
            element.style.border = "0rem solid #FFFFFF"; 
        }
    })
}


