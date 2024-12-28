const apiKay = "bf8d6e2b69061aae69d94c333d67e4c9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function cheachWeather (city) {
    
    const response = await fetch( apiUrl + city + `&appid=${apiKay}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else{


    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ '°С';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main ==  "Clouds"){
        weatherIcon.src = "imge/clouds.png";
    }else if(data.weather[0].main == 'Haze'){
        weatherIcon.src = "imge/humidity.png";
}else if(data.weather[0].main == 'Clear'){
    weatherIcon.src = "imge/clear.png";
}else if(data.weather[0].main == 'Drizzle'){

    weatherIcon.src = "imge/drizzle.png"
}else if(data.weather[0].main == 'Snow'){
    weatherIcon.src = "imge/snow.png";
}else if(data.weather[0].main == 'Mist'){
    weatherIcon.src = "imge/mist.png";
}else if(data.weather[0].main == 'Rain'){
    weatherIcon.src = 'imge/rain.png';
}

document.querySelector('.weather').style.display = "block";
document.querySelector('.error').style.display = 'none';



}
}
searchBtn.addEventListener("click", ()=>{
    cheachWeather(searchBox.value)
})


