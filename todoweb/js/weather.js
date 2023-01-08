

function onGeoOk(position) {
    const lag = position.cords.latitude;
    const long = position.cords.longitude;
    console.log(position, "Your Location is", lag, long);

}

function onGeoError() {
    alert("Can't find your location, No weather for you.")
}


// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);