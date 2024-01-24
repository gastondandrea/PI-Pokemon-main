const createPokemonController = require('../controllers/createPokemonController');

// Maneja la creación de un pokemon en la Base de Datos
const createPokemonHandler = async (req, res) => {
    const pokemon = req.body;
    try {
        const response = await createPokemonController(pokemon);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


module.exports = createPokemonHandler;