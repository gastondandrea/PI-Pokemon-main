const axios = require('axios');

const getPokemonByIdController = async (id) => {
    const source = isNaN(id) ? "bdd" : "api";
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
        const infoApiBDD = await Pokemon.findByPk(id);
        return infoApiBDD;
    }
}


module.exports = getPokemonByIdController;