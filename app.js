const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

toggleSwitch.addEventListener('change', switchTheme);


// Dark Mode Styles

function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    //console.log(toggleIcon.children);

    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');

    //toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');

    image1.src = 'img/undraw_learning_re_32qv_DarkMode.svg' ;
    image2.src = 'img/undraw_product_explainer_8jbm_DarkMode.svg' ;
    image3.src = 'img/undraw_yoga_re_i5ld_darkMode.svg' ;

    //imageMode(dark);

}


// Light Mode Styles

function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)'; 
    //console.log(toggleIcon.children);

    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');

    //toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');

    image1.src = 'img/undraw_learning_re_32qv_LightMode.svg' ;
    image2.src = 'img/undraw_product_explainer_8jbm_LightMode.svg' ;
    image3.src = 'img/undraw_working_out_re_nhkg_LightMode.svg' ;

    // imageMode(light);  //instead of taking img.src

}

/*// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
  }*/


// Switch Theme Dynamically

function switchTheme(event){
    //console.log(event);
   //console.log(event.target);
    //console.log(event.target.checked);

    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }


}

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
//console.log(currentTheme);

if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}