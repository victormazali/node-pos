const express = require('express')
const router = express.Router()
const logController = require('../controllers/log-controller')

router.get('/', logController.index)
router.get('/:logId', logController.show)

module.exports = router
