const { Router } = require("express");
const pokemonRouter = Router();

const {getPokemonsHandler, getDetailPokemonHandler, createPokemonHandler} = require("../handlers/dogsHandlers");

pokemonRouter.get("/", getPokemonsHandler);

pokemonRouter.get("/:id", getDetailPokemonHandler);

pokemonRouter.post("/", createPokemonHandler);

module.exports = pokemonRouter;
