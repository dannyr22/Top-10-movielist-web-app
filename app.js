//MOVIE CLASS: REPRESENTS A BOOK
class Movie {
    constructor(title, director, rating) {
        this.title = title;
        this.director = director;
        this.rating = rating;
    }
}

//UI CLASS: HANDLE UI TASKS

class UI {
      static displayMovies() {
          const storedMovies  = [
              {title: "The Fountain", director: "Darren Aronofsky", rating: '9'},
              {title: "Punch Drunk Love", director: "Paul Thomas Anderson", rating: '9'},
              {title: "A Good Year", director: "Ridley Scott", rating: '8'}
          ]

          console.log(storedMovies)

          const movies = storedMovies

          movies.forEach(movie => UI.addMovieToList(movie))
      }
      static addMovieToList(movie) {
          const list = document.querySelector('#movie-list')

          const row = document.createElement('tr')

          row.innerHTML = `
          <td>${movie.title}</td>
          <td>${movie.director}</td>
          <td>${movie.rating}</td>
          <td><a href="#" class="btn btn-sm btn-danger delete">X</a></td>
          `;
          list.appendChild(row)
      }
      static showAlert(message, className) {
          const div = document.createElement('div')
          div.className = `alert alert-${className}`
          div.appendChild(document.createTextNode(message))
          const container = document.querySelector('.container')
          const form = document.querySelector('#movie-form')
          container.insertBefore(div, form)
      }

      static deleteMovie(el){
            if(el.classList.contains('delete')) {
                el.parentElement.parentElement.remove()
            }
      }

      static clearFields() {
        document.querySelector('#title').value = ''
        document.querySelector('#director').value = ''
        document.querySelector('#rating').value = ''
      }
}
//STORE CLASS: HANDLES STORAGE

//EVENT: DISPLAY BOOKS  
document.addEventListener('DOMContentLoaded', UI.displayMovies)

//EVENT: ADD A BOOK

const submit = document.querySelector('#movie-form')

submit.addEventListener('submit', (e) => {

    e.preventDefault()
    //GRAB THE VALUES
    const title = document.querySelector('#title').value
    const director = document.querySelector('#director').value
    const rating = document.querySelector('#rating').value

    if (title === "" || director === '' || rating === ''){
        UI.showAlert('Please fill in all fields', 'danger')
    } else {
    //INSTANTIATE NEW MOVIE
    const movie = new Movie(title, director, rating)

    console.log(movie)

    //ADD BOOK TO LIST

    UI.addMovieToList(movie)

    //RESET FIELDS
    UI.clearFields()
    }
})

//EVENT REMOVE A BOOK

const remove = document.querySelector('#movie-list')

remove.addEventListener('click', (e) => {
    UI.deleteMovie(e.target)
})