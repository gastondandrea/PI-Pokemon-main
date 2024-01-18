const {Pokemon} = require("../db")

const getAllPokemons = async () => {
    const allPokemonDB = Pokemon.findAll();
    return allPokemonDB;
}

// const getDetailPokemonbyId = async (id, source) => {
//     const dog = source === "api" ?
//     (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)).data:
//     await Pokemon.findByPk(id);
//     return dog;
// }

const createPokemonDB = async (name, image, life, attack, defense, speed, height, weight) => {
    const newPokemon = await Pokemon.create({name, image, life, attack, defense, speed, height, weight});
    return newPokemon;
}

module.exports = {
    getAllPokemons,
    createPokemonDB
}