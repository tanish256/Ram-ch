$(document).ready(function () {
// When any image is clicked
$('img').click(function () {
var src = $(this).attr('src'); // Get the source of the clicked image
var alt = $(this).attr('alt'); // Get the alt text of the image

$('#modal').show();  // Show the modal
$('#modalImg').attr('src', src);  // Set the modal image to the clicked image
$('#caption').text(alt);  // Set the caption to the alt text
});

// Close the modal when the close button is clicked
$('#closeBtn').click(function () {
$('#modal').hide();  // Hide the modal
});

// Close the modal when the user clicks outside the image
$(window).click(function (event) {
if ($(event.target).is('#modal')) {
    $('#modal').hide();  // Hide the modal
}
});

var McButton = $("[data=hamburger-menu]");
var McBar1 = McButton.find("b:nth-child(1)");
var McBar2 = McButton.find("b:nth-child(2)");
var McBar3 = McButton.find("b:nth-child(3)");
McButton.click(function () {
    $(this).toggleClass("active");
    $("#menu").slideToggle({
        duration: 500,
        easing: "swing",
        start: function () {
            $("#menu").css("display", "flex");
        }
    });
    if (McButton.hasClass("active")) {
        McBar1.velocity({ top: "50%" }, { duration: 200, easing: "swing" });
        McBar3.velocity({ top: "50%" }, { duration: 200, easing: "swing" })
            .velocity({ rotateZ: "90deg" }, { duration: 800, delay: 200, easing: [500, 20] });
        McButton.velocity({ rotateZ: "135deg" }, { duration: 800, delay: 200, easing: [500, 20] });
    } else {
        McButton.velocity("reverse");
        McBar3.velocity({ rotateZ: "0deg" }, { duration: 800, easing: [500, 20] })
            .velocity({ top: "100%" }, { duration: 200, easing: "swing" });
        McBar1.velocity("reverse", { delay: 800 });
    }
});
function ctnbtn() {
    window.location.href = "contact.html";
} 
});
