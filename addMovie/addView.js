// add movie view.

function drawAddMoviePage() {
    app.innerHTML = drawMenu() + /*HTML*/`
    
    <div class="addMovieContainer">

    <h3>Legg til filmer</h3>
    <input placeholder="Tittel" onchange="model.input.addMovie.title = this.value">
    <input placeholder="Sjanger" onchange="model.input.addMovie.genre = this.value">
    <input placeholder="Årstall" onchange="model.input.addMovie.year = this.value">
    <button onclick="addMovieButton()">Legg til</button>
    </div>

    `;
}
