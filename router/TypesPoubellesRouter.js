const router = require("express").Router();
const TypesPoubellesControlller = require("../controllers/TypesPoubellesController");

router.get('/', TypesPoubellesRouter.findAll);
router.post('/', TypesPoubellesRouter.create);
router.patch('/:id',() => {});
router.delete('/:id',() => {});

module.exports = router;