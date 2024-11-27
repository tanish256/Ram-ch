// $(document).ready(function () {
// // When any image is clicked
// $('img').click(function () {
// var src = $(this).attr('src'); // Get the source of the clicked image
// var alt = $(this).attr('alt'); // Get the alt text of the image

// $('#modal').show();  // Show the modal
// $('#modalImg').attr('src', src);  // Set the modal image to the clicked image
// $('#caption').text(alt);  // Set the caption to the alt text
// });

// // Close the modal when the close button is clicked
// $('#closeBtn').click(function () {
// $('#modal').hide();  // Hide the modal
// });

// // Close the modal when the user clicks outside the image
// $(window).click(function (event) {
// if ($(event.target).is('#modal')) {
//     $('#modal').hide();  // Hide the modal
// }
// });
$(document).ready(function () {
    // When any image or video is clicked
    $('img, video').click(function () {
        var element = $(this);  // The clicked element (img or video)
        var src = element.attr('src') || element.find('source').attr('src'); // Get the source of the clicked image or video
        var alt = element.attr('alt');  // Get the alt text for image (for caption)
        
        // Clear any previous content in the modal
        $('#modalContent').empty();
        
        // Check if it's an image or a video and display accordingly
        if (element.is('img')) {
            // If it's an image, display the image in the modal
            $('#modalContent').html('<img src="' + src + '" class="modal-content">');
        } else if (element.is('video')) {
            // If it's a video, display the video in the modal with controls
            $('#modalContent').html('<video class="modal-content" controls autoplay><source src="' + src + '" type="video/mp4">Your browser does not support the video tag.</video>');
        }

        // Show the modal and set the caption (only for images, as videos usually don't need captions)
        $('#modal').show();
        $('#caption').text(alt); // Use alt text as caption, or "Video" for videos
    });

    // Close the modal when the close button is clicked
    $('#closeBtn').click(function () {
        $('#modal').hide();  // Hide the modal
        // Pause video when modal is closed
        $('#modalContent video').each(function() {
            this.pause();
        });
    });

    // Close the modal when the user clicks outside the image or video
    $(window).click(function (event) {
        if ($(event.target).is('#modal')) {
            $('#modal').hide();  // Hide the modal
            // Pause video when modal is closed
            $('#modalContent video').each(function() {
                this.pause();
            });
        }
    });
// });


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
});
function ctnbtn() {
    window.location.href = "contact.html";
} 