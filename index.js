// Click active tab
let navbar = document.getElementById("navbar");
let tab = navbar.getElementsByClassName("tab");
for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
//Scroll active tab
var sections = $(".section"),
  nav = $("nav"),
  nav_height = nav.outerHeight();

$(window).on("scroll", function() {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
      console.log(this.getElementsByClassName("sectionSpade"));
      // this.getElementById("sectionSpade").classList.remove("spadeAnimation");
      nav.find("a").removeClass("active");
      nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
      // this.getElementById("sectionSpade").addClass("spadeAnimation");
    }
  });
});

// Cookies
window.addEventListener("load", function() {
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
