const client = require('cheerio-httpcli');
const request = require('request');
var fs = require('fs');

// 최초 URL
var url = 'http://www.clien.net/service/search';

let getKeywordSearchingUrl = (keyword) => client.fetch(url, {q: keyword})
.then(function (result) {
    var pageNumber = 0;
    for(let i = 0; i < 10; i++) {
        page = i + 1;
        let url = result.$.documentInfo().url + "&sort=accuracy&p="+ i + "&boardCd=&isBoard=false";
        printHttpClienResponse(url, page);
    }
});

let printHttpClienResponse = (urls, page) => client.fetch(
  urls
  , page
  , (err, $, res, body)=>{
        var data = "";
        let aList = $("div.search_list").find(".list_item").find(".list_title");

        for(let i = 0; i < aList.length; i++) {
          data += $(aList[i]).text();
        }
        fs.writeFile("NUGU"+page, data, function(err) {
          if(err) {
              res.status(500).send('Internal Server Error');
          }
        });
      }
);

getKeywordSearchingUrl('nugu');
