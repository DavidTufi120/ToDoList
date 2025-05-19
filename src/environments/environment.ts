export const environment = {
    production: false,
    apiUrl: 'http://localhost:8080',
    auth0: {
        domain: 'dev-g4yrelejlbyatexp.us.auth0.com',
        clientId: 'SDrF9aHEP5U2gvHBuqXoZl7ymhYX2lla',
        authorizationParams: {
            redirect_uri: 'http://localhost:4200/ToDoList/login'
        }
    }
}