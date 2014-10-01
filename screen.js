var fs = require('fs');
var gm = require('gm').subClass({ imageMagick: true });
var gm_buffer = require('gm-buffer');

var filename = 'CheckCode.png';

function identify() {
    var readStream = fs.createReadStream(filename);
    gm(readStream, 'output.png')
    .identify(function (err, data) {
        console.log(err);
        if (!err) console.log(data)
    });
}

function to_buffer() {
    var buf = require('fs').readFileSync(filename);

    gm(buf, 'editing.png')
    .toBuffer('PNG',function (err, buffer) {
        if (err) return handle(err);
        console.log(buffer.length);
        console.log('done!');
    })
}

gm(filename)
    .buffer(function (err, buffer) {
        if (err) return handle(err);
        console.log(buffer);
        console.log('done!');
    })