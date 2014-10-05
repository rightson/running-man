var tesseract = require('node-tesseract');


// Recognize text of any language in any format
 tesseract.process('Numbers.jpg',function(err, text) {
    if(err) {
       console.error('ERR: ' + err);
    } else {
       console.log('CORRECT: ' + text);
    }
 });
