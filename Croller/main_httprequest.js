var client = require('cheerio-httpcli');
var word = '신사역 맛집';

let printHttpClienResponse = (word) => client.fetch(
  'http://www.clien.net/service/search'
  , {q : word}
  , (err, $, res, body)=>{
        let aList = $("div.search_list").find(".list_item").find(".list_title")
        for(let i = 0; i < aList.length; i++) {
          console.log($(aList[i]).text());
          //console.log($(aList[i]).attr('href'));
        }
      }
);

let keywordList = [
    "nugu",
    "AI 스피커",
]

for(let keyword of keywordList) {
    printHttpClienResponse(keyword);
}
