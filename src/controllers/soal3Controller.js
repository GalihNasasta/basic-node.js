const convertDecimal = (req, res) => {
    const { number, to } = req.body;
    let converted;
    
    switch (to) {
      case 'binary':
        converted = Number(number).toString(2);
        break;
      case 'octal':
        converted = Number(number).toString(8);
        break;
      case 'hexadecimal':
        converted = Number(number).toString(16).toUpperCase();
        break;
      default:
        return res.status(400).json({ error: 'Invalid target base' });
    }
  
    res.json({ original: number, converted, base: to });
  };
  
  const convertBinary = (req, res) => {
    const { number, to } = req.body;
    let converted;
  
    switch (to) {
      case 'decimal':
        converted = parseInt(number, 2);
        break;
      case 'octal':
        converted = parseInt(number, 2).toString(8);
        break;
      case 'hexadecimal':
        converted = parseInt(number, 2).toString(16).toUpperCase();
        break;
      default:
        return res.status(400).json({ error: 'Invalid target base' });
    }
  
    res.json({ original: number, converted, base: to });
  };
  
  const convertOctal = (req, res) => {
    const { number, to } = req.body;
    let converted;
  
    switch (to) {
      case 'decimal':
        converted = parseInt(number, 8);
        break;
      case 'binary':
        converted = parseInt(number, 8).toString(2);
        break;
      case 'hexadecimal':
        converted = parseInt(number, 8).toString(16).toUpperCase();
        break;
      default:
        return res.status(400).json({ error: 'Invalid target base' });
    }
  
    res.json({ original: number, converted, base: to });
  };
  
  const convertHexadecimal = (req, res) => {
    const { number, to } = req.body;
    let converted;
  
    switch (to) {
      case 'decimal':
        converted = parseInt(number, 16);
        break;
      case 'binary':
        converted = parseInt(number, 16).toString(2);
        break;
      case 'octal':
        converted = parseInt(number, 16).toString(8);
        break;
      default:
        return res.status(400).json({ error: 'Invalid target base' });
    }
  
    res.json({ original: number, converted, base: to });
  };
  
  module.exports = {
    convertDecimal,
    convertBinary,
    convertOctal,
    convertHexadecimal
  };