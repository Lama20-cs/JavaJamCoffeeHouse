function welcomeUser() {
    var name = prompt("Please enter your name:");

    while (name == null || name.trim() == "") {
        name = prompt("Please enter your name.");
    }

    alert("Welcome, " + name + "!");
}


function getLocation() {
    var locationInfo = document.getElementById("locationInfo");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;

                locationInfo.innerHTML =
                    "Latitude: " + latitude +
                    " | Longitude: " + longitude;
            },
            function() {
                locationInfo.innerHTML =
                    "Unable to retrieve your location.";
            }
        );
    } else {
        locationInfo.innerHTML =
            "Geolocation is not supported by your browser.";
    }
}
