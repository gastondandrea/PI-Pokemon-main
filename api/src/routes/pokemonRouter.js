const { Router } = require('express');
const pokemonRouter = Router();

const getPokemonsHandler = require('../handlers/getPokemonsHandler');
const getPokemonByIdHandler = require('../handlers/getPokemonByIdHandler');
const createPokemonHandler = require('../handlers/createPokemonHandler')

pokemonRouter.get("/", getPokemonsHandler);

pokemonRouter.get("/:id", getPokemonByIdHandler);

pokemonRouter.post("/", createPokemonHandler);

module.exports = pokemonRouter;
