const express = require('express');
const { Join } = require('../controllers/Join');
const router = express.Router();

router.route("/").get(Join);

module.exports = router;