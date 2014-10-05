var fs = require('fs'),
PNG = require('pngjs').PNG;

var filename = 'CheckCode.png';

fs.createReadStream(filename)
  .pipe(new PNG({
      filterType: 4
  }))
  .on('parsed', function() {

    for (var y = 1; y < this.height - 1; y ++) {
      for (var x = 1; x < this.width - 1; x ++) {
        var idx00 = (this.width * (y-1) + (x-1)) << 2;
        var idx01 = (this.width * (y-1) +  x)    << 2;
        var idx02 = (this.width * (y-1) + (x+1)) << 2;
        var idx10 = (this.width *  y    + (x-1)) << 2;
        var idx11 = (this.width *  y    +  x)    << 2;
        var idx12 = (this.width *  y    + (x+1)) << 2;
        var idx20 = (this.width * (y+1) + (x-1)) << 2;
        var idx21 = (this.width * (y+1) +  x)    << 2;
        var idx22 = (this.width * (y+1) + (x+1)) << 2;

        if (((this.data[idx00] !== 255 && this.data[idx00+1] !== 255 && this.data[idx00+2] !== 255) &&
             (this.data[idx22] !== 255 && this.data[idx22+1] !== 255 && this.data[idx22+2] !== 255)) ||
            ((this.data[idx01] !== 255 && this.data[idx01+1] !== 255 && this.data[idx01+2] !== 255) && 
             (this.data[idx21] !== 255 && this.data[idx21+1] !== 255 && this.data[idx21+2] !== 255)) ||
            ((this.data[idx02] !== 255 && this.data[idx02+1] !== 255 && this.data[idx02+2] !== 255) &&
             (this.data[idx20] !== 255 && this.data[idx20+1] !== 255 && this.data[idx20+2] !== 255)) ||
            ((this.data[idx10] !== 255 && this.data[idx10+1] !== 255 && this.data[idx10+2] !== 255) &&
             (this.data[idx12] !== 255 && this.data[idx12+1] !== 255 && this.data[idx12+2] !== 255))) {
          this.data[idx11] = 0;
          this.data[idx11+1] = 0;
          this.data[idx11+2] = 0;
        }
      }
    }

    for (var y = 0; y < this.height; y ++) {
      for (var x = 0; x < this.width; x ++) {
        var idx = (this.width * y + x) << 2;
        if (this.data[idx] === 0 && this.data[idx+1] === 0 && this.data[idx+2] === 0) {
        } else if (this.data[idx] === 255 && this.data[idx+1] === 255 && this.data[idx+2] === 255) {
        } else {
          this.data[idx] = 255;
          this.data[idx+1] = 255;
          this.data[idx+2] = 255;
        }
      }
    }

    this.pack().pipe(fs.createWriteStream('black-or-white.png'));
});
