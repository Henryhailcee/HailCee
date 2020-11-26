$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.carousel').carousel();

    $('.carousel.carousel-slider').carousel
    ({
      fullWidth: true,
      indicators: true,

    });
    autoplay();
    function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 5500);
}
  });
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("d").innerHTML = days + "d ";
    document.getElementById("h").innerHTML = hours + "h ";
    document.getElementById("m").innerHTML = minutes + "m "
    document.getElementById("s").innerHTML = seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("d").innerHTML = "EXPIRED";
      document.getElementById("h").innerHTML = "EXPIRED";
      document.getElementById("m").innerHTML = "EXPIRED";
      document.getElementById("s").innerHTML = "EXPIRED";
    }
  }, 1000);
