// login view.

function drawLoginView() {
    app.innerHTML = drawMenu() + /*HTML*/`
    
    <div class="logInContainer">

    <input placeholder="Brukernavn" onchange="model.input.logIn.username = this.value">
    <input type='password' placeholder="Passord" onchange="model.input.logIn.password = this.value">
    <button onclick="logIn()">Logg inn</button><br>
    
    <button onclick="createUser()">Registrer deg her</button>
    </div>
    `;
}
