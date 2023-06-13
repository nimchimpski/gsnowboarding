function myFunction(x) {
  x.classList.toggle("change");

}



function menu() {
  let button = document.getElementById("menubutton");
  let menu = document.getElementById("nav");

  // Add a click event listener to the button
  button.addEventListener("click", function () {
    // Toggle the "menu-open" class on the menu
    menu.classList.toggle("menu-open");
  });
};

window.addEventListener('load', menu);

/* FADE IN */
function updateOpacity() {
  console.log('updateOpacity called')
  const divs = document.getElementsByClassName('fadein');

  for (let i = 0; i < divs.length; i++) {
    const rect = divs[i].getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    /* Check if the div has the 'fadex' class and the window is wider than 650px */
    if (window.innerWidth >= 650 && divs[i].classList.contains('fadex')) {
      divs[i].style.opacity = 1;
    } else {
      /* Only execute if the element is in the viewport */
      if (elemTop < window.innerHeight && elemBottom >= 0) {
        /* Adjust the fade-in to start when the top of the element enters the viewport 
           and end when the bottom of the element leaves the viewport */
        let opacity = (window.innerHeight - elemTop) / rect.height;

        /* Limit opacity between 0 and 1 */
        if (opacity < 0) opacity = 0;
        if (opacity > 1) opacity = 1;

        /* Apply the opacity to the div */
        divs[i].style.opacity = opacity;
      }
    }
  }
}

/* Update the opacity when the page first loads */
window.addEventListener('load', updateOpacity);

/* Update the opacity when the page is scrolled */
window.addEventListener('scroll', updateOpacity);


