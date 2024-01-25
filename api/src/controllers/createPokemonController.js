const {Pokemon, Type} = require('../db');

const createPokemonController = async ({name, image, life, attack, defense, speed, height, weight, types}) => {
    const newPokemon = await Pokemon.create({
            name,
            image,
            life: parseInt(life),
            attack: parseInt(attack),
            defense: parseInt(defense),
            speed: parseInt(speed),
            height: parseInt(height),
            weight: parseInt(weight)
    });

    const getTypes = await Type.findAll({
        where: {name: types}
    });

    const idTypes = getTypes.map((type)=>{
        return type.id;
    })

    await newPokemon.addTypes(idTypes);

    return newPokemon;
    }

module.exports = createPokemonController;