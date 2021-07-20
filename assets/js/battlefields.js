// The below is to test whether this file is linked properly to the index.html file
// and its button elements

let button = document.getElementById("tewkesbury-button");

function buttonTest() {
    console.log("button clicked");
}

button.addEventListener('click', buttonTest);

/** The (document).ready below is to make sure the page has loaded properly before any JQuery is used for the buttons

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
                        "combatants": "The House of York versus the House of Lancaster",
                        "outcome": "Yorkist victory",
                        "detailed": "The Battle of Tewkesbury, which took place on 4 May 1471, was one of the decisive battles of the Wars of the Roses in England. The forces loyal to the House of Lancaster were completely defeated by those of the rival House of York under their monarch, King Edward IV. The Lancastrian heir to the throne, Edward, Prince of Wales, and many prominent Lancastrian nobles were killed during the battle or executed. The Lancastrian king, Henry VI of England, who was a prisoner in the Tower of London, died or was murdered shortly after the battle. Tewkesbury restored political stability to England until the death of Edward IV in 1483"},
                         {"lat": 51.8472, "lng": -2.0978, 
                         "name": "Battle of Crickley Hill", 
                         "date": "~3,300 BC", 
                         "combatants": "Combatants unknown",
                         "outcome": "Outcome unknown; settlement defences partially levelled"}
                         {"lat": 51.6444, "lng": -2.2011, 
                         "name": "Battle of Beverston Castle", 
                         "date": "1644",
                         "combatants": "Royalists versus Parliament",
                         "outcome": "Parliamentarian victory; Beverston's defences slighted"},
                         {"lat": 51.951708, "lng": -1.728297,
                         "name": "Battle of Stow-on-the-Wold", 
                         "date": "21 March 1646", 
                         "combatants": "Royalists versus Parliament",
                         "outcome": "Parliamentarian victory"},
                         {"lat": 51.4891, "lng": -2.373706, 
                         "name": "Battle of Deorham", 
                         "date": "577 AD", 
                         "combatants": "West Saxons versus Britons",
                         "outcome": "West Saxon victory",
                         "detailed": "The Battle of Deorham (or Dyrham) was a decisive military encounter between the West Saxons and the Britons of the West Country in 577. The battle, which was a major victory for Wessex's forces led by Ceawlin and his son, Cuthwine, resulted in the capture of the Brythonic cities of Glevum (Gloucester), Corinium Dobunnorum (Cirencester), and Aquae Sulis (Bath). It also led to the permanent cultural and ethnic separation of Dumnonia (Devon and Cornwall) from Wales. The Anglo-Saxon Chronicle is the only source that mentions the Battle of Deorham. Although it gives few details, it describes the battle as a major engagement. It was fought at Hinton Hill near Dyrham in South Gloucestershire."},
                         {"lat": 51.66, "lng": -2.3985, 
                         "name": "Battle of Nibley Green", 
                         "date": "20th March 1470", 
                         "combatants": "Thomas Talbot, 2nd Viscount Lisle versus William Berkeley, 2nd Baron Berkeley",
                         "outcome": "William Berkely, 2nd Baron Berkeley, victorious",
                         "detailed": "The Battle of Nibley Green was fought near North Nibley in Gloucestershire on 20 March 1470, between the troops of Thomas Talbot, 2nd Viscount Lisle and William Berkeley, 2nd Baron Berkeley. It is notable for being the last battle fought in England entirely between the private armies of feudal magnates. Lisle and Berkeley had long been engaged in a dispute over the inheritance of Berkeley Castle and the other Berkeley lands, Lisle being heir-general to Thomas de Berkeley, 5th Baron Berkeley and Berkeley heir-male. Lisle impetuously challenged Berkeley to a battle, and the latter agreed, the battle to be fought the next day at Nibley Green. Lisle paid for his rashness with his life"}];

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
            $(".battle-outcome").text(`${battleMarks[i].outcome}`)
        });
    }
    
    /** This is where we build our buttons I've used panTo instead of setCentre as I prefer the */

    $("#tewkesbury-button").click(function() {
        $(".battle-title").text(`Battle of Tewkesbury`);
        $(".battle-date").text(`4 May 1471`);
        $(".battle-combatants").text(`The House of York versus the House of Lancaster`);
        $(".battle-outcome").text(`Yorkist victory`);
        $(".battle-detailed").text(`The Battle of Tewkesbury, which took place on 4 May 1471, was one of the decisive battles of the Wars 
        of the Roses in England. The forces loyal to the House of Lancaster were completely defeated by those of the rival House of York under 
        their monarch, King Edward IV. The Lancastrian heir to the throne, Edward, Prince of Wales, and many prominent Lancastrian nobles were 
        killed during the battle or executed. The Lancastrian king, Henry VI of England, who was a prisoner in the Tower of London, died or was 
        murdered shortly after the battle. Tewkesbury restored political stability to England until the death of Edward IV in 1483`),
        map.setZoom(9);
        let tewksCoords = {"lat": 51.9923, "lng": -2.1580};
        map.panTo(tewksCoords);
    })

    $("#crickley-button").click(function() {
        $(".battle-title").text(`Battle of Crickley Hill`);
        $(".battle-date").text(`~3,300 BC`);
        $(".battle-combatants").text(`Combatants unknown`);
        $(".battle-outcome").text(`Outcome unknown; settlement defences partially levelled`)
        map.setZoom(9);
        let crickleyCoords = {"lat": 51.8472, "lng": -2.0978};
        map.panTo(crickleyCoords);
    })

    $("#beverston-button").click(function() {
        $(".battle-title").text(`Battle of Beverston Castle`);
        $(".battle-date").text(`1644`);
        $(".battle-combatants").text(`Royalists versus Parliament`);
        $(".battle-outcome").text(`Parliamentarian victory; Beverston's defences slighted`)
        map.setZoom(9);
        let beverstonCoords = {"lat": 51.6444, "lng": -2.2011};
        map.panTo(beverstonCoords);
    })

    $("#stow-button").click(function() {
        $(".battle-title").text(`Battle of Stow-on-the-Wold`);
        $(".battle-date").text(`21 March 1646`);
        $(".battle-combatants").text(`Royalists versus Parliament`);
        $(".battle-outcome").text(`Parliamentarian victory`)
        map.setZoom(9);
        let stowCoords = {"lat": 51.951708, "lng": -1.728297};
        map.panTo(stowCoords);
    })

    $("#deorham-button").click(function() {
        $(".battle-title").text(`Battle of Deorham`);
        $(".battle-date").text(`577 AD`);
        $(".battle-combatants").text(`West Saxons versus Britons`);
        $(".battle-outcome").text(`West Saxon victory`)
        map.setZoom(9);
        let deorhamCoords = {"lat": 51.4891, "lng": -2.373706};
        map.panTo(deorhamCoords);
    })

    $("#nibley-button").click(function() {
        $(".battle-title").text(`Battle of Nibley Green`);
        $(".battle-date").text(`20th March 1470`)
        $(".battle-combatants").text(`Thomas Talbot, 2nd Viscount Lisle versus William Berkeley, 2nd Baron Berkeley`);
        $(".battle-outcome").text(`William Berkely, 2nd Baron Berkeley, victorious`)
        map.setZoom(9);
        let nibleyCoords = {"lat": 51.66, "lng": -2.3985};
        map.panTo(nibleyCoords);
    })

}

/** And here we call the map itself */

myMap()