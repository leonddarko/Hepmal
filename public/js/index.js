// Alert 

// setTimeout(() => {
//     var audio = new Audio("../sounds/alert.mp3");
//     audio.play();

//     $(".alert").fadeIn();
// }, 7000);

// $(".closebtn").on("click", () => {
//     $(".alert").fadeOut();
// });

// var d = new Date();


// // Hepatitis Webinar Day logic
// if (d.getDate() < 26) {
//     $(".webinarDate").html("is happening on 26 - " + new Date("27 July 2021").toDateString());
// }

// else if (d.getDate() === 26 || d.getDate() === 27) {
//     $(".webinarDate").html(" is happening today starting 3pm");
// }

// else {
//     $(".webinarDate").html(" Happened recently.");
// }


// // Hepatitis Day logic
// if (d.getDate() < 28) {
//     $(".hepDayDate").html("is happening on " + new Date("28 July 2021").toDateString());
// }

// else if (d.getDate() === 28) {
//     $(".hepDayDate").html(" Happening today!");
// }

// else {
//     $(".hepDayDate").html(" Happened recently.");
// }




// When the user scrolls down 20px from the top of the document, slide down the navbar

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-62px";
    }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

$(".dropbtn").on("click", () => {
    dropdown();
});



// Modal

$("#bars").on("click", () => {
    $("#mySidenav").fadeIn();
});

$("#mySidenav").on("click", () => {
    $("#mySidenav").hide();
});


$(".kusi").on("click", () => {
    $("#kusi").fadeIn();
});

$("#kusi").on("click", () => {
    $("#kusi").fadeOut();
});


$(".bonney").on("click", () => {
    $("#bonney").fadeIn();
});

$("#bonney").on("click", () => {
    $("#bonney").fadeOut();
});


$(".amoah").on("click", () => {
    $("#amoah").fadeIn();
});

$("#amoah").on("click", () => {
    $("#amoah").fadeOut();
});


$(".afaa").on("click", () => {
    $("#afaa").fadeIn();
});

$("#afaa").on("click", () => {
    $("#afaa").fadeOut();
});


// Banner

$(".hepDayModalLink").on("click", () => {
    $("#hepDayModal").fadeIn();
});

$("#hepDayModal").on("click", () => {
    $("#hepDayModal").fadeOut();
});


$(".webinarModalLink").on("click", () => {
    $("#webinarModal").fadeIn();
});

$("#webinarModal").on("click", () => {
    $("#webinarModal").fadeOut();
});


// Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    var i;
    var slides = $(".mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


