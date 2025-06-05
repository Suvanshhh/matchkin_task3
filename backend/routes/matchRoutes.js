const express = require('express');
const router = express.Router();
const { matchConsultants } = require('../controllers/matchController');
const { authenticateJWT, authorizeRoles } = require('../middleware/authMiddleware');

router.post('/match', authenticateJWT, authorizeRoles('client'), matchConsultants);

module.exports = router;
