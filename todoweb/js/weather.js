const API_KEY = "efb1fbdc02c64db766c3f0f84236590f";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(position, "Your Location is", lat, lon);
    // units=metric 붙여서 array포맷으로 그냥 가져올 수 있게 됨
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        // const weatherContainer = document.getElementById("weather")
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        const name = data.name;
        console.log(data.name, data);
        console.log(data[0].map);

        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`

    }); //fetch는 약속처럼, 바로 되진 않고 조금 시간이 걸린다. 서버에서 응답할때까지 확인해야됨
}

function onGeoError() {
    alert("Can't find your location, No weather for you.")
}


// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);