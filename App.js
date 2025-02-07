const express = require('express');
const db = require('./models');
// const router = require ('./router');

const app = express();
const PORT = process.env.PORT;

const initDbConnection = async () => {
    try{
        await db.sequelize.sync({force:true})
        console.log('DB synchronisée')
    } catch(err){
        console.error('Erreur de synchronisation',err);
    }
}
initDbConnection();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})


