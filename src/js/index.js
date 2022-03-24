/*
- remover a classe aberto só do cartão que está aberto
- ao clicar em um pokémon da listagem pegamos o id desse pokemon pra saber qual cartão mostrar
- remover a classe ativo que marca o pokémon selecionado
- adicionar a classe ativo no item da lista selecionado
*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
console.log(listaSelecaoPokemons)

listaSelecaoPokemons.forEach(pokemon => {
  //Click event
  pokemon.addEventListener('click', () => {
    console.log(pokemon)
    //remove a classe aberto somente do cartão que está aberto...


  })
})

