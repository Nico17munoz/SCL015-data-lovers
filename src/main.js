
import data from './data/pokemon/pokemon.js';
import {filterTypes} from './data.js';
import {helloPokemons} from './data.js';

const pokemons = data.pokemon;
filterTypes(pokemons);
helloPokemons(pokemons);

const cardContainer= document.getElementById('cardContainer');
document.getElementById("allPokemon").addEventListener('click', ()=>{
    document.getElementById("btnInitial").style.display= "none";
    document.getElementById("cardContainer").style.display= "block"; 
    // const contDivCard= document.createElement("div");
    // contDivCard.type="div";
    // contDivCard.value="card";
    // contDivCard.setAttribute('class','cards');
//   pokemons.forEach(elements=>{
//       cardContainer.innerHTML+=elements.name
//       cardContainer.
//     ,false;
//   });
    for(let i=0;i<= pokemons.length;i++){
        document.getElementById("cardContainer").innerHTML+= `<div class="cards">${i}</div>`;  
    }    
const back= document.createElement("button");
back.type="button;"
back.addEventListener('click',function() {
    back.setAttribute('id',back);
    buttonBack.appendChild(back);
    window.history.back();
    }
    ,false);
    console.log(buttonBack);
});


const pokemonTypes= ['fire','normal','acero','hada','hielo','lucha','planta','posion','psiquico','roca','siniestro','tierra','volador','agua','bicho','dragon','electrico','fantasma'];
const spacePokeballs= document.getElementById('spacePokeballs');
document.getElementById("btnTypes").addEventListener('click', ()=>{
    document.getElementById("btnInitial").style.display= "none";
    document.getElementById("spacePokeballs").style.display= "block";
    // document.getElementsByClassName("miniP").style.display="block";
    const spaceFragment= document.createDocumentFragment();
   
    // console.log(pokemonTypes);
   
     pokemonTypes.forEach(typeOfPokemons=>{
        let smallPokeball= document.createElement('button');
        // console.log(smallPokeball);
        
        smallPokeball.type= 'button';
        smallPokeball.value= typeOfPokemons;
        smallPokeball.setAttribute('id',typeOfPokemons);
        smallPokeball.setAttribute('class', "miniP");
// console.log(smallPokeball);
        spaceFragment.appendChild(smallPokeball);
        // console.log(spaceFragment);
        
    });
   
spacePokeballs.appendChild(spaceFragment);
// console.log(pokemons);
const h2= document.createElement("h2");
h2.innerHTML="Poke Tipo";
spacePokeballs.appendChild(h2);

})



//llamo e invoco las funciones 
//DOM - tomo los valores 
//creacion de documento html dinamico