const {Pokemon, Type} = require('../db');
const axios = require('axios');

const getPokemonsController = async () => {
    // Obtiene todos los pokemones de la API
    const infoApi = (await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=3')).data;
    const {results} = infoApi; 
    const allPokemonsAPI = await Promise.all(
        results.map(async (obj) => {
        const pokemon = await axios.get(obj.url);
        return {
          id: pokemon.data.id,
          name: pokemon.data.name,
          image: pokemon.data.sprites.front_default,
          life: pokemon.data.stats.find((stat) => stat.stat.name === "hp").base_stat,
          attack: pokemon.data.stats.find((stat) => stat.stat.name === "attack").base_stat,
          defense: pokemon.data.stats.find((stat) => stat.stat.name === "defense").base_stat,
          speed: pokemon.data.stats.find((stat) => stat.stat.name === "speed").base_stat,
          height: pokemon.data.height,
          weight: pokemon.data.weight,
          types: pokemon.data.types.map((type)=>type.type.name)
        };
      })
    );
    //Obtiene todos los pokemones de la BDD
    const allPokemonsBDD = await Pokemon.findAll(
      {
        include: [ // y le incluye su type
        {
            model: Type,
            attributes: ["name"],
            through: { attributes: [] }
        }]
      }
    );


    const allPokemons = [...allPokemonsAPI, ...allPokemonsBDD];

    return allPokemons;
};

module.exports = getPokemonsController;