const getPokemonByNameController = require('../controllers/getPokemonByNameController');
const getPokemonsController = require('../controllers/getPokemonsController');

// Devuelve todos los pokemons o el pokemon por nombre
const getPokemonsHandler = async (req, res) => {
    const {name} = req.query;
    try {
        if(name){
            const pokemonByName = await getPokemonByNameController(name);
            res.status(200).json(pokemonByName);
        }else{
            const allPokemons = await getPokemonsController();
            res.status(200).json(allPokemons);
        }
    } catch (error) {
        res.status(400).json({error: "No esta el pokemon!"});
    }
};


module.exports = getPokemonsHandler;