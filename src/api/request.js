const API_KEY = "";
const BASE_URL = 'localhost:8000';

// get all Offers
export const getOffers = async () => {
    try {
        //déclaration d'un constante response de type fetch de type async
        const response = await fetch('http://localhost:8000/api/jobs');
        //déclaration d'une constante offers qui attend une reponse de type jsoon
        const offers = await response.json();
        //je retourne le offers
        return offers;
    } catch (error) {
        //en cas d'erreur je retourne null et je console.error
        console.error("error", error);
        return null;
    }
};

//get offer by id
export const getOfferById = async (_id) => {
    try {
        const response = await fetch(`http://localhost:8000/api/jobs/${_id}`);
        const offer = await response.json();
        return offer;
    } catch (error) {
        console.error("error", error);
        return null;
    }
};


