
  // Create the map object with options.
  let map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 12
  });

  // Create the tile layer that will be the background of our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);




function createHeat(response) {
    
    let heatArray = [];

    let stations = response.data.stations;
  
    for (let i = 0; i < stations.length; i++) {

        let station = stations[i];

        //console.log(location);
        heatArray.push([station.lat, station.lon]);

    }
  
      
    L.heatLayer(heatArray, {
      radius: 50,
      blur: 10
    }).addTo(map);


}


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(createHeat);
