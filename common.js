// Hovedcontroller.

function getUser(userID) {
    return model.data.user.find(user => userID == userID);
}

function getUserByUsername(userName) { 
    return model.data.user.find(user => userName == userName);
}
