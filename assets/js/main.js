jQuery("#responsive_headline").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' });
wow = new WOW(
    {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();


//hide read more button
let paragraph = document.getElementById("rent");
document.getElementsByTagName('button')[2].textContent='READ MORE';

function show() {
var element = document.body;
element.classList.toggle("hide");

var button = document.getElementsByTagName('button')[2];
if (paragraph.style.height == '0px'&& button.textContent == 'READ MORE') {
    paragraph.style.height = '105px';
    button.textContent='READ LESS';
  }
else{
  paragraph.style.height = '0px';
  button.textContent='READ MORE';
}
}

//print
function printPage(){
  window.print();
}
//dark mode
document.getElementsByTagName('i')[0];

function modeicon() {
    var element = document.body;
    element.classList.toggle("darkicon");

} 

