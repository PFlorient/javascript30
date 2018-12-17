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
    if (search.value !="") {
    var trouve = trouverPokemon(this.value, name);
    var li = trouve.map(pokemons => {
        return ` <li class="liste">  <span class="numero"> ${pokemons.num} </span> <span> ${pokemons.name} </span>  <img src="${pokemons.img}">
        
        <span> Type(s) : ${ pokemons.type} </span> <span>|weakness(es) : ${pokemons.weaknesses}</span>
        </li>`
    }).join('');
        ul.innerHTML = li;
    }else{
        ul.innerHTML = '';
    }
}

search.addEventListener('change', afficherPokemon);
search.addEventListener('keyup', afficherPokemon);

//Fin
//By Roku
//05/11/18