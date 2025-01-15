const input = document.querySelector('.input');
const translate = document.querySelector('.translate');
const world = document.querySelector('.world');
const meaning = document.querySelector('.meaning');
const audio = document.querySelector('.audio');
const card = document.querySelector('.card')

async function request() {
    const responseData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`);
    const post = await responseData.json()
    console.log(post)

    world.textContent = `Word : ${post[0].word}`
    meaning.textContent = `Meanings : ${post[0].meanings[0].definitions[0].definition}`
    audio.src = post[0].phonetics[0].audio
    card.style.display = "block"

}

translate.addEventListener('click', request)