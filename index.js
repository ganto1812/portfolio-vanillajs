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
let sections = $(".section"),
  nav = $("nav"),
  nav_height = nav.outerHeight();

$(window).on("scroll", function() {
  let cur_pos = $(this).scrollTop();

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
  $("#header").animate({ opacity: 1 }, 1000, function() {
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
