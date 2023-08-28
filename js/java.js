// NAVBAR DROPDOWN CODE
document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('scroll', function () {

        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';

        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});

// NAVBAR COLOR CHANGE CODE

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $(".navbar").css("background", "linear-gradient(255deg, rgba(60, 0, 255, 1) 0%, rgba(119, 0, 153, 1) 100%)");
        }

        else {
            $(".navbar").css("background", "transparent");
        }
    })
});

// NAVBAR JS DONE

/* progressbar and back to top button js start */
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
});

// Progress BAr JS start

const pageProgressBar = document.querySelector(".progress-bar");
document.addEventListener("scroll", () => {
    const scrolledPercentage =
    (scrollContainer().scrollTop /
    (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;
    
    pageProgressBar.style.width = `${scrolledPercentage}%`;
    
      if (scrollContainer().scrollTop > showOnPx) {
          backToTopButton.classList.remove("hidden");
        } else {
            backToTopButton.classList.add("hidden");
        }
    });
    /* progressbar and back to top button js done */