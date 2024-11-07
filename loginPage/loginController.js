// login controller.

function logIn() {

    let user = getUserByUsername(model.input.logIn.username);
    if (user.password == model.input.logIn.password) {
        model.app.currentPage = 'startPage';
        model.input.logIn.username = '';
        model.input.logIn.password = '';

        updateView();
    }
    else {
        alert('Feil passord. Prøv på nytt, eller registrer bruker');
    }
}

function createUser() {
    model.app.currentPage = 'createUserPage';
    updateView();
}
