const axios = require('axios');

const getForcast = async (city) => {
    const data = await axios.get(`http://api.weatherstack.com/current?access_key=add20f7e81b7d531d2ba04831e68952e&query=${city}`);
    return data.data;
}

const getCity = async (city) => {
    const data = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiY2Vkb21pcjg3IiwiYSI6ImNrOGxyNHRtZDA1cTMzaG5zYjJ0enBrbWsifQ.K7MLMbCB4uEXOKMcJ9tWKA&limit=1`)
    if(data.data.features.length === 0) {
        return 'Place not found, please try a different one'
    }
    return getForcast(data.data.features[0].text);
}


module.exports = getCity;