// create user controller.

function createUserButton() {
    let createUser = model.input.createUser;

    if (!createUser.name ||
        !createUser.email ||
        !createUser.password ||
        !createUser.repeatPassword) {
        alert('Husk å fylle ut alle feltene');
        return;
    }

    if (createUser.password === createUser.repeatPassword) {
        let newUser = {
            userID: model.data.user.length,
            name: createUser.name,
            email: createUser.email,
            password: createUser.password,
        }
        model.data.user.push(newUser);
        
        // nuller ut inputs.
        
        createUser.name = '';
        createUser.email = '';
        createUser.password = '';
        createUser.repeatPassword = '';

        model.app.currentPage = 'loginPage';
        updateView();
    }
    else {
        alert('Passordene er ikke like, prøv igjen');
    }
}
