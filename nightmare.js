var Nightmare = require('nightmare');
var nightmare = new Nightmare();
nightmare
.goto('http://www.google.com.tw')
.type('input[id="lst-ib"]', 'apple')
.click('input[type="submit"]')
.wait()
.evaluate(function () {
   return document.documentElement.innerHTML;
}, function (res) {
   console.log(res);
})
.run();
