//typewriter effect
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #282B2C}";
        document.body.appendChild(css);
    };

//organize portfolio categories
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//button scroll to top
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//button down scroll to div index.work page
function scrollDiv() {
  var elmnt = document.getElementById("introBrief");
  elmnt.scrollIntoView();
}

//button down scroll to div cognite
function cogniteScroll() {
  var elmnt = document.getElementById("cogniteAbout");
  elmnt.scrollIntoView();
}

//button down scroll to das cognite
function dasScroll() {
  var elmnt = document.getElementById("dasAbout");
  elmnt.scrollIntoView();
}

//button down scroll to div drill
function drillScroll() {
  var elmnt = document.getElementById("drillAbout");
  elmnt.scrollIntoView();
}

//button down scroll to div collaboratively
function collabScroll() {
  var elmnt = document.getElementById("collabAbout");
  elmnt.scrollIntoView();
}

//button down scroll to div grandmail
function grandmailScroll() {
  var elmnt = document.getElementById("grandmailAbout");
  elmnt.scrollIntoView();
}

//button down scroll to div aero
function aeroScroll() {
  var elmnt = document.getElementById("aeroAbout");
  elmnt.scrollIntoView();
}


//button down scroll to div glow
function glowScroll() {
  var elmnt = document.getElementById("glowAbout");
  elmnt.scrollIntoView();
}

//button down scroll to div mindful minutes
function mindfulMinutesScroll() {
  var elmnt = document.getElementById("mindfulMinutesAbout");
  elmnt.scrollIntoView();
}

//button down scroll to div tbo
function tboScroll() {
  var elmnt = document.getElementById("tboAbout");
  elmnt.scrollIntoView();
}

//button down scroll to div tea time
function teaTimeScroll() {
  var elmnt = document.getElementById("teaTimeAbout");
  elmnt.scrollIntoView();
}

//button down scroll to div waiveTheGrain
function waiveTheGrainScroll() {
  var elmnt = document.getElementById("waiveTheGrainAbout");
  elmnt.scrollIntoView();
}

//maintain active navbar
var header = document.getElementById("nav-bar-options");
var btns = header.getElementsByClassName("options");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}