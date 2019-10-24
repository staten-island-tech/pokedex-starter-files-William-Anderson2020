const DOMStrings = {
    form: document.getElementById('pkmn-form'),
    name: document.getElementById('pokemon-name'),
    displayName: document.querySelector('.pkmn-name-size'),
    displayImageFront: document.querySelector('.display-image-front-def'),
    displayImageBack: document.querySelector('.display-image-back-def'),
    displayImageShinyFront: document.querySelector('.display-image-shiny-front'),
    displayImageShinyBack: document.querySelector('.display-image-shiny-back'),
    displayNum: document.querySelector('.pkmn-num'),
    displayImageBanner: document.querySelector('.display-image-banner'),
    displayType: document.querySelector('.type')
}

function getPkmn(){
    DOMStrings.form.addEventListener('submit', async function(e){
        e.preventDefault();
        try{
            let result = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${DOMStrings.name.value.toLowerCase()}`
            )
            let data = await result.json();
            console.log(data);
            const displayPkmn = function(data){
                DOMStrings.displayName.innerText = data.species.name;
                DOMStrings.displayImageFront.src = data.sprites.front_default;
                DOMStrings.displayImageBack.src = data.sprites.back_default;
                DOMStrings.displayImageShinyFront.src = data.sprites.front_shiny;
                DOMStrings.displayImageShinyBack.src = data.sprites.back_shiny;
                DOMStrings.displayNum.innerText = data.id;
                DOMStrings.displayType.innerText = data.types.map(el => el.type.name);

                console.log(data.types);
            }
            displayPkmn(data);
        }catch(err){
            console.log(err);
        }
    })
}

getPkmn();

/* function lastPage(){
    let result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${(data.id) - 1}`
    )
    let data = await result.json();
    displayPkmn(data);
}

function nextPage(){
    let result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${(data.id) + 1}`
    )
    let data = await result.json();
    displayPkmn(data);
} */