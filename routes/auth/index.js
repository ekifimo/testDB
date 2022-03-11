const auth = require('../../controller/auth');
const router = require('express').Router();

router.post('/login', auth.login);
router.get('/logon', auth.Cek);

module.exports = router;