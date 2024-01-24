const {Pokemon} = require('../db');
const axios = require('axios');

const getPokemonByNameController = async (name) => {


    //Obtiene pokemon de la BDD
    const pokemonsByNameDB = await Pokemon.findAll({where: {name: name}});
    if(!pokemonsByNameDB){
      return pokemonsByNameDB;
    }else{
      //Obtiene pokemon de la API
      const pokemonByNameApi = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data
      if (pokemonByNameApi) throw new Error('No existe el pokemon!');
      //Filtrado de datos
      const pokemonByNameApiFiltrado = {
        id: pokemonByNameApi.id,
        name: pokemonByNameApi.name,
        image: pokemonByNameApi.sprites.front_default,
        life: pokemonByNameApi.stats.find((stat) => stat.stat.name === "hp").base_stat,
        attack: pokemonByNameApi.stats.find((stat) => stat.stat.name === "attack").base_stat,
        defense: pokemonByNameApi.stats.find((stat) => stat.stat.name === "defense").base_stat,
        speed: pokemonByNameApi.stats.find((stat) => stat.stat.name === "speed").base_stat,
        height: pokemonByNameApi.height,
        weight: pokemonByNameApi.weight,
        types: pokemonByNameApi.types.map((type)=>type.type.name)
      };
      return pokemonByNameApiFiltrado;
    }
};


module.exports = getPokemonByNameController;