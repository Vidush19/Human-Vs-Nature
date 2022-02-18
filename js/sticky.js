window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navb");

var sticky = navbar.offsetTop;

function myFunction(){
    if(window.pageYOffset - 320 >= sticky){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
