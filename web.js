var Nightmare = require('nightmare');
new Nightmare()
  .goto('http://www.googleß.com')
    .type('#lst-ib', 'github nightmare')
    .click('input[name="btnK"]')
    .run(function (err, nightmare) {
      if (err) return console.log(err);
      console.log(nightmare);
      console.log('Done!');
    });