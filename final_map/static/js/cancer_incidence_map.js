
// Create the tile layer that will be the background.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 5.5,
	accessToken: API_KEY
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 5.5,
	accessToken: API_KEY
});


// Create a base layer that holds maps
let baseMaps = {
  "Ligth": light,
  "Dark": dark,
};

// Create layers
let recentTrend = new L.LayerGroup();
let predictionTrend = new L.LayerGroup();
let futurePredictionTrend = new L.LayerGroup();

// Create overlay object.
let overlays = {
  "Actual Trend": recentTrend,
  "Model Prediction": predictionTrend,
  "Future Trend": futurePredictionTrend
};

// Create map object
var myMap = L.map("map", {
  center: [39.0119, -98.4842],
  zoom: 5, //4.2
  layers: [light, recentTrend]
  // overlays: [recentTrend]
});

// Control map that allows to change which layers are visible.

L.control.layers(baseMaps, overlays, {
  collapsed: true,
}).addTo(myMap);

// geojson data
var link = "static/data/map_data.json";


//purple orange green
function chooseColor(recent_trend) {
  switch (recent_trend) {
  case "stable":
    return "#800076";
  case "falling":
    return "#74d600";
  case "rising":
    return "#ff4d01";
  default:
    return "#f4eee0";
  }
}


// // cadet blue bright green
// function chooseColor(recent_trend) {
//   switch (recent_trend) {
//   case "stable":
//     return "cadetblue";
//   case "falling":
//     return "#a0e600";
//   case "rising":
//     return "#910f0f";
//   default:
//     return "#f4eee0";
//   }
// }


// // cadet blue light green
// function chooseColor(recent_trend) {
//   switch (recent_trend) {
//   case "stable":
//     return "cadetblue";
//   case "falling":
//     return "lightgreen";
//   case "rising":
//     return "#910f0f";
//   default:
//     return "white";
//   }
// }

// Get GeoJSON data using d3.json

// Recent trend layer
d3.json(link).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data,{
    style: function(feature){
      return{
        color: "#dad4c7",
        fillColor:chooseColor(feature.properties.recent_trend),
        fillOpacity: 0.75,
        weight: 1
      }},
    onEachFeature: function(features, layer){
      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
        mouseover: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 1
                });
              },
        mouseout: function(event) {
          layer = event.target;
          layer.setStyle({
          fillOpacity: 0.75
                });
              },
              // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
              click: function(event) {
                myMap.fitBounds(event.target.getBounds());
              }
            })
      layer.bindPopup("<h3>County: " + features.properties.NAME + "</h3> <hr> <h4>Actual Trend: " + features.properties.recent_trend + "</h4><hr> <h4>Model Prediction: " + features.properties.prediction_trend + "</h4>")
    }
  }   ).addTo(recentTrend);
  recentTrend.addTo(myMap);
});


// Model trend layer
d3.json(link).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data,{
    style: function(feature){
      return{
        color: "#dad4c7",
        fillColor:chooseColor(feature.properties.prediction_trend),
        fillOpacity: 0.75,
        weight: 1
      }
    },
    onEachFeature: function(features, layer){
      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
        mouseover: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 1
                });
              },
        mouseout: function(event) {
          layer = event.target;
          layer.setStyle({
          fillOpacity: 0.75
                });
              },
              // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
              click: function(event) {
                myMap.fitBounds(event.target.getBounds());
              }
            })
      layer.bindPopup("<h3>County: " + features.properties.NAME + "</h3> <hr> <h4>Actual Trend: " + features.properties.recent_trend + "</h4><hr> <h4>Model Prediction: " + features.properties.prediction_trend + "</h4>")
    }

  }   ).addTo(predictionTrend);
  predictionTrend.addTo(myMap);
});


// Future trend layer
d3.json(link).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data,{
    style: function(feature){
      return{
        color: "#dad4c7",
        fillColor:chooseColor(feature.properties.future_prediction_trend),
        fillOpacity: 0.75,
        weight: 1
      };
    },
      onEachFeature: function(features, layer){
        layer.on({
          // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
          mouseover: function(event) {
            layer = event.target;
            layer.setStyle({
              fillOpacity: 1
                  });
                },
          mouseout: function(event) {
            layer = event.target;
            layer.setStyle({
            fillOpacity: 0.75
                  });
                },
                // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
                click: function(event) {
                  myMap.fitBounds(event.target.getBounds());
                }
              })
        layer.bindPopup("<h3>County: " + features.properties.NAME + "</h3> <hr> <h4>Past Trend: " + features.properties.recent_trend + "</h4><hr> <h4>Future Prediction: " + features.properties.future_prediction_trend + "</h4>")
      }
    }).addTo(futurePredictionTrend);
  futurePredictionTrend.addTo(myMap);
});



//ADD LEGEND?????



  // Here we create a legend control object.
  let legend = L.control({
    position: "bottomright"
  });
  

// Then add all the details for the legend
legend.onAdd = function() {
  let div = L.DomUtil.create("div", "info legend");

  const trends = ['Stable', 'Falling', 'Rising', 'No Data'];
  const colors = [
    "#800076",
    "#74d600",
    "#ff4d01",
    "#f4eee0"
  ];
// Looping through our intervals to generate a label with a colored square for each interval.
for (var i = 0; i < trends.length; i++) {
  console.log(colors[i]);
  div.innerHTML +=
    "<i style='background: " + colors[i] + "'></i><b> " + trends[i] + "</b><br>";
  }
  return div;
};

legend.addTo(myMap);





  // var legend = L.control({position: 'bottomleft'});
  // legend.onAdd = function (map) {

  // var div = L.DomUtil.create('div', 'info legend');
  // labels = ['<strong>Categories</strong>'],
  // categories = ['stable','rising','falling'];

  // for (var i = 0; i < categories.length; i++) {

  //         div.innerHTML += 
  //         labels.push(
  //             '<i class="circle" style="background:' + chooseColor(categories[i]) + '"></i> ' +
  //         (categories[i] ? categories[i] : '+'));

  //     }
  //     div.innerHTML = labels.join('<br>');
  // return div;
  // };
  // legend.addTo(myMap);


