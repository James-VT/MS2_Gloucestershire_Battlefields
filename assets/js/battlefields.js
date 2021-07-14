// The below is to test whether this file is linked properly to the index.html file
// and its button elements

let button = document.getElementById("tewkesbury-button");

function buttonTest() {
    console.log("button clicked");
}

button.addEventListener('click', buttonTest);

// The (document).ready below is to make sure the page has loaded properly before any JQuery/JavaScript is used

$(document).ready(function() {

    $("#tewkesbury-button").click(function() {
        $(".battle-title").text(`Battle of Tewkesbury`);
    })
});

/** The const below is for the map's centre coordinates. I've called this outside of the function itself as calling it inside failed to work. */

const properties = {"lat": 51.864445, "lng":-2.244444}

/** The code below is an attempt to make Google Maps API work - credit goes to Eamonn Smyth, a fellow student at Code Institute, for his excellent guide from which much code is taken for this section.
 * I have changed a number of parts, particularly the variable names.
 */
/** The function below creates the map */

function tewkesburyBattleInfo() {
    document.getElementById("battle-title").innerHTML(`Battle of Tewkesbury`)
}

function myMap() {

    /** The below code is to define the map's properties */

    const mapProperties = {

        /**The centre property below is where we centre our map - in our case, the city of Gloucester
         * We're using the .LatLng constructor here */

        center: properties,

        /**The zoom property is set to 8 as we're covering a fairly small area for this site */

        zoom: 8,
    };

    /** This is what creates the map itself - it goes in the div with the ID of "map" 
     * then it checks the properties variable object for the nod of what we want in it */

    const map = new google.maps.Map(document.getElementById("map"), mapProperties);

    /** Below we're adding some markers. Here are the coordinates for them, in an array of objects */

    const battleMarks = [{"lat": 51.9923, "lng": -2.1580, "name": "Tewkesbury"},
                         {"lat": 51.8472, "lng": -2.0978, "name": "Crickley Hill"},
                         {"lat": 51.6444, "lng": -2.2011, "name": "Beverston Castle"},
                         {"lat": 51.951708, "lng": -1.728297, "name": "Stow-on-the-Wold"},
                         {"lat": 51.4891, "lng": -2.373706, "name": "Deorham"},
                         {"lat": 51.688611, "lng": -2.456944, "name": "Berkeley Castle"}];

    /** Here's where we loop through the battleMarks objects */

    for(let i=0; i < battleMarks.length; i++) {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(battleMarks[i].lat, battleMarks[i].lng),
            map: map,
            title: battleMarks[i].name
        });
        /** This is where the code I got from Eamonn Smyth ends. */


        /** This is where we add event listeners to our markers */

        marker.addListener("click", () => {
            map.setZoom(9);
            map.setCenter(marker.getPosition());
            console.log("marker listener successful")
            tewkesburyBattleInfo()
        });
    }
}



/** And here we call the map itself */

myMap()