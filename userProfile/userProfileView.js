// user profile view.

function drawUserProfile() {
    let user = getUser(model.app.selectedProfileID);

    let html = '';
    html += /*HTML*/`
    ${header()}
    <main>
        <div> Brukernavn: ${user.name}</div>
        <div> Omtaler: ${findTotalRewievsUser(user.userID).length}</div>

        <div>
        Alle Omtaler:
        ${viewAllReviewsUser(user.userID)}
        </div>
    </main>
    `

    app.innerHTML = drawMenu() + html;
}

function viewAllReviewsUser(userID) {
    let html = '';
    let reviews = findTotalRewievsUser(userID);
    reviews.foreach(r => { 
        html += /*HTML*/`
        <div><h3>${getMovieByID(r.movieID).title}</h3>
        
        `
    })
}