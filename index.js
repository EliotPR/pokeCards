const documentFragment = document.createDocumentFragment();
const myBox = document.getElementById("box");


const creandoPokemon = (title, clase, serie, pokemon) => {
    img = `<img class="img" src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon}.png">`;
    title = `<h3>Pokémon: ${title}</h3>`;
    clase = `<h4>Clase: ${clase}</h4>`;
    serie = `<h4>Serie: ${serie}</h4>`;
    button = `<button class="btn">Atrápalo!</button>`;
    return [img, title, clase, serie, button];
};

const cartasPokemon = (pokemones) => {

    for (let i = 0; i < pokemones.length; i++) {
        let randomClase = Math.round(Math.random() * 1 + 5); 
        let randomSerie = Math.round(Math.random() * 150); 
        let pokemon = creandoPokemon(`${i}`, `${randomClase}`, `${randomSerie}`,`${pokemones[i]}`);
        let div = document.createElement("DIV"); 
        div.classList.add("cards"); 
        div.innerHTML = pokemon[0] + pokemon[1] + pokemon[2] + pokemon[3] + pokemon[4]; 
        documentFragment.appendChild(div); 
    }
    box.appendChild(documentFragment); 
};
const pokemones = ["001","002","003","004","005"]

cartasPokemon(pokemones);

const form = document.getElementById("formm");


const enviarFormm = (event) => {
    
    event.preventDefault();
    
    const {name, imagen} = event.target;
    
    console.log(
        name.value, 
        imagen.value);

    if (name.value.length, imagen.value.length === 0) alert ("Los datos no son validos, verifique") 
        
    pokemones.push (imagen.value)
    myBox.innerHTML=""
    cartasPokemon (pokemones)
}
form.addEventListener("submit", enviarFormm);


let localBase = localStorage.setItem ('nombre', 'idPokemon')

let recuperoStorage = localStorage.getItem('nombre')

const catchAlert = document.querySelector('.bttn')

catchAlert.onclick = (e) => {
    swal({
    title: "Wild Pokémon appeared!",
    buttons: ["Cancel", "Throw a pokeball!" ]
})
    .then((result) => {
        if(result){
            swal({
                text: "Pokémon just added to the list",
                icon: "success",
        })}
    })
};









