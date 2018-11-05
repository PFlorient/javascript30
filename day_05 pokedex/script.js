const pokedex = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
const pokemon = [];

var ul = document.getElementById('list');
var search = document.getElementById('search');

fetch(pokedex)
    .then(resp => resp.json())
    .then(data => pokemon.push(...data.pokemon));
console.log(pokemon);

function trouverPokemon(motentre, pokemons) {
    return pokemon.filter(pokemons => {

        var word = new RegExp(motentre, 'ig');
        return pokemons.name.match(word);
    });
}


function afficherPokemon(){
   var trouve = trouverPokemon(this.value, name);
   console.log(trouve);
}

search.addEventListener('change',afficherPokemon);
search.addEventListener('keyup',afficherPokemon);