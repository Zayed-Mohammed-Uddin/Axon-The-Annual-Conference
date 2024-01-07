$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.main_nav-bar').css('background', '#0f1726');
    } else {
        $('.main_nav-bar').css('background', 'transparent');
    }
}); 

/* letter*/ 
function redirectToArx() {
   
    var arxUrl = index1; // Replace with your actual URL
  
    // Perform the redirection
    window.location.href = arxUrl;
  }
  
// NAVBAR ACTIVE LINK SWICTHING
document.getElementById("HME").addEventListener("click", function () {
    document.getElementById("HME").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("ABT").addEventListener("click", function () {
    document.getElementById("ABT").classList.add("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("SCH").addEventListener("click", function () {
    document.getElementById("SCH").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("SPK").addEventListener("click", function () {
    document.getElementById("SPK").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("PRC").addEventListener("click", function () {
    document.getElementById("PRC").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("SPN").addEventListener("click", function () {
    document.getElementById("SPN").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("CNT").addEventListener("click", function () {
    document.getElementById("CNT").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: true
        }
    }
});
$('.custom-carousel').owlCarousel({
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 1,
            nav: true,
            loop: true
        }
    }
});
document.getElementById("btn-1").addEventListener("click", function () {
    document.getElementById("sch_date").innerHTML = "JANUARY 11, 2021";
   
    document.getElementById("btn-1").classList.add("active_schedule_btn");
    document.getElementById("btn-2").classList.remove("active_schedule_btn");

    document.getElementById("acc-title-1").innerHTML = "Techincal Quiz";
    document.getElementById("acc-title-2").innerHTML = " Co - Ordinator<strong> Varsha</strong> ";
    document.getElementById("acc-title-3").innerHTML = "Ideathon";
    document.getElementById("acc-title-4").innerHTML = " Co - ordinator<strong>AN</strong> ";
    document.getElementById("acc-title-5").innerHTML = "Real World Problem";
    document.getElementById("acc-title-6").innerHTML = " Co - ordinator<strong>USHA</strong> ";
    document.getElementById("acc-title-7").innerHTML = "Debugging";
    document.getElementById("acc-title-8").innerHTML = "Co - ordinator<strong>GFDD</strong>"; 
    document.getElementById("acc-title-9").innerHTML = "E - sports";
    document.getElementById("acc-title-10").innerHTML = "Co - ordinator<strong>GFDD</strong>";
});
document.getElementById("btn-2").addEventListener("click", function () {
    document.getElementById("sch_date").innerHTML = "JANUARY 12, 2021";
    document.getElementById("btn-2").classList.add("active_schedule_btn");
  
    document.getElementById("btn-1").classList.remove("active_schedule_btn");
   
    document.getElementById("acc-title-1").innerHTML = "Sangeetika -Nrityotsava";
    document.getElementById("acc-title-2").innerHTML = "CO-ordinator<strong> XYZ</strong> ";
    document.getElementById("acc-title-3").innerHTML = "Dumb-charades,pictionary,picture quiz";
    document.getElementById("acc-title-4").innerHTML = "co -ordinators<strong>xcv</strong> ";
    document.getElementById("acc-title-5").innerHTML = "Talent Show";
    document.getElementById("acc-title-6").innerHTML = "CO-ordinator<strong>fdb</strong> ";
    document.getElementById("acc-title-7").innerHTML = "Memes-Reels";
    document.getElementById("acc-title-8").innerHTML = "CO-ordinator<strong>dfbd</strong> ";
}); 


// fakeloader initialization
$(document).ready(function () {
    $.fakeLoader({
        timeToHide: 5000,
        bgColor: "rgb(27, 208, 126)",
        spinner: "spinner4"
    });
});
// Google Map API
let map;

function initMap() {
    var location = {
        lat: 39.045753,
        lng: -76.641273
    };
    map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 12
    });
    /*
    
    */
    addMarker({
        coordinates: {
            lat: 38.9897,
            lng: -76.9378
        },
        content: '<h6>Axon - Maryland Branch</h6>'
    });
    addMarker({
        coordinates: {
            lat: 42.4072,
            lng: -71.3824
        },
        content: '<h6>Axon - Massachusetts Branch</h6>'
    });
    addMarker({
        coordinates: {
            lat: 39.5501,
            lng: -105.7821
        },
        content: '<h6>Axon - Colorado Branch</h6>'
    });
    addMarker({
        coordinates: {
            lat: 32.3547,
            lng: -89.3985
        },
        content: '<h6>Axon - Mississippi Branch</h6>'
    });
    addMarker({
        coordinates: {
            lat: 37.7749,
            lng: -122.4194
        },
        content: '<h6>Axon - California Branch</h6>'
    });

    function addMarker(properties) {
        var marker = new google.maps.Marker({
            position: properties.coordinates,
            map: map
        });
        if (properties.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: properties.content
            });
            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            })
        }
    }
}
// $(function () {
//     $("html").niceScroll();
// });
// $("html").niceScroll({
//     cursorcolor: "#1bce7c", // change cursor color in hex
//     cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
//     cursorborder: "1px solid #1bce7c", // css definition for cursor border
//     cursorborderradius: "6px", // border radius in pixel for cursor
//     scrollspeed: 35, // scrolling speed
//     mousescrollstep: 25, // scrolling speed with mouse wheel (pixel)
// });
// Newsletter POP UP
$(document).ready(function () {
    setTimeout(function () {
        $('#myModal').modal('show');
    }, 20000);
});
$("#closebtn").click(function(){
    $('.modal-backdrop').remove();
});
$("#closebutton").click(function(){
    $('.modal-backdrop').remove();
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
}); 



function redirectToArx() {
    window.location.href = "index1.html"; // Replace with the actual URL of the arx website
  }
  


  //Create card header
const cardHeader = document.createElement('h2');
cardHeader.className = 'card-header';
cardHeader.textContent = title;

//Create card image
const cardImage = document.createElement('img');
cardImage.className = 'card-image';
cardImage.src = url;
cardImage.alt = title;

//Append card image to card header
cardHeader.appendChild(cardImage);

//Append card header to card
card.appendChild(cardHeader);

//Append card to body
document.body.appendChild(card); 


insertPictureInsideCard('1.jpg', 'Example Image'); 



