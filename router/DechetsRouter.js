const router = require("express").Router();
const DechetsController = require("../controllers/DechetsController");

router.get('/', DechetsController.findAll);
router.post('/', DechetsController.create);
router.patch('/:id',()=>{});
router.delete('/id',() =>{});

module.exports = router;