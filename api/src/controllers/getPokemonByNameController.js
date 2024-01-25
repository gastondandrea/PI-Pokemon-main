const {Pokemon, Type} = require('../db');
const axios = require('axios');

const getPokemonByNameController = async (name) => {


    //Obtiene pokemon de la BDD por nombre
    const pokemonsByNameDB = await Pokemon.findOne({ 
      where: { name: name },
      include: {
          model: Type,
          attributes: ["name"],
          through: { attributes: [] }
      }
    });
    if(pokemonsByNameDB){
      const pokemonsByNameDBFilter = {
        id: pokemonsByNameDB.id,
        name: pokemonsByNameDB.name,
        image: pokemonsByNameDB.image,
        life: pokemonsByNameDB.life,
        attack: pokemonsByNameDB.attack,
        defense: pokemonsByNameDB.defense,
        speed: pokemonsByNameDB.speed,
        height: pokemonsByNameDB.height,
        weight: pokemonsByNameDB.weight,
        types: pokemonsByNameDB.types.map((obj)=>obj.name)
    };
      return pokemonsByNameDBFilter;
    }else{
      //Obtiene pokemon de la API
      const pokemonByNameApi = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data
      console.log(pokemonByNameApi);
      if (!pokemonByNameApi) throw new Error('No existe el pokemon!');
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