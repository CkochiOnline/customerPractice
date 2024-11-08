// create user controller.

function createUserButton() {

    if (validateInputsCorrect()) {
        createAndAddUser()
        resetInputs()
        changeToLoginPage()
    }
    updateView();
}

function changeToLoginPage() {
    model.app.currentPage = 'loginPage';
}

function createAndAddUser() {
    let newUser = {
        userId: model.data.user.length,
        username: model.input.createUser.name,
        email: model.input.createUser.email,
        password: model.input.createUser.password,
        profilePicture: null,
    }

    addUserToData(newUser);
}

function passwordMatch() {
    if (model.input.createUser.password === model.input.createUser.repeatPassword) {
        return true;
    }
    else {
        return false;
    }
}

function fieldsEmpty(){
    let createUser = model.input.createUser;
    if (!createUser.name || 
        !createUser.email || 
        !createUser.password || 
        !createUser.repeatPassword){
        return true;
    }else{
        return false;
    }
}

function validateInputsCorrect(){
    if (fieldsEmpty()){
        model.app.errorMessage = 'Husk å fylle inn alle felter';
        return false;
    }
    else if(passwordMatch()){
       return true;
    }else {
        model.app.errorMessage ='Passordene er ikke like';
        return false;
    }
}

function addUserToData(user){
    model.data.user.push(user);
}

function resetInputs(){
    model.input.createUser.name = '';
    model.input.createUser.email = '';
    model.input.createUser.password = '';
    model.input.createUser.repeatPassword = '';
}

/*function createUserButton() {
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
} */
