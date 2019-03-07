const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodeCity = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeCity}`,
        headers: { 'X-RapidAPI-Key': '0bc3d1b495msh9707950794349e9p1cc76bjsn1321991abb7e' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const loc = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        loc,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}