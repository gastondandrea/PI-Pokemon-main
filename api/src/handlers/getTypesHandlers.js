const getTypesController = require('../controllers/getTypesController');


// Devuelve todos los tipos de pokemones
const getTypesHandler = async (req, res) => {
    try {
        const allTypesPokemon = await getTypesController();
        res.status(200).json(allTypesPokemon);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getTypesHandler;