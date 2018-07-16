var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var client = require('cheerio-httpcli');
var app = express();

// setting
app.locals.pretty = true;
app.set('views', './views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false}));
// routing
app.get('/search', function(req, res){
  res.render('search');
});
// post
app.post('/search_list', function(req, res) {
  var keyword = req.body.keyword;
  printHttpClienResponse(keyword);
  /*fs.writeFile('data/'+ keyword, description, function(err){
      if(err) {
        res.status(500).send('Internal Server Error');
      }
      res.send(description);
  });*/
})

// listen
app.listen(3000, function() {
  console.log("Connected, 3000 port!");
});

let printHttpClienResponse = (keyword) => client.fetch(
  'http://www.clien.net/service/search'
  , {q : keyword}
  , (err, $, res, body) => {
        var data = "";
        var docInfo = $.documentInfo();
        console.log(docInfo.url);
        let aList = $("div.search_list").find(".list_item").find(".list_title")
        for(let i = 0; i < aList.length; i++) {
          data += $(aList[i]).text();
        }
        fs.writeFile('data/clein' + keyword, data, function(err) {
          if(err) {
              res.status(500).send('Internal Server Error');
          }
        });
  }
);
