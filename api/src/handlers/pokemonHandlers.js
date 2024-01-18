const {getAllPokemons} = require('../controllers/pokemonControllers');


// Obtiene los pokemones

const getPokemonsHandler = async (req, res) => {
    try {
        const {name} = req.query;
        name ? res.status(200).send(`Aqui esta tu pokemon ${name}`) : res.status(200).send('Aqui tus pokemones');
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


// Obtiene el pokemon por id

const getDetailPokemonHandler = async (req, res) => {

    try {
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// Crear un pokemon

const createPokemonHandler = async (req, res) => {
    const {name, image, life, attack, defense, speed, height, weight} = req.body;
    try {
        const response = await createPokemonDB(name, image, life, attack, defense, speed, height, weight);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {getPokemonsHandler, getDetailPokemonHandler ,createPokemonHandler}