// edit profile view.

function drawEditProfilePage() {
    app.innerHTML = drawMenu() + /*HTML*/`

    <button onclick="">Fullfør Redigering</button>

    <div class="editProfileButtonContainer">
        <button class="editProfileButton" onclick="">Legg til Bilde</button> 
        <button class="editProfileButton" onclick="">Legg til Bio</button>
        <button class="editProfileButton" onclick="">Legg til Favorittfilmer</button>
    </div>
    `;
}
