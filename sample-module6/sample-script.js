document.getElementById("getLocation").addEventListener("click", getLocation);

function getLocation() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported.");
        return;
    }

    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    alert(
        "Latitude: " + position.coords.latitude +
        "\nLongitude: " + position.coords.longitude
    );
}
