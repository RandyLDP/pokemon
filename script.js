const pokemon = document.getElementById('pokemon')
const pokemonList = document.getElementById('list');

async function getPokemon(){
    
    try{
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
        const res = await fetch (apiUrl);
        const data = await res.json();
        console.log(data)

        data.forEach( pokemon => {
            const newLI = document.createElement('li');
            pokemonList.appendChild(newLI);
    
        })
    

    } catch (err){
        console.log(err)
    }}    
    
 pokemon.addEventListener("click", getPokemon)

