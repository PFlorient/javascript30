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


function afficherPokemon() {
    var trouve = trouverPokemon(this.value, name);
    var li = trouve.map(pokemons => {
        return ` <li class="liste"> <div class="englobe"> <span class="numero"> ${pokemons.num} </span>  <img src="${pokemons.img}">
        <span> ${pokemons.name}</span>
        <span> Type : ${ pokemons.type} <span></div>
        </li>`
    }).join('');
    if (search.value !="") {
        ul.innerHTML = li;
    }
}

search.addEventListener('change', afficherPokemon);
search.addEventListener('keyup', afficherPokemon);