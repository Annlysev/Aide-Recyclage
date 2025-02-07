import axios from "axios";

const BASE_URL = 'https://data.bep.be//api/explore/v2.1/catalog/datasets/guide-de-tri/records';


export const fetchGuideDeTri = async (limit = 100) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {limit},
        })
        return response.data;
    }catch(err) {
    console.error("Erreur de la récupération des données", err)}

}
