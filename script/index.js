


let pokemon;

fetch('https://pokeapi.co/api/v2/pokemon/charizard')
.then(resp => resp.json())
.then(data => {
    pokemon = data;
    console.log(pokemon);
});