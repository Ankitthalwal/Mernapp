import { backendurl } from "./Config";
export const makeunauthenticatedPOSTRequest = async (route, body) => {
    //route = api body = body
    //fetch api
    const response = await fetch(backendurl + route, {
        method: "POST",//by default it set is GET request so we need to set it at POST
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify(body),
    });
    const formattedresponse = await response.json();
    return formattedresponse;
};


//......................for song create
export const makeAuthenticatedPOSTRequest = async (route, body) => {
    //take cookies to get token so you can store data in database
    const token = getToken();
    const response = await fetch(backendurl + route, {
        method: "POST",//by default it set is GET request so we need to set it at POST
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,//for storing token 
        },
        body: JSON.stringify(body),
    });
    const formattedresponse = await response.json();
    return formattedresponse;
};



//......................get the song 
export const makeAuthenticatedGETRequest = async (route) => {//we doest not send body in GET request
    const token = getToken();
    const response = await fetch (backendurl + route, {
        method: "GET",//by default it set is GET request so we need to set it at POST
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,//for storing token 
        },
    });
    const formattedresponse = await response.json();
    return formattedresponse;
};


//take cookies to get token so you can store data in database
 
const getToken = () => {
    const accessToken = document.cookie.replace(
     /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1" 
    );
    return accessToken;
}


