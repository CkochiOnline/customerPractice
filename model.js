// model.

const app = document.getElementById('app');

const model = {

    app: {

        loggedInUser: null,          // brukeren som er inlogget.
        
        currentPage: 'loginPage',
        
        welcomeImage: 'IMG/film.rating.logo.jpg',

        navigationMenu: false,             // page navigasjon.
        filterMenu: false,               // filtrering av søk.

        errorMessage: '',
        selectedProfileID: null,     // brukerens ID.
    },


    input: {

        logIn: {                     // login.
            username: '',
            password: '',
        },

        createUser: {             // oprett profil / bruker.
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
        },

        editProfile: {               // rediger profil.
            name: '',
            image: 'IMG/pixel.art.baby.kanguroo.jpg',
            bio: '',
            favMovie: '',
        },

        addMovie: {                  // legg til film.
            title: '',
            genre: '',
            year: '',
        },

        search: {                    // søkemotor.
            text: '',
        },

        preview: {                  // rating og kommentar fra brukere.
            movieIndex: null,
        },
    },


    data: {

        user: [                      // data for bruker profilene.
            {
                userID: 0,
                name: 'Chris',
                email: 'chris@getacademy.no',
                password: '1234',
                image: 'IMG/pixel.art.baby.kanguroo.jpg',
                bio: '',
                favMovie: [],
                listComments: [],
            },
            {
                userID: 1,
                name: 'John',
                email: 'john@getacademy.no',
                password: '1234',
                image: null,
                bio: '',
                favMovie: [],
                listComments: [],
            },
            {
                userID: 2,
                name: 'Sophie',
                email: 'sophie@getacademy.no',
                password: '1234',
                image: null,
                bio: '',
                favMovie: [],
                listComments: [],
            },

            // movie update when ratings changes? Oppdateres i view.
        ],

        movieList: [                        // data for filmene. Med omtaler fra brukerne.
            {
                movieID: 0,
                title: 'From Hell',
                genre: 'horror/crime',
                year: '2001',
            },
            {
                movieID: 1,
                title: 'Kill Bill: Volume 1',
                genre: 'action/thriller',
                year: '2003',
            },
            {
                movieID: 2,
                title: 'Forest Gump',
                genre: 'comedy/romance',
                year: '1994',
            },
        ],

        preview: [
            {
                profileID: 0,
                movieID: 0,
                comments: 'Kjempekul!',
                rating: 3,
            },
            {
                profileID: 1,
                movieID: 1,
                comments: 'Helt rått',
                rating: 5,
            },
            {
                profileID: 2,
                movieID: 2,
                comments: 'Så fin!',
                rating: 4,
            },
        ],
    },
}
