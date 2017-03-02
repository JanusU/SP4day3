var btn = document.getElementById("fetch");
var output = document.getElementById("output");
var url = "http://localhost:8084/ajaxandjson/QuoteServlet";
var config = {method: 'get'};



function clickHandler(evt) {
    var promise = fetch(url, config);

    promise.then(function (response) {
        return response.text();
    }).then(function (text) {
        output.innerText = text;
    });
}

btn.addEventListener("click", clickHandler);


//Interval på hver time
setInterval(clickHandler,36000000);