

function loadWars() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log(this.responseText);
     document.getElementById("result").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://swapi.co/api/people/2/?format=json", true);
  xhttp.send();
}

// gets a pokemon detail
var URL='http://pokeapi.co/api/v2/';
function findPokemon(){
    //http://pokeapi.co/api/v2/pokemon/charizard/
    
}

function getPokemonCategories(){
    //api/v2/characteristic/{id}
    
}

