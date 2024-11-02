"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
function fetchPokemon(url, cb) {
    if (cb) {
        (0, node_fetch_1.default)(url)
            .then((resp) => resp.json())
            .then(cb);
        return undefined;
    }
    else {
        return (0, node_fetch_1.default)(url).then((resp) => resp.json());
    }
}
fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10", (data) => {
    data.results.forEach((pokemon) => console.log(pokemon.name));
});
// (async function() {
//     const data = await fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10")
//     data.results.forEach((pokemon) => console.log(pokemon.name));
// })()
