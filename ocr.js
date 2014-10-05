var tesseract = require('node-tesseract');


// Recognize text of any language in any format
 tesseract.process('black-or-white.processed.png',function(err, text) {
    if(err) {
       console.error('ERR: ' + err);
    } else {
       console.log('CORRECT: ' + text);
    }
 });
