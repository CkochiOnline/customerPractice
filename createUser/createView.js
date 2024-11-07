// create user view.

function drawCreateUserView() {
    app.innerHTML = /*HTML*/`

    <div class="createUserContainer">

    <h3>Opprett bruker</h3>

    <input placeholder='Brukernavn' onchange="model.input.createUser.name = this.value">
    <input placeholder='Epost' onchange="model.input.createUser.email = this.value">
    <input placeholder='Passord' onchange="model.input.createUser.password = this.value">
    <input placeholder='Gjenta Passord' onchange="model.input.createUser.repeatPassword = this.value">
    <button onclick="createUserButton()">Opprett bruker</button>
    </div>

    `;
}
