var getRequest;
var pageNo = 1;

do {
    var url = 'https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=2011&page=' + pageNo;
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function () {
        console.log("inside function");
        //let data = JSON.parse(this.response);
        getRequest = request.status;
        console.log(getRequest);
    }
    pageNo++;
    request.send();
    console.log(getRequest);

} while (getRequest >= 200 && getRequest < 400);
console.log(getRequest);

