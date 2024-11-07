// main view. - Hovedside for filmer.

function drawMainPageView() {
    app.innerHTML = drawMenu() + /*HTML*/`
    
    <button onclick="addMoviePage()">Legg til filmer</button>
    
    `;
}
