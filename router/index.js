const express = require('express');
const router = express.Router();
const DechetsRouter = require('./DechetsRouter');
const TypesPoubellesRouter = require('./TypesPoubellesRouter');

router.use("/Dechets", DechetsRouter);
router.use("/Poubelles", TypesPoubellesRouter);

module.exports = router;