$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search_book.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:zh-CN"
    }
  ],
  "line": 2,
  "name": "图书搜索",
  "description": "允许客户迅速找到自己喜欢的图书",
  "id": "图书搜索",
  "keyword": "功能"
});
formatter.scenario({
  "line": 5,
  "name": "根据发布年限找图书",
  "description": "",
  "id": "图书搜索;根据发布年限找图书",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 6,
  "name": "有一本书叫\u0027三国演义\u0027,作者是\u0027罗贯中\u0027,发布于20130314",
  "keyword": "假如"
});
formatter.step({
  "line": 7,
  "name": "另外一本书叫\u0027水浒传\u0027,作者是\u0027施耐庵\u0027,发布于20140823",
  "keyword": "同时"
});
formatter.step({
  "line": 8,
  "name": "另外一本书叫\u0027西游记\u0027,作者是\u0027吴承恩\u0027,发布于20130101",
  "keyword": "同时"
});
formatter.step({
  "line": 9,
  "name": "客户搜索发布于2013年和2014年的图书时",
  "keyword": "当"
});
formatter.step({
  "line": 10,
  "name": "能找到3本书",
  "keyword": "那么"
});
formatter.step({
  "line": 11,
  "name": "第1本书叫\u0027三国演义\u0027",
  "keyword": "并且"
});
formatter.step({
  "line": 12,
  "name": "第2本书叫\u0027水浒传\u0027",
  "keyword": "并且"
});
formatter.step({
  "line": 13,
  "name": "第3本书叫\u0027西游记\u0027",
  "keyword": "并且"
});
formatter.match({
  "arguments": [
    {
      "val": "三国演义",
      "offset": 6
    },
    {
      "val": "罗贯中",
      "offset": 16
    },
    {
      "val": "20130314",
      "offset": 24
    }
  ],
  "location": "BookSearchSteps.addNewBook(String,String,Date)"
});
formatter.result({
  "duration": 200502011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "水浒传",
      "offset": 7
    },
    {
      "val": "施耐庵",
      "offset": 16
    },
    {
      "val": "20140823",
      "offset": 24
    }
  ],
  "location": "BookSearchSteps.addNewBook(String,String,Date)"
});
formatter.result({
  "duration": 314851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "西游记",
      "offset": 7
    },
    {
      "val": "吴承恩",
      "offset": 16
    },
    {
      "val": "20130101",
      "offset": 24
    }
  ],
  "location": "BookSearchSteps.addNewBook(String,String,Date)"
});
formatter.result({
  "duration": 316964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2013",
      "offset": 7
    },
    {
      "val": "2014",
      "offset": 13
    }
  ],
  "location": "BookSearchSteps.setSearchParameters(Date,Date)"
});
formatter.result({
  "duration": 456730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 3
    }
  ],
  "location": "BookSearchSteps.verifyAmountOfBooksFound(int)"
});
formatter.result({
  "duration": 2385987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 1
    },
    {
      "val": "三国演义",
      "offset": 6
    }
  ],
  "location": "BookSearchSteps.verifyBookAtPosition(int,String)"
});
formatter.result({
  "duration": 137955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 1
    },
    {
      "val": "水浒传",
      "offset": 6
    }
  ],
  "location": "BookSearchSteps.verifyBookAtPosition(int,String)"
});
formatter.result({
  "duration": 93278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 1
    },
    {
      "val": "西游记",
      "offset": 6
    }
  ],
  "location": "BookSearchSteps.verifyBookAtPosition(int,String)"
});
formatter.result({
  "duration": 117730,
  "status": "passed"
});
});