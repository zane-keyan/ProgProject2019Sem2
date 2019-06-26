import React, { Component } from "react";
import { connect } from "react-redux";
import {  withGoogleMap, GoogleMap  } from "google-maps-react";
import Script from 'react-load-script';


var map, marker;
var startPos = [42.42679066670903, -83.29210638999939];
var speed = 50; // km/h


var delay = 100;

class SimulationMap extends Component {

  render() {
    const GoogleMapExample = withGoogleMap(props => (
       <GoogleMap
         defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
         defaultZoom = { 13 }
       >
       </GoogleMap>
    ));


    return(
       <div>
         <GoogleMapExample
           containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
           mapElement={ <div style={{ height: `100%` }} /> }
         />
       </div>
    );
    }
  }



// animateMarker(marker, coords, km_h)
// {
//     var target = 0;
//     var km_h = km_h || 50;
//     coords.push([startPos[0], startPos[1]]);
    
//     function goToPoint()
//     {
//         var lat = marker.position.lat();
//         var lng = marker.position.lng();
//         var step = (km_h * 1000 * delay) / 3600000; // in meters
//         var dest = new google.maps.LatLng(
//         coords[target][0], coords[target][1]);
        
//         var distance = 2;
        
        
//         var numStep = distance / step;
//         var i = 0;
//         var deltaLat = (coords[target][0] - lat) / numStep;
//         var deltaLng = (coords[target][1] - lng) / numStep;
        
//         function moveMarker()
//         {
//             lat += deltaLat;
//             lng += deltaLng;
//             i += step;
            
//             if (i < distance)
//             {
//                 marker.setPosition(new google.maps.LatLng(lat, lng));
//                 setTimeout(moveMarker, delay);
//             }
//             else
//             {   marker.setPosition(dest);
//                 target++;
//                 if (target == coords.length){ target = 0; }
                
//                 setTimeout(goToPoint, delay);
//             }
//         }
//         moveMarker();
//     }
//     goToPoint();
// }

// initialize()
// {
//     var myOptions = {
//         zoom: 16,
//         center: new google.maps.LatLng(42.425175091823974, -83.2943058013916),
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//     map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    
//     marker = new google.maps.Marker({
//         position: new google.maps.LatLng(startPos[0], startPos[1]),
//         map: map
//     });
    
//     google.maps.event.addListenerOnce(map, 'idle', this.animateMarker( marker, [
//             // The coordinates of each point you want the marker to go to.
//             // You don't need to specify the starting position again.
//             [42.42666395645802, -83.29694509506226],
//             [42.42300508749226, -83.29679489135742],
//             [42.42304468678425, -83.29434871673584],
//             [42.424882066428424, -83.2944130897522],
//             [42.42495334300206, -83.29203128814697]
//         ], speed)
//     );
// }







export default SimulationMap;
