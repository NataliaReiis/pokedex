
function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail"> 
      <ol class="types">
          ${pokemon.types.map((type) => `<li class="type">${pokemon.type} </li>`).join('')}
      </ol>
      <img
        src="${pokemon.photo}"
        alt="${pokemon.name}"
      >
    </div>
  </li>
    `;
}

const pokemonList = document.getElementById("pokemonList");

api.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

})
