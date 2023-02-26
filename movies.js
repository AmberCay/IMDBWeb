class Movie {

    //constructor

    constructor(title, releaseYear, nationality, genre, photo) {
        this.title = title
        this.releaseYear = releaseYear
        this.nationality = nationality
        this.genre = genre
        this.actors = []
        this.writer
        this.director
        this.photo = photo
    }

    // methods
}

let fMRF = new Movie('Fantastic Mr Fox', 2009, 'American', 'Animation', 'https://www.themoviedb.org/t/p/original/pYbIT04CMXAbVEPj9mhFzcM73XS.jpg')
let ssT = new Movie('Starship Troopers', 1997, 'American', 'Comedy', 'https://image.tmdb.org/t/p/original/s7kzkCz6KfsjQz1yqQQOjgqHuWZ.jpg')

let moviesList = [fMRF, ssT]

jQuery(() => {

    $("#form-submit").on('click', () => {
        let title = $("#title").val(),
            releaseYear = $("#releaseYear").val(),
            nationality = $("#nationality").val(),
            genre = $("#genre").val(),
            photo = $("#photoURL").val()

        moviesList.push(new Movie(title,releaseYear,nationality,genre,photo))
        console.log(moviesList);
    })

    $("#nav-movies").on('click', () => {
        $("#movie-area").empty()
        for (const movie of moviesList) {
            $("#movie-area").append(`<div class="col">
                                        <div class="card mb-2" style="width: 18rem;">
                                            <img src="${movie.photo}" class="card-img-top img-fluid" alt="${movie.title}">
                                            <div class="card-body">
                                            <h5 class="card-title">${movie.title}</h5>
                                            <ul class="list-group list-group-flush" id="card-info">
                                                <li class="list-group-item">Release Year -- ${movie.releaseYear}</li>
                                                <li class="list-group-item">Nationality -- ${movie.nationality}</li>
                                                <li class="list-group-item">Genre -- ${movie.genre}</li>
                                                <li class="list-group-item">Actors -- ${movie.actors}</li>
                                                <li class="list-group-item">Release Year -- ${movie.releaseYear}</li>
                                                <li class="list-group-item">Writer -- ${movie.writer}</li>
                                                <li class="list-group-item">Director -- ${movie.director}</li>
                                            </ul>
                                            <div class="card-body">
                                            <a href="#" class="card-link">More info</a>
                                            </div>
                                        </div>
                                    </div>`)
                }
    })
})