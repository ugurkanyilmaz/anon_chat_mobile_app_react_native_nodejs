const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth.routes'));
router.use('/matches', require('./match.routes'));
router.use('/messages', require('./message.routes'));
router.use('/claims', require('./claim.routes'));
router.use('/reports', require('./report.routes'));
router.use('/referrals', require('./referral.routes'));
router.use('/notifications', require('./notification.routes'));
router.use('/blocks', require('./block.routes'));

router.get('/', (req, res) => res.json({ ok: true }));

module.exports = router;
