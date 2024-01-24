const { Type } = require('../db');
const axios = require('axios');

const getTypesController = async () => {
    // Obtiene todos los tipos de la API
    const infoAPI = (await axios.get('https://pokeapi.co/api/v2/type')).data;
    const allTypesPokemonAPI =infoAPI.results;
    const allTypesPokemonAPIFiltrados = allTypesPokemonAPI.map((obj) => {
        return obj.name;
    });
    // Inserta todos los types en la BDD si no existen
    allTypesPokemonAPIFiltrados.forEach(async (type) => {
        await Type.findOrCreate({where: {name: type}})
    });
    return allTypesPokemonAPIFiltrados;
}

module.exports = getTypesController;