const express = require('express');
const router = express.Router();

// NEW
router.get('/entries/new', (req, res) => {
    res.render('entries-new', {});
})
module.exports = router;