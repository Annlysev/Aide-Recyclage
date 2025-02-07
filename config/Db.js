//exportation objet avec param de connexion à la DB Postgre
module.exports = {
    //spécifie l'utilisation de la DB par Postgre
    dialect: "postgres",
    //indique que Postgre tourne sur le port
    port:5432,
    //définit l'hote comme localhost -> DB tourne sur la machine locale
    host:"localhost",
    //indication du nom de la DB
    database:"recyclage",
    //définit le mot de passe de la DB utilisé ds Postgre
    password: "Test1234=",
    //indique l'utilisateur Postgre
    username: "postgres"
};