//GET ELEMENTS FROM HTML DOCUMENT

//HUMBURGER ICON IN UPPER RIGHT CORNER
const hamburger = document.querySelector(".hamburger");
//MENU PAGE THAT APPEARS WHEN HUMBURGER IS CLICKED
const menu = document.querySelector(".menu");

//VARIABLE THAT WILL DECIDE IF THE MENU WILL BE SHOW OR NOT
let showMenu = false;

//LISTEN FOR CLICK ON HAMBURGER ICON AND CALL TOGGLRMENU FUNCTION
hamburger.addEventListener('click', toggleMenu);
//DECLARE TOGLEMENU FUNCTION
function toggleMenu() {
    //CHECK IF SHOW MENU VARIABLE IS FALSE
    if (showMenu == false) {
        //ADD A CLASS 'CLOSE' TO THE HAMBURGER IN THE HTML DOC
        hamburger.classList.add("close");
        //ADD SHOW CLASS TO ANYTHING WITH '.MENU'
        menu.classList.add("show");
        //WHEN THE HAMBURGER IS CLICKED AGAIN IT WON'T ADD ANYTHING

        showMenu = true;
    } else { //IF SHOWMENU IS TRUE 
        //REMOVE THE CLOSE CLASS HAMBURGER 
        hamburger.classList.remove("close");
        menu.classList.remove("show");
        //RESET THE SHOWMENU VARIABLE BACK TO FALSE
        showMenu = false;
    }
}
