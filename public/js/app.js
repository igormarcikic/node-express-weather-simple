const fetchWeather = async (city) => {
    const res = await fetch(`http://localhost:3000/weather?address=${city}`);
    const data = await res.json();
    console.log(data.forcastData)
    if(data.forcastData.error) {
        placeholder.innerHTML = `
            ${data.forcastData.error}
        `
        placeholder.classList.add('alert-danger')
        placeholder.classList.remove('alert-info');
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
                Local Date/Time: ${data.forcastData.location.localtime}
            </div>
        </div>
        `
        placeholder.classList.remove('alert-danger', 'alert-info');
        placeholder.classList.add('alert-success');
    }
}

const submitButton = document.getElementById('submit-button');
const placeholder = document.getElementById('placeholder');

submitButton.addEventListener('click', (e) =>{
    e.preventDefault();
    placeholder.innerHTML = 'Loading...'
    placeholder.classList.remove('d-none');
    placeholder.classList.remove('alert-danger');
    placeholder.classList.add('alert-info');
    const inputValue = document.getElementById('city-name').value;
    fetchWeather(inputValue);
})