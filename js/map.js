
// set our access token
mapboxgl.accessToken = 'pk.eyJ1IjoiY2FyaW5hc2F1dGVyIiwiYSI6ImNqMWpsZzdpczAxbGgyeW9hMTlyc29qY3kifQ.zJT88QY64l6lEkgvby2CFQ';

// create a new map using our div#map
// set the style, zoom, and center

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v9'
});



// add map controls
map.addControl(new mapboxgl.NavigationControl());

// function to call once the map has loaded
map.on('load', function() {
	console.log('map loaded!');

	// we'll use d3.json to load the point data asynchronously
	d3.json('../data/nyc_crashes.geojson', function(error, data) {

		// report an error if their was a problem getting the geojson data
		if (error) throw error;

		// filter out data with no geometry, otherwise MapboxGL throws an error and won't load data
		data.features = data.features.filter(function(d) {
			return d.geometry;
		});

		// add the source to the map styles
		map.addSource('crashes', {
			type: 'geojson',
			'data': data,
			// cluster: true,
			// clusterRadius: 10,
			// clusterMaxZoom: 12
		});

		// add the map layer
		map.addLayer({
			id: 'crashes',
			type: 'circle',
			source: 'crashes',
			'layout': {},
			'paint': {
				'circle-color': 'orange',
				'circle-opacity': 0.8,
				'circle-radius': 5,
			}
		});

	}); // end d3.json

}); // end map.on('load')


