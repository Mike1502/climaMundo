const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=66d8211395cb06e327a2b81b023aa48e&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}