var fs = require('fs'),
PNG = require('pngjs').PNG;

var filename = 'CheckCode.png';

fs.createReadStream(filename)
  .pipe(new PNG({
      filterType: 4
  }))
  .on('parsed', function() {

    for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
            var idx = (this.width * y + x) << 2;
            if (this.data[idx] !== 0 ||
                this.data[idx + 1] !== 0 ||
                this.data[idx + 2] !== 0
              ) {
              this.data[idx] = 255;
              this.data[idx+1] = 255;
              this.data[idx+2] = 255;
            }
        }
    }

    this.pack().pipe(fs.createWriteStream('black-or-white.png'));
});
