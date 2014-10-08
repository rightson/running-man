console.log('Loading a web page');
var page = require('phantomjs').create();
var url = 'http://www.phantomjs.org/';
page.open(url, function (status) {
  //Page is loaded!
  phantom.exit();
});