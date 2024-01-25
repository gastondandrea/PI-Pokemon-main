const axios = require('axios');
const {Pokemon} = require('../db');
const {Type} = require('../db');

const getPokemonByIdController = async (id, source) => {
    if(source === "api"){
        const infoApiDetail = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
        const infoApiDetailFiltrado = {
            id: infoApiDetail.id,
            name: infoApiDetail.name,
            image: infoApiDetail.sprites.front_default,
            life: infoApiDetail.stats.find((stat) => stat.stat.name === "hp").base_stat,
            attack: infoApiDetail.stats.find((stat) => stat.stat.name === "attack").base_stat,
            defense: infoApiDetail.stats.find((stat) => stat.stat.name === "defense").base_stat,
            speed: infoApiDetail.stats.find((stat) => stat.stat.name === "speed").base_stat,
            height: infoApiDetail.height,
            weight: infoApiDetail.weight,
            types: infoApiDetail.types.map((type)=>type.type.name)
          };
        return infoApiDetailFiltrado;
    }else{
        const infoApiBDD = await Pokemon.findOne({ // Buscamos el Pokémon en la BDD
                        where: { id: id },
                        include: // y le incluye su type
                        {
                            model: Type,
                            attributes: ["name"],
                            through: { attributes: [] }
                        }
                    });

        // const {types} = infoApiBDD;
        // const types_2 = types.map((obj)=>{
        //     return obj.name;
        // })
                    
        // return types_2;

        const infoApiBDDFilter = {
            id: infoApiBDD.id,
            name: infoApiBDD.name,
            image: infoApiBDD.image,
            life: infoApiBDD.life,
            attack: infoApiBDD.attack,
            defense: infoApiBDD.defense,
            speed: infoApiBDD.speed,
            height: infoApiBDD.height,
            weight: infoApiBDD.weight,
            types: infoApiBDD.types.map((obj)=>obj.name)
        };

        return infoApiBDDFilter;
    }
}


module.exports = getPokemonByIdController;