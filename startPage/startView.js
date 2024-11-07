// start view. - Velkomstsiden etter login.

function drawStartPageView() {
    app.innerHTML = drawMenu() + /*HTML*/`

    <div class="welcomeButtonContainer">

    <button style="font-size: 120%" onclick="mainPage()">Hovedside</button>
    <button style="font-size: 120%" onclick="profilePage()">Profilside</button>

    </div>

    <div class="welcomeContainer">

    <h2>Velkommen!<h2>

    <img class="styleImage" src="${model.input.welcome.welcomeImage}">

    </div>
    `;
}
