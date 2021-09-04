const card = document.querySelector('.card');
const details = document.querySelector('.details');
const form = document.querySelector('form');
const time = document.querySelector('img.time');
const icon = document.querySelector('img.icon');

function hideImg() {
    document.getElementById("HideImg")
                      .style.display = "none";
}

const updata = (data) => {
    const det = data.det;
    const weather = data.weather;
    details.innerHTML = `
    <h4> ${det.EnglishName} </h4>
    <div class="h4">${weather.WeatherText}</div>
    <div class=" "> 
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg; C</span>
    </div> `;
    let timesrc = null;
    if(weather.IsDayTime){
        timesrc = 'img/day.svg';
    }
    else{
        timesrc = 'img/night.svg';
    }
    time.setAttribute('src', timesrc);

    const iconsrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconsrc);

};


const update = async (city) => {
    const det = await getcity(city);
    const weather = await getweather(det.Key);

    return { det, weather };
};

form.addEventListener('submit', e => {
    e.preventDefault();

    const city = form.place.value.trim();
    form.reset();

    update(city).then(data => updata(data))
    .catch(err => console.log(err));

})

