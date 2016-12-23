
function Model(data) {
  this.city = data.query.results.channel.location.city;
  this.region = data.query.results.channel.location.region;
  this.temp = data.query.results.channel.item.condition.temp;
  this.wind = data.query.results.channel.wind.speed;
  this.condition = data.query.results.channel.item.condition.text;
  this.forecast = data.query.results.channel.item.forecast;
  this.date = this.forecast[0].date;
}

var view = {
  "loadLocation": function(place) {
    var script = document.createElement('script');
    script.src = "https://query.yahooapis.com/v1/public/yql?q=select woeid from geo.places where text='" + place + "'&format=json&callback=placeCallback";
    document.body.appendChild(script);
  },
  "mainData": function(mod) {
    var loco = document.getElementById("loco");
    var date = document.getElementById("date");
    var temp = document.getElementById("temp");
    var wind = document.getElementById("wind");
    var cond = document.getElementById("cond");
    loco.textContent = mod.city + " ," + mod.region;
    date.textContent = mod.date;
    temp.textContent = mod.temp + " F°";
    wind.textContent = mod.wind + " MPH Wind";
    cond.textContent = mod.condition;
  },
  "createDay": function(mod, i) {
    var day = document.createElement("div");
    var date = mod.forecast[i].date
    var high = mod.forecast[i].high;
    var low = mod.forecast[i].low;
    var cond = mod.forecast[i].text;
    var h = document.createElement("h3");
    h.textContent = date;
    var h1 = document.createElement("h3");
    h1.textContent = "High: " + high;
    var h2 = document.createElement("h3");
    h2.textContent  = "Low: " + low;
    var h3 = document.createElement("h3");
    h3.textContent  = cond;
    day.appendChild(h);
    day.appendChild(h1);
    day.appendChild(h2);
    day.appendChild(h3);
    day.className = "day";
    return day;
  },
  "removeChildren": function(ans) {
    while (ans.firstChild)
      ans.removeChild(ans.firstChild);
  },
  "forecastData": function(mod) {
    var forecast = mod.forecast;
    var f = document.getElementById("forecast");
    this.removeChildren(f);
    for (var i = 0; i < 5; i++) {
      f.appendChild(this.createDay(mod, i));
    }
  },
};

function placeCallback(data) {
  var woeid = data.query.results.place[0].woeid;
  var script = document.createElement("script");
  script.src = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid='" + woeid + "' &format=json&callback=callbackFunction"
  document.body.appendChild(script);
}

function callbackFunction(data) {
  var model = new Model(data);
  view.mainData(model);
  view.forecastData(model);
}

function buttonAction() {
  var zip = document.getElementById("zip");
  view.loadLocation(zip.value);
}

function start() {
  view.loadLocation("davis, ca");
}
















