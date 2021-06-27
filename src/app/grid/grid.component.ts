import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    async function getCategories(count: number, offset: undefined) {
      let response = await fetch(`https://jservice.io/api/categories?count=${count}&offset=${offset}`)
      let data = await response.json()
      return data
    }

    function getClueHtml(clueValue: number) {
      return `<div class="my-category-clue" style="grid-row-start: ${clueValue / 100 + 1}">$${clueValue}</div>`
    }

    function getCategoryHtml(category: { title: any; }) {
      return `
        <div class="my-category-title">${category.title}</div>
        ${getClueHtml(100)}
        ${getClueHtml(200)}
        ${getClueHtml(300)}
        ${getClueHtml(400)}
    `
    }

    // @ts-ignore
    getCategories(5).then(categories => {
      console.log(categories)
      document.body.innerHTML = `<div class="board">
        ${categories.map(getCategoryHtml).join('')}
    </div>`
    })

    async function getAllPokemon() {
      let response = await fetch("pokemon.json")
      let data = await response.json()
      return data.slice(0, 100)
    }

    function getPokemonHtml(aPokemon: { id: any; name: { english: any; japanese: any; chinese: any; french: any; }; type: any[]; base: { HP: any; Attack: any; Defense: any; Speed: any; }; }) {
      return `
        <div class="a-pokemon">
            <div class="a-pokemon-id">${aPokemon.id}</div>

            <div class="a-pokemon-name">${aPokemon.name.english}</div>
            <div class="a-pokemon-type">${aPokemon.type.join(' / ')}</div>

            <div class="a-pokemon-stat">HP: ${aPokemon.base.HP}</div>
            <div class="a-pokemon-stat">Attack: ${aPokemon.base.Attack}</div>
            <div class="a-pokemon-stat">Defense: ${aPokemon.base.Defense}</div>
            <div class="a-pokemon-stat">Speed: ${aPokemon.base.Speed}</div>

            <div class="a-pokemon-alt-name">${aPokemon.name.japanese}</div>
            <div class="a-pokemon-alt-name">${aPokemon.name.chinese}</div>
            <div class="a-pokemon-alt-name">${aPokemon.name.french}</div>
        </div>
    `
    }

    function displayPokedex(allPokemon: any[]) {
      console.log(allPokemon[0])
      document.body.innerHTML = `<div class="my-pokedex">
        ${allPokemon.map(getPokemonHtml).join('')}
    </div>`
    }

    getAllPokemon().then(displayPokedex)

    async function getBooks() {
      let response = await fetch('books.json')
      let books = await response.json()
      let n = 1
      return books.map((book: { id: number; }) => {
        book.id = n
        n += 1
        return book
      })
    }

    function getBookHtml(book: { title: any; }) {
      return `<div class="my-book">
        <div class="my-book-cover">${book.title}</div>
        <div class="my-book-spine"></div>
        <div class="my-book-footer"></div>
    </div>`
    }

    function displayLibrary(books: { title: any; }[]) {
      document.body.innerHTML = `<div class="my-library">
        ${books.map(getBookHtml).join('')}
    </div>`
    }

    getBooks()
      .then(displayLibrary)
      .catch(e => console.log(e))

    async function findShow(query: string) {
      let response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      let data = await response.json()
      return data
    }

    function getShowHtml(show: { name: any; summary: any; }) {
      return `<div class="my-show">
        <div class="my-show-title">
            ${show.name}
        </div>

        <div class="my-show-summary">
            ${show.summary}
        </div>
    </div>`
    }

    function displayShows(shows: any[]) {
      document.body.innerHTML = `<div class="my-shows">
        ${shows.map(show => getShowHtml(show.show)).join('')}
    </div>`
    }

    findShow("office").then(displayShows)
      .catch(e => console.log(e))

    async function getAPIs() {
      let response = await fetch("https://api.publicapis.org/entries")
      let data = await response.json()
      return data
    }

    function getAPIhtml(myAPI: { Link: any; API: any; Category: any; Description: any; Auth: any; HTTPS: any; }) {
      return `<div class="my-api">
        <div class="my-api-name">
            <a href="${myAPI.Link}" target="_blank">${myAPI.API} (${myAPI.Category})</a>
        </div>
        <div class="my-api-description">${myAPI.Description}</div>
        <div class="my-api-auth">Auth: ${myAPI.Auth ? myAPI.Auth : 'None'}</div>
        <div class="my-api-https">HTTPS? ${myAPI.HTTPS}</div>
    </div>`
    }

    function displayAPIs(myAPIs: { entries: any[]; map: (arg0: (myAPI: { Link: any; API: any; Category: any; Description: any; Auth: any; HTTPS: any; }) => string) => any[]; }) {
      let sampleAPI = myAPIs.entries[0]
      // myAPIs = myAPIs.entries
      document.body.innerHTML = `<div class="my-apis">
        ${myAPIs.map(getAPIhtml).join('')}
    </div>`
    }

    getAPIs()
      .then(displayAPIs)
      .catch(e => console.log(`Error: ${e}`))
  }
}
