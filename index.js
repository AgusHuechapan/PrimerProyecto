const add = document.querySelector(".add");
const ubi = document.querySelector(".ubi");
const hide = document.querySelector(".hide");
const ul = document.querySelector(".list");
const borrar = document.querySelector(".delete");
var imagen;


add.addEventListener('click',()=>{
    ubi.style.display = 'inline';
    hide.style.display = 'inline';
})
hide.addEventListener('click',()=>{
    ubi.style.display = 'none';
    hide.style.display = 'none';
})
ul.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      event.target.parentNode.remove();
    }
});
ubi.addEventListener('click', ()=>{
    const APIKey = 'c07af27471a4d2c2652ccd2aca5c1a09    ';
    const city = document.querySelector('.ubi input').value;

    if(city=== ''){
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {

    if (json.cod === '404'){
        $('.modal').modal('show');
    }
    switch (json.weather[0].main) {
        case "Clear":
            imagen = 'img/clear.png';
            break;
        case "Rain":
            imagen = 'img/rain.png';
            break;
        case "Thunderstorm":
            imagen = 'img/thunderstorm.png';
            break;
        case "Drizzle":
            imagen = 'img/drizzle.png';
            break;
        case "Snow":
            imagen = 'img/snow.png';
            break;
        case "Atmosphere":
            imagen = 'img/drizzle.png';
            break;
        case "Clouds":
            imagen = 'img/clouds.png';
            break;
        default:
            imagen = '';}

    const temperatura = `${parseInt(json.main.temp)}<span>°C</span>`;

    $(ul).append(`<li class="list-group-item"><img class = "imagenLI" src="${imagen}"><b>${city} - ${temperatura}</b><button class="delete btn btn-light"><i class="fa-solid fa-trash"></i></button>`);
})
})
