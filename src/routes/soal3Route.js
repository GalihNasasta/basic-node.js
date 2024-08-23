const express = require('express');
const router = express.Router();

const {
  convertDecimal,
  convertBinary,
  convertOctal,
  convertHexadecimal
} = require('../controllers/soal3Controller');

router.post('/decimal', convertDecimal);
router.post('/binary', convertBinary);
router.post('/octal', convertOctal);
router.post('/hexadecimal', convertHexadecimal);

module.exports = router;