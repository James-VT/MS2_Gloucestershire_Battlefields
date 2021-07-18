// The below is to test whether this file is linked properly to the index.html file
// and its button elements

let button = document.getElementById("tewkesbury-button");

function buttonTest() {
    console.log("button clicked");
}

button.addEventListener('click', buttonTest);

/** The (document).ready below is to make sure the page has loaded properly before any JQuery is used for the buttons
 * This is where we build our buttons and what they do
 */

$(document).ready(function() {

 
});

/** The const below is for the map's centre coordinates. I've called this outside of the function itself as calling it inside failed to work. */

const properties = {"lat": 51.864445, "lng":-2.244444}

/** The code below is an attempt to make Google Maps API work - credit goes to Eamonn Smyth, a fellow student at Code Institute, for his excellent guide from which much code is taken for this section.
 * I have changed a number of parts, particularly the variable names.
 */
/** The function below creates the map */


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

    const battleMarks = [{"lat": 51.9923, "lng": -2.1580,
                        "name": "Battle of Tewkesbury", 
                        "date": "4 May 1471", 
                        "combatants": "The House of York versus the House of Lancaster"},
                         {"lat": 51.8472, "lng": -2.0978, 
                         "name": "Battle of Crickley Hill", 
                         "date": "~3,300 BC", 
                         "combatants": "Combatants unknown"},
                         {"lat": 51.6444, "lng": -2.2011, 
                         "name": "Battle of Beverston Castle", 
                         "date": "1644", "combatants": 
                         "Royalists versus Parliament"},
                         {"lat": 51.951708, "lng": -1.728297,
                         "name": "Battle of Stow-on-the-Wold", 
                         "date": "21 March 1646", 
                         "combatants": "Royalists versus Parliament"},
                         {"lat": 51.4891, "lng": -2.373706, 
                         "name": "Battle of Deorham", 
                         "date": "577 AD", 
                         "combatants": "West Saxons versus Britons"},
                         {"lat": 51.66, "lng": -2.3985, 
                         "name": "Battle of Nibley Green", 
                         "date": "20th March 1470", 
                         "combatants": "Thomas Talbot, 2nd Viscount Lisle versus William Berkeley, 2nd Baron Berkeley"}];

    /** Here's where we loop through the battleMarks objects */

    for(let i=0; i < battleMarks.length; i++) {
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(battleMarks[i].lat, battleMarks[i].lng),
            map: map,
            title: battleMarks[i].name
        });
        /** This is where the code I got from Eamonn Smyth ends. */


        /** This is where we add event listeners to our markers */
        /** Much of the inspiration for this code was taken from https://developers.google.com/maps/documentation/javascript/events#maps_event_simple-javascript, but I have changed it as needed */

        marker.addListener("click", () => {
            map.setZoom(9);
            map.panTo(marker.getPosition());
            console.log(battleMarks.LatLng);
            $(".battle-title").text(`${battleMarks[i].name}`);
            $(".battle-date").text(`${battleMarks[i].date}`);
            $(".battle-combatants").text(`${battleMarks[i].combatants}`);
        });
    }
    
    $("#tewkesbury-button").click(function() {
        $(".battle-title").text(`Battle of Tewkesbury`);
        $(".battle-date").text(`4 May 1471`);
        $(".battle-combatants").text(`The House of York versus the House of Lancaster`);
        map.setZoom(9);
        let tewksCoords = {"lat": 51.9923, "lng": -2.1580};
        map.panTo(tewksCoords);
    })

    $("#crickley-button").click(function() {
        $(".battle-title").text(`Battle of Crickley Hill`);
        $(".battle-date").text(`~3,300 BC`);
        $(".battle-combatants").text(`Combatants unknown`);
        map.setZoom(9);
        let crickleyCoords = {"lat": 51.8472, "lng": -2.0978};
        map.panTo(crickleyCoords);
    })

    $("#beverston-button").click(function() {
        $(".battle-title").text(`Battle of Beverston Castle`);
        $(".battle-date").text(`1644`);
        $(".battle-combatants").text(`Royalists versus Parliament`);
        map.setZoom(9);
        let beverstonCoords = {"lat": 51.6444, "lng": -2.2011};
        map.panTo(beverstonCoords);
    })

    $("#stow-button").click(function() {
        $(".battle-title").text(`Battle of Stow-on-the-Wold`);
        $(".battle-date").text(`21 March 1646`);
        $(".battle-combatants").text(`Royalists versus Parliament`);
        map.setZoom(9);
        let stowCoords = {"lat": 51.951708, "lng": -1.728297};
        map.panTo(stowCoords);
    })

    $("#deorham-button").click(function() {
        $(".battle-title").text(`Battle of Deorham`);
        $(".battle-date").text(`577 AD`);
        $(".battle-combatants").text(`West Saxons versus Britons`);
        map.setZoom(9);
        let deorhamCoords = {"lat": 51.4891, "lng": -2.373706};
        map.panTo(deorhamCoords);
    })

    $("#nibley-button").click(function() {
        $(".battle-title").text(`Battle of Nibley Green`);
        $(".battle-date").text(`20th March 1470`)
        $(".battle-combatants").text(`Thomas Talbot, 2nd Viscount Lisle versus William Berkeley, 2nd Baron Berkeley`);
        map.setZoom(9);
        let nibleyCoords = {"lat": 51.66, "lng": -2.3985};
        map.panTo(nibleyCoords);
    })

}

/** And here we call the map itself */

myMap()