// Click active tab
const navbar = document.getElementById("navbar");
let tabs = Array.from(navbar.querySelectorAll(".tab"));
tabs.forEach(tab => {
  tab.addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
});
//scroll nav animation
const topOfNav = navbar.offsetTop;

function fixNav() {
  if (window.scroll >= topOfNav) {
    document.body.classList.add("fixed-nav");
  } else {
    document.body.classList.remove("fixed-nav");
  }
}

//Scroll active tab

// //Scroll active tab

window.addEventListener("scroll", () => {
  let currentHeight = this.scrollTop;
  console.log(currentHeight);
  const sections2 = document.querySelectorAll(".section");
  sections2.forEach(section => {
    sectionTop = section.offsetTop - topOfNav;
    sectionBottom = sectionTop + section.offsetBottom;
    //   bottom = top + this.outerHeight();
    // if (cur_pos >= top && cur_pos <= bottom) {
    //   // console.log(this.getElementsByClassName("sectionSpade"));
    //   // this.getElementById("sectionSpade").classList.remove("spadeAnimation");
    //   nav.find("a").removeClass("active");
    //   nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
    //   // this.getElementById("sectionSpade").addClass("spadeAnimation");
  });
});

(nav = $("nav")), (nav_height = nav.outerHeight());
$(window).on("scroll", function() {
  let cur_pos = $(this).scrollTop();
  console.log(cur_pos);
  let sections = $(".section");
  sections.each(function() {
    let top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
      // console.log(this.getElementsByClassName("sectionSpade"));
      // this.getElementById("sectionSpade").classList.remove("spadeAnimation");
      nav.find("a").removeClass("active");
      nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
      // this.getElementById("sectionSpade").addClass("spadeAnimation");
    }
  });
});

//After load
window.addEventListener("load", function() {
  $("#home").animate({ opacity: 1 }, 1000, function() {
    $("#bigSpade").addClass("rotation");
  });
  // Cookies
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: "#efefef",
        text: "#404040"
      },
      button: {
        background: "#0088aaff",
        text: "#ffffff"
      }
    },
    theme: "edgeless"
  });
});
