// view.

updateView();
function updateView() {

    let page = model.app.currentPage;

    if (page == 'loginPage') {
        drawLoginView()
    }
    else if (page == 'startPage') {
        drawStartPageView()
    }
    else if (page == 'createUserPage') {
        drawCreateUserView()
    }
    else if (page == 'profilePage') {
        drawProfilePageView()
    }
    else if (page == 'editProfilePage') { 
        drawEditProfilePage()
    }
    else if (page == 'mainPage') {
        drawMainPageView()
    }
    else if (page == 'addMoviePage') {
        drawAddMoviePage()
    }
}
