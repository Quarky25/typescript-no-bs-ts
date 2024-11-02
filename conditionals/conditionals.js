"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10", (data) => {
//     data.results.forEach((pokemon) => console.log(pokemon.name));
// });
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const data = (yield fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10"));
        data.results.forEach((pokemon) => console.log(pokemon.name));
    });
})();
