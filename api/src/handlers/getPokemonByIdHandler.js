const getPokemonByIdController = require('../controllers/getPokemonByIdController');

// Devuelve el detalle del pokemon por id
const getPokemonByIdHandler = async (req, res) => {
    const {id} = req.params;
    try {
        const response = await getPokemonByIdController(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getPokemonByIdHandler;