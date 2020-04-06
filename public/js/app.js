const fetchWeather = async (city) => {
    const res = await fetch(`http://localhost:3000/weather?address=${city}`);
    const data = await res.json();
    // console.log(data);
    if(data.forcastData.error) {
        placeholder.innerHTML = `
            ${data.forcastData.error}
        `
        placeholder.classList.remove('d-none');
    } else {
        console.log(data)
        placeholder.innerHTML = `
        <div class="card text-center">
            <div class="card-header">
                ${data.forcastData.location.region}
            </div>
            <div class="card-body">
                <h5 class="card-title">${data.forcastData.location.name}</h5>
                <p class="card-text">Current temperature in ${data.forcastData.location.name} is ${data.forcastData.current.temperature} degrees C.</p>
                <p class="card-text">The weather is ${data.forcastData.current.weather_descriptions[0]}</p>
                <p class="card-text">The wind speed is ${data.forcastData.current.wind_speed} km/h and UV index is ${data.forcastData.current.uv_index}</p>
            </div>
                <div class="card-footer text-muted">
                Local time: ${data.forcastData.location.localtime}
            </div>
        </div>
        `
        placeholder.classList.remove('d-none', 'alert-danger');
        placeholder.classList.add('alert-success');
    }
}

const submitButton = document.getElementById('submit-button');
const placeholder = document.getElementById('placeholder');

submitButton.addEventListener('click', (e) =>{
    e.preventDefault();
    const inputValue = document.getElementById('city-name').value;
    fetchWeather(inputValue);
})