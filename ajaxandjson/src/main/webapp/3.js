var output = document.getElementById("output");
var url = "http://localhost:8084/ajaxandjson/Time";
var config = {method: 'get'};



function clickHandler(evt) {
    var promise = fetch(url, config);

    promise.then(function (response) {
        return response.text();
    }).then(function (text) {
        output.innerText = text;
    });
}

setInterval(clickHandler,0);

//Interval på hver time


