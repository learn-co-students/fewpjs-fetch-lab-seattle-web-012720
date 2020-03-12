function fetchBooks() {
  const bookUrl = 'https://anapioficeandfire.com/api/books';
  fetch(bookUrl)
  .then(response => response.json())
  .then(renderBooks);
}

function getPosts() {
  const bookUrl = 'https://anapioficeandfire.com/api/books';
  fetch(bookUrl)
  .then(response => {return response.json();})
  .then(responseJson => responseJson);
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
