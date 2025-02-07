//Déclaration de l'objet qui va contenir les différentes méthodes pour gerer les déchets
const DechetsController = {
    //def fct asynchrone qui récupère ts les déchets en fct d'un éventuel critère de recherche
    findAll: async (req, res) => {
        //gestion des erreurs potentielles
        try {
            //récupération veleur "search" depuis les param de la requette http
            const {search} = req.query;
            //init objet "where" qui sert de filtre pour la requete
            const where = {}
            //filtre les résultats en fct de l'ID
            if (search) {
                where.id = search;
            }
            //exécution d'une requete pour récupération de ts les déchets selon le critère "where"
            const result = await Dechets.findAll(where)
            //envoie la réponse avec un statut 200 et les données en format JSON
            res.status(200).json({data: result});
        //capture des erreurs
        } catch (err) {
            //affichage de l'erreur ds la console pour debug
            console.error("error in findAll", err);
            //retour d'une réponse avec statut 500 si erreur
            res.status(500).json({
                error: "erreur serveur"
            });
        }
    },
    //def méthode pr récupération élément clé primaire
    findByPk: async (req, res) => {
        //def méthode
        create: async (req, res) => {
          // tentative de création d'un élt récupérant "search" depuis les param de requete
          // et en revoyant directement la donnée reçue.
          try{
              const {search} = req.query;
              res.status(201).json({data:search});
          //capture les erreurs + vérification si erreur provient d'une validaation du Sequelize
          }catch(err){
              if(err.name === "SequelizeValidationError"){
                  //si erreur , renvoie un statut avec détails des erreurs de validation
                  return res.status(400).json({
                      error:"Données invalides",
                      details:err.errors.map(error =>({
                      field: error.path,
                      message: error.message,
                  }))
                  })
              }
              // si erreur est diff de valeur de validation -> message à la console
              console.error("Error in findByPk", err);
              res.status(500).json({
                  error:"Erreur serveur"
              })
          }
      }},
      //déclaration des méthodes
      update: async (req, res) => {},
      destroy: async (req, res) => {}
    }
//exportation du contrôleur pour utilisation ds d'autres fichiers
module.exports = DechetsController;