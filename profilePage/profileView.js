// profile view. - Profilside.

function drawProfilePageView() {
    app.innerHTML = drawMenu() + /*HTML*/`
    
    <button onclick="editProfilePage()">Rediger Profil</button>
    
    <div class="profileImageContainer">
        <img class="styleProfileImage" src="${model.input.editProfile.image}">
    </div>

    <div class="profileTexttBoxContainer">
        <div class="profileBioTextBox">
            <p>Litt Bio</p>
            <li>...</li>
            <li>...</li>
            <li>...</li>
        </div>
        <div class="profileMovieList">
            <p>Favoritt Filmer</p>
            <li>...</li>
            <li>...</li>
            <li>...</li>
        </div>
        <div class="profileMovieReviewsList">
            <p>Film Omtaler</p>
            <li>...</li>
            <li>...</li>
            <li>...</li>
        </div>
    </div>
    `;
}
