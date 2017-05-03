mapboxgl.accessToken = 'pk.eyJ1IjoiY2FyaW5hc2F1dGVyIiwiYSI6ImNqMWpsZzdpczAxbGgyeW9hMTlyc29qY3kifQ.zJT88QY64l6lEkgvby2CFQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center:[-87.622498, 41.834082],
    zoom: 9,
    scrollZoom: false
});

var center_lat = 41.834082;

document.getElementById("address").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        document.getElementById("showlocation").click();
    }
});


//add map controls
map.addControl(new mapboxgl.NavigationControl());

// function to call once the map has loaded
map.on('load', function() {
    // console.log('map loaded!');

    // we'll use d3.json to load the point data asynchronously
    d3.json('data/abandoned_chicago.geojson', function(error, data) {

        // report an error if their was a problem getting the geojson data
        if (error) throw error;

        // filter out data with no geometry, otherwise MapboxGL throws an error and won't load data
        data.features = data.features.filter(function(d) {
            return d.geometry;
        });


        // add the source to the map styles
        map.addSource('homes', {
            type: 'geojson',
            'data': data,
            //cluster: true,
            // clusterRadius: 10,
            // clusterMaxZoom: 12
        });



        map.addSource('centerpoint',{
            'type': 'geojson',
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-87.622498, 41.834082]
                    }
                }]
            }
        });

        map.addLayer({
            id: 'centerpoint',
            type: 'circle',
            source: 'centerpoint',
            'layout': {
                'visibility': 'none'
            },
            'paint': {
                'circle-color': '#000000'
            }
        });



        var createGeoJSONCircle = function(center, radiusInKm, points) {
            if(!points) points = 64;

            var coords = {
                latitude: center[1],
                longitude: center[0]
            };

            var km = radiusInKm;

            var ret = [];
            var distanceX = km/(111.320*Math.cos(coords.latitude*Math.PI/180));
            var distanceY = km/110.574;

            var theta, x, y;
            for(var i=0; i<points; i++) {
                theta = (i/points)*(2*Math.PI);
                x = distanceX*Math.cos(theta);
                y = distanceY*Math.sin(theta);

                ret.push([coords.longitude+x, coords.latitude+y]);
            }
            ret.push(ret[0]);

            return {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [ret]
                        }
                    }]
                }
            };
        };

        const metersToPixelsAtMaxZoom = (meters, latitude) =>
        meters / 0.075 / Math.cos(latitude * Math.PI / 180)


        // add the impact layers

        map.addLayer({
            id: 'yellow',
            type: 'circle',
            source: 'homes',
            'layout': {},
            'paint': {
                'circle-color': 'yellow',
                'circle-opacity': 0.3,
                'circle-stroke-width': 0.1,
                'circle-stroke-color': 'orange',
                'circle-stroke-opacity': 0.8,
                "circle-radius": {
                    stops: [
                    [0, 0],
                    [20, metersToPixelsAtMaxZoom(137.16, center_lat)]
                    ],
                    base: 2
                },
            }
        });


        map.addLayer({
            id: 'orange',
            type: 'circle',
            source: 'homes',
            'layout': {},
            'paint': {
                'circle-color': 'orange',
                'circle-opacity': 0.3,
                "circle-radius": {
                    stops: [
                    [0, 0],
                    [20, metersToPixelsAtMaxZoom(91.44, center_lat)]
                    ],
                    base: 2
                },
            }
        });


        map.addLayer({
            id: 'red',
            type: 'circle',
            source: 'homes',
            'layout': {},
            'paint': {
                'circle-color': 'red',
                'circle-opacity': 0.3,
                "circle-radius": {
                    stops: [
                    [0, 0],
                    [20, metersToPixelsAtMaxZoom(45.72, center_lat)]
                    ],
                    base: 2
                },
            }
        });



        map.addLayer({
            id: 'homes',
            type: 'circle',
            source: 'homes',
            'layout': {},
            'paint': {
                'circle-color': 'grey',
                'circle-opacity': 0.8,
                'circle-radius': {
                    'base': 1.75,
                    'stops': [[12, 2], [22, 180]]
                },
            }
        });


        // Create a popup, but don't add it to the map yet.
        var popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });

        map.on('mouseenter', 'homes', function(e) {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            var tooltip_date = 'Date of service request:  ';
            var tooltip_boarded ='Open or boarded:  ';
            var tooltip_occupied = 'Vacant or occupied:  ';

            var table_ini = '<table><tr><th>';

            
            popup.setLngLat(e.features[0].geometry.coordinates)
                .setHTML(table_ini.concat(tooltip_date,'</th><th>',e.features[0].properties.date_service_received,'</th></tr></table>','<p style="font-size: 12px;">This property is <i>',e.features[0].properties.open_or_boarded,'</i> and <i>',e.features[0].properties.vacant_or_occupied,'</i>.</p>'))
                .addTo(map);
        });

        map.on('mouseleave', 'homes', function() {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });
        // disable drag and zoom handlers

    }); // end d3.json

}); // end map.on('load')



function myFunction() {
    var address = document.getElementById('address').value;
    var google_endpoint = 'https://maps.googleapis.com/maps/api/geocode/json?';
    var google_token = 'AIzaSyAVu5x4ezPVUSr6BEQ8I41BN65R6w8D5uI';
    var address = address.replace(' ', '+');
    var address = address.concat("+Chicago");
    var bbox = '-87.940267,41.619036|-87.463531,42.089561';

    
    var query = google_endpoint.concat('address=',address,'&','bounds=',bbox,'&','key=',google_token);


    //http://stackoverflow.com/questions/247483/http-get-request-in-javascript
    var HttpClient = function() {
        this.get = function(aUrl, aCallback) {
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.onreadystatechange = function() {
                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                    aCallback(anHttpRequest.responseText);
            }
            anHttpRequest.open( "GET", aUrl, true );
            anHttpRequest.send( null );
        }
    }

    var client = new HttpClient();
    client.get(query, function(response) {
        // do something with response
        var center_loc = JSON.parse(response);

        var center_lat = center_loc.results[0].geometry.location.lat;
        var center_lon = center_loc.results[0].geometry.location.lng;


        map.getSource('centerpoint').setData({
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [center_lon, center_lat]
                }
            }]
        });


        map.setLayoutProperty('centerpoint', 'visibility', 'visible');


        map.flyTo({
            center: [center_lon, center_lat],

            zoom: 14,
            speed: 0.5
        })



    }); // close client

} // close function


function myFunction2 () {

    map.flyTo({
        center:[-87.622498, 41.834082],
        zoom: 9,
        speed: 0.5
    })

    map.setLayoutProperty('centerpoint', 'visibility', 'none');


}