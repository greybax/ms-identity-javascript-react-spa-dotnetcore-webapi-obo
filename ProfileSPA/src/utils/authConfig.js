import { UserAgentApplication } from "msal";

// For a full list of msal.js configuration parameters, 
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
export const msalApp = new UserAgentApplication({
    auth: {
        clientId: "c33a6b4b-a79b-432b-bd15-e4900976c2ab",
        authority: "https://login.microsoftonline.com/consumers",
        validateAuthority: true,
        redirectUri: "http://localhost:3000",
        navigateToLoginRequestUrl: false
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
    },
});

// Coordinates and required scopes for your web api
export const apiConfig = {
    resourceUri: "https://localhost:44351/api/profile/",
    resourceScope: "https://msaltestingjs.onmicrosoft.com/TodoListClient-and-Service/access_as_user"
}

/** 
 * Scopes you enter here will be consented once you authenticate. For a full list of available authentication parameters, 
 * visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
 */
export const loginRequest = {
    scopes: ["openid", "profile", "User.Read"]
}

// Add here scopes for access token to be used at the API endpoints.
export const tokenRequest = {
    scopes: [apiConfig.resourceScope]
}