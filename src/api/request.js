
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


//post offer
export const postOffer = async (offer) => {
    try {
        const response = await fetch(`http://localhost:8000/api/jobs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(offer)
        });
        const newOffer = await response.json();
        return newOffer;
    } 
    catch (error) {
        console.error("error", error);
        return null;
    }
};


//Delete offer
export const deleteOffer = async (_id) => {
    try {
        const response = await fetch(`http://localhost:8000/api/jobs/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const newOffer = await response.json();
        return newOffer;
    } catch (error) {
        console.error("error", error);
        return null;
    }
};


//put offer
export const putOffer = async (offer, id) => {
    try {
    
        const response = await fetch(`http://localhost:8000/api/jobs/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(offer)
        });
        const newOffer = await response.json();
        return newOffer;
    } catch (error) {
        console.error("error", error);
        return null;
    }
};

//search offer
export const getSearchOffer = async (search) => {
    try {
        const response = await fetch(`http://localhost:8000/api/jobs/search?${search}`);
        const offers = await response.json();
        return offers;
    } catch (error) {
        console.error("error", error);
        return null;
    }
}