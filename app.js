let allPokemon = [];
let tableauFin = [];
const searchInput = document.querySelector('.recherche-poke input');

// on se connecte à l'api
function fetchPokemonBase(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
        .then(reponse => reponse.json())
        .then((allPoke) => {
            console.log(allPoke);
        })

}

fetchPokemonBase();


// Animation input

searchInput.addEventListener('input', function(e) {

    if(e.target.value !== "") {
        e.target.parentNode.classList.add('active-input');
    } else if (e.target.value === "") {
        e.target.parentNode.classList.remove('active-input');
    }
})