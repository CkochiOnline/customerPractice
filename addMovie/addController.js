// add movie controller.

function addMovieButton() {
    let addMovieInput = model.input.addMovie;

    let newMovie = {
        movieID: model.data.movieList.length,
        title: addMovieInput.title,
        genre: addMovieInput.genre,
        year: addMovieInput.year,
    }

    model.data.movieList.push(newMovie);
}

function addMoviePage() {
    model.app.currentPage = 'addMoviePage';
    updateView();
}
