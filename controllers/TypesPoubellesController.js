//importation module "axios" pour faire des requêtes http
const axios = require('axios');
//importation fichier
const DechetsController = require('./DechetsController');

//création objet qui contient plusieurs méthodes
const TypePoubellesController = {
        findAll: async (req, res)=>{},
    findOne: async (req, res) => {},
    //fct asynchrone de création d'un nveau type de poubelle
    create: async (req, res) => {
            //récupération données envoyées ds le corps de la requete
            try{
            const TypePoubellesDatas = req.body;
            const TypesPoubelles = await axios.create(TypePoubellesDatas);
            // envoie une réponse avec un statut et les données recues
            res.status(201).json(TypePoubellesDatas);
        // capture des erreurs + vérification si erreur de validation Sequelize
        } catch(error){
            if(error.name === 'SequelizeValidationError'){
                    res.status(400).json({
                    error:"Données invalides",
                    details: error.error.map(error => ({
                        field: error.path,
                        message: error.message,
                    }))
                })
            }
        }
    },
}
//exportation de l'objet pr utilisation ds autres fichiers
module.exports = TypePoubellesController;