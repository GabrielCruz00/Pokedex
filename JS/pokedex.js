function fetchPokemon(){
    const pokeInput = document.getElementById("pokeInput");
    let  input= pokeInput.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`;

    fetch(url).then(function(res){
        if (res.status != "200"){
            console.log(res);
            pokeImage("./assets/poke404.png");
        } else if(pokeInput == ""){
            pokeImage("./assets/poke404.png");
        } else {
            return res.json();
        }
    }).then(function(data){
        console.log(data);
        let dataImg = data.sprites.front_default;
        let dataId = data.id;
        let dataName = data.name;
        let dataType = data.types[0].type.name;
        let dataStats = data.stats.map(function ({ base_stat, stat }) {
                return `${stat.name}: ${base_stat}`;
            });
        let dataMoves = data.moves.map(function({move}){
                return move.name;
            });
        pokeName(dataName.toUpperCase());
        pokeImage(dataImg);
        pokeId(dataId);
        pokeType(dataType);
        pokeStats(dataStats);
        pokeMoves(dataMoves);
    });
}

function pokeName(name){
    const pokeName = document.getElementById("pokeName");
    pokeName.textContent = name;
}
function pokeImage(url){
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
function pokeId(num){
    const pokeNum = document.getElementById("pokeId")
    pokeNum.textContent = num;
}
function pokeType(type){
    const pokeType = document.getElementById("pokeType");
    pokeType.textContent = type;
}
function pokeStats(stats){
    const pokeStats = document.getElementById("pokeStats");
    pokeStats.textContent = stats;
}
function pokeMoves(move){
    const pokeMoves = document.getElementById("pokeMoves");
        pokeMoves.textContent = move;
}