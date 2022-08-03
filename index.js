const documentFragment = document.createDocumentFragment();
const myBox = document.getElementById("box");


const creandoPokemon = (title, id, serie, pokemon) => {
    img = `<img class="img" src="img/${pokemon}">`;
    title = `<h3>Pokemon: ${title}</h3>`;
    id = `<h4>ID: ${id}</h4>`;
    serie = `<h4>Serie: ${serie}</h4>`;
    button = `<button class="btn">addToCart</button>`;
    return [img, title, id, serie, button];
};

const cartasPokemon = (pokemones) => {

    for (let i = 0; i < pokemones.length; i++) {
        let randomId = Math.round(Math.random() * 1 + 5); 
        let randomSerie = Math.round(Math.random() * 150); 
        let pokemon = creandoPokemon(`${i}`, `${randomId}`, `${randomSerie}`,`${pokemones[i]}`);
        let div = document.createElement("DIV");
        console.log(div); 
        div.classList.add("cards"); 
        div.innerHTML = pokemon[0] + pokemon[1] + pokemon[2] + pokemon[3] + pokemon[4]; 
        documentFragment.appendChild(div); 
    }
    box.appendChild(documentFragment); 
};
const pokemones = ['pikachu.webp', 'bulbasaur.webp', 'squirtle.webp', 'rattata.png', 'charmander.webp']

cartasPokemon(pokemones); // ☎️

