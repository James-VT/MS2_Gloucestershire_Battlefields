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

const properties = {"lat": 12, "lng":100}

/** The code below is an attempt to make Google Maps API work - credit goes to Eamonn Smyth, a fellow student at Code Institute, for his excellent guide from which much code is taken for this section */
/** The function below creates the map */
function myMap() {

    /** The below code is to define the map's properties */
    const mapProperties = {

        /**The centre property below is where we centre our map - in our case, the city of Gloucester
         * We're using the .LatLng constructor here */
        center: properties,

        /**The zoom property is set to 8 as we're covering a fairly small area for this site */
        zoom: 5,
    };

    /** This is what creates the map itself - it goes in the div with the ID of "map" 
     * then it checks the properties variable object for the nod of what we want in it */
    const map = new google.maps.Map(document.getElementById("map"), mapProperties);
}

/** And here we call the map itself */
myMap()

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

