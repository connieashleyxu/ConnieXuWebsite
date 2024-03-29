/*
  typewriter text animation
*/
var txtType = function(el, toRotate, period) {
                this.toRotate = toRotate;
                this.el = el;
                this.loopNum = 0;
                this.period = parseInt(period, 10) || 2000;
                this.txt = '';
                this.tick();
                this.isDeleting = false;
              };

txtType.prototype.tick = function() {
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
                      new txtType(elements[i], JSON.parse(toRotate), period);
                    }
                  }

                  //inject css
                  var css = document.createElement("style");
                  css.type = "text/css";
                  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000000}";
                  document.body.appendChild(css);
                };

// END OF typewriter text animation

/*
  cursor on click
*/

document.body.onmousedown = () => {
  document.body.style.cursor = "url('assets/clicker.png'), auto"
}

document.body.onmouseup = () => {
  document.body.style.cursor = "url('assets/cursor.png'), auto"
}

//END OF cursor on click
