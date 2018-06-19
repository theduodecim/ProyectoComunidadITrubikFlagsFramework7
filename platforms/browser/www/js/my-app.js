// Initialize app
/*var myApp = new Framework7({
    myPlugin: {
        foo: 'bar'
    }
    
});*/

var myApp = new Framework7();
// If we need to use custom DOM library, let's save it to $$ variable:
/*var paper = paper;*/
var $$ = Dom7;
 










// VARIABLES GLOBALES
 var panelurl = "https://restcountries.eu/rest/v2/"
var pick = "";
var flagName = "";
var flagDescription = "";
var flagDescriptionText = "";
var flagImage;
var ENG = false;


var flagsConvinations = ["rgb", "rgo", "rgw", "rgy" , "rbw", "rbo", "gbw", "row", "bow", "gow",
 "gbo", "rby", "gby", "ory", "ogy", "oby", "wry", "wgy", "wby", "owy"];
 

var AmazonasVenz = "El estado Amazonas, oficialmente Estado Indígena de Amazonas​, es uno de los veintitrés estados que, junto con el Distrito Capital y" +
"las Dependencias Federales, forman la República Bolivariana de Venezuela. Su capital es Puerto Ayacucho." +
"Está ubicado al sur del país, en la región Guayana, " +
"limitando al norte con Apure y Bolívar, al este y sur con Brasil mediante la divisoria de aguas de las cuencas del Orinoco y Amazonas, y al oeste con Colombia." +
"Con 174 942 hab. en 2018 es el estado menos poblado, con 177 617 km², el segundo estado más extenso, por detrás de Bolívar, y con 1 habkm², el menos densamente poblado." +
"Posee 7 municipios autónomos y 25 parroquias civiles. Sus principales ciudades son: Puerto Ayacucho, La Esmeralda, San Fernando de Atabapo y San Carlos de Río Negro.";                
 
var AmazonasVenzEn = "Amazonas State (Spanish: Estado Amazonas) is one of the 23 states (estados) into which Venezuela is divided. It covers nearly a fifth of the area of Venezuela, but has less than 1% of Venezuela's population." +
"The state capital is Puerto Ayacucho. The capital until the early 1900s was San Fernando de Atabapo. Although named after the Amazon River, most of the state is drained by the Orinoco River. Amazonas State covers 176,899 km² and, in 2007, had a population of 142,200. Its density is 0.8 inhabitants per km²." +
"Amazonas has Venezuela's highest proportion of indigenous peoples of Venezuela; these make up only around 1.5% of the population nationwide, but the proportion is nearly 50% in Amazonas.";
 
 
var akiruno = "Akiruno es una ciudad situada" + "en la Prefectura de Tokio, Japón." +
"En 2008, la ciudad tenía una población estimada de 81.475 habitantes y una densidad de población de 1.084,63 personas por km². El área total es 73.34 km²." +
"La ciudad fue fundada el 1 de septiembre de 1995.";
 
var arukinoEn = "Akiruno (あきる野市 Akiruno-shi) is a city located in the western portion of Tokyo Metropolis, Japan. As of 1 February 2016," + 
   "the city had an estimated population of 80,464, and a population"+
   "density of 1100 persons per km². Its total area is 73.47 square kilometres (28.37 sq mi)";
  
 var cukarica= "Čukarica (en cirílico serbio: Чукарица) es un barrio y uno de los 17 municipios de Belgrado, la capital de Serbia." + 
  "Cubre 155 km² y tiene terrotirios tanto urbanos como suburbanos, situándose los primeros en la ciudad de Belgrado propiamente dicha. " + 
  "En el denso de 2002 registró 168.508 habitantes, estimándose su población en 175.057 personas al 31 de diciembre de 2005." +
  "Es la segunda municipalidad más poblada, después de Novi Beograd, pero la que registra el mayor crecimiento demográfico (cerce del 1% anual)." +
  "Pese a tener una zona rural, es un municipio muy densamente poblado, con 1.118 hab/km²."
 
var cukaricaEn = "The Municipality of Čukarica covers an area of 15,650 hectares, which is inhabited by a population of around 160,000." +
  "It got its name after the Čukar’s Inn and Čukar drinking fountain that were situated somewhere vis a vis the present-day Ada Ciganlija." +
  "By the decree of King Peter I dated December 30, 1911, the village of Čukarica was divided off from the municipality of Žarkovo into a separate municipality " +
  " and, therefore, that date is nowadays celebrated as the Day of the Municipality. During the first few years after the Second World War," +
 "it was the 7th urban region but, as of 1950, it has again had the status of the City municipality.Its patron day – The Holy Trinity , "  + 
  "the Municipality of Čukarica celebrates 50 days after Easter Day (a movable feast).";
  
var Azerbaijan   = "The Republic of Azerbaijan Is a country in the South Caucasus region of Eurasia at the crossroads of Eastern Europe and Western Asia." + 
"It is bounded by the Caspian Sea to the east, Russia to the north, Georgia to the northwest, Armenia to the west and Iran to the south." + 
"The exclave of Nakhchivan is bound by Armenia to the north and east," + 
"Iran to the south and west, and has an 11 km long border with Turkey in the north west.";

var AzerbaijanEn = "Oficialmente la República de Azerbaiyán es un país en la región del Cáucaso meridional de Eurasia en la encrucijada de Europa del Este y Asia Occidental" +
"Limita con el Mar Caspio al este, Rusia al norte, Georgia al noroeste, Armenia al oeste e Irán al sur. El exclave de Nakhchivan está atado por Armenia al norte y al este, Irán al sur y al oeste, " +
 "y tiene una frontera de 11 km de largo con Turquía en el noroeste.";
 
var algeriaEn = "Algeria, familary Algerian Arabicrench: Algérie), officially the People's Democratic Republic of Algeria, is a sovereign state in North Africa on the Mediterranean" +
 "The capital and most populous city is Algiers, located in the far north of the country. With an area of 2,381,741 square kilometres (919,595 sq mi), Algeria is the tenth-largest" +
  "country in the world, and the largest in Africa since South Sudan became independent from Sudan in 2011. " +
  "Algeria is bordered to the northeast by Tunisia, to the east by Libya, to the west by Morocco, to the southwest by the Western Saharan territory, Mauritania, and Mali, to the southeast by Niger, and to the north by the Mediterrane " +
  "Sea. The country is a semi-presidential" +
  "al republic consisting of 48 provinces and 1,541 communes (counties). Abdelaziz Bouteflika has been President since 1999.";
  
var algeria = "Argelia​ (en árabe, الجزائر, al-Yazā’ir; en bereber: ⴷⵣⴰⵢⴻⵔ, Dzayer; en francés, Algérie), oficialmente República Argelina Democrática y Popular" +
 " es uno de los cincuenta y cuatro países que forman el continente africano. Su capital y ciudad más poblada es Argel. Está ubicado al norte del continente " + 
 "limitando al norte con el mar Mediterráneo, al este con Túnez y Libia, al sur con Níger y Malí, al suroeste con Mauritania y al oeste con el territorio no autónomo de Sahara Occidental y Marruecos. " + 
 "Con 2 381 740 km² es el país más extenso del continente y con 33 333 216 habs. en 2008, el noveno más poblado, por detrás de Nigeria, Egipto, "  +
 "Etiopía, República Democrática del Congo, Sudáfrica, Tanzania, Kenia y Marruecos. ";
 
 var Żebbuġ = "Żebbuġ es uno de los sesenta y ocho consejos locales que conforman la actual organización territorial de la República de Malta, la cual entró en vigencia en el año 1993." +
 "La superficie de este consejo local maltés, localizado en la isla de Gozo, abarca una extensión de territorio de unos 7,6 kilómetros cuadrados de superficie. La población de esta división administrativa" +
 "se encuentra compuesta por un total de 1.770 personas (según las cifras que arrojaron el censo llevado a cabo en el año 2002)." +
  "Mientras que su densidad poblacional es de 233 habitantes por cada kilómetro cuadrado aproximadamente." 
 
 var ŻebbuġEn = "Żebbuġ (Maltese: Iż-Żebbuġ) is a small village overlooking the northwest coast of the island " +
"of Gozo in Malta. It is located close to Għarb and Għasri and is built on two hilltop plateaus, Ta'" + 
 "Abram and Ix-Xagħra taż-Żebbuġ. The fishing port and tourist resort" + 
"of Marsalforn lies within the Żebbuġ Council. The village has a population of 2,956" +
"(as of March 2014), which makes it the fifth largest in Gozo, after Xewkija." +
"With an area of 7.6 km2, Żebbuġ is the largest local council in Gozo by land area." + 
"The word Żebbuġ means" +  "olive trees" + ", a crop for which the village used to be noted," +
"although nowadays very few olive trees remain on the slopes" + 
"of Żebbuġ. The village is also well known for its fine lacework and for its nearby coastal beauty spots."
 
var Boyacá = "Boyacá es uno de los treinta y dos departamentos que, junto con Bogotá, Distrito Capital, forman la República de Colombia." + 
"Su capital es Tunja. Está ubicado en el centro-este del país, en la región andina, limitando al norte con Santander y Norte de Santander, al noreste con Venezuela y Arauca, al este con Casanare, " +
"al sur con Cundinamarca y al oeste con Caldas y Antioquia." + 
"Se creó durante la reforma constitucional de la Confederación Granadina del 22 de mayo de 1858.8​" + 
"En el territorio boyacense se libraron batallas determinantes para la independencia de Colombia." +
"Por este motivo, el libertador Simón Bolívar lo denominó Cuna y Taller de la Libertad " +
"y en su honor fue creada la Orden de Boyacá en 1819.10​"+
"El nombre de Boyacá proviene del vocablo muisca \"Boiaca\"  " +
"que significa \"Región de la Manta Real\" o \"Cercado del Cacique\" " + 
"el cual se deriva etimológicamente de las palabras boy (manta) y ca (cercado)​ " +
"Este nombre le fue dado al departamento en 1821 por el congreso de Cúcuta, en honor al río Boyacá " + 
"(nombre chibcha del río Teatinos), en el cual se encuentra el puente en donde se libró la batalla más determinante para la independencia de Colombia​  " +
"Antes del Congreso de Cúcuta, la jurisdicción del actual departamento hacía parte de la provincia de Tunja, recibiendo el mismo nombre de su ciudad capital, Tunja. ";
  
var BoyacáEn = "Boyacá (Spanish pronunciation: [boʝaˈka]) is one of the thirty-two departments of Colombia," +
"and the remnant of Boyacá State, one of the original nine states of the United States of Colombia" +
"Boyacá is centrally located within Colombia, almost entirely within the mountains of the Eastern Cordillera to the border with Venezuela," +
"although the western end of the department extends to the Magdalena River at the town of Puerto Boyacá." +
"Boyacá borders to the north with the Department of Santander, to the northeast with the Bolivarian Republic of Venezuela and Norte de Santander," + 
"to the east with the departments of Arauca and Casanare. To the south, Boyacá borders the department of Cundinamarca and to the west with the Department" + 
"of Antioquia covering a total area of 23,189 square kilometres (8,953 sq mi).[2] The capital of Boyacá is the city of Tunja." + 
"Boyacá is known as \"The Land of Freedom\" because this region" + 
"was the scene of a series of battles which led to Colombia's independence from Spain." + 
"The first one took place on 25 July 1819 in the Pantano de Vargas and the final and decisive battle known as the Battle" + 
"of Boyacá was fought on 7 August 1819 at Puente de Boyacá." + 
"Boyacá is home to three universities: the Universidad Pedagógica y Tecnológica de Colombia (UPTC), " + 
"the Universidad de Boyacá (UNIBOYACA), " + 
"and the Saint Thomas Aquinas University" 
 
 
 
 
 
 
 
 
 
 
 
var flagsRgbLenght4Test = ["Akiruno","Amazonas (Venezuela)","Cukarica"];
var flagsRgb = [
    "Akiruno","Amazonas (Venezuela)","Cukarica","Azerbaijan","Gabia","Bor","Belize",
    "Eritrea","Mauritius","Namibia","Oman","South Africa"
    ];
var flagsRgwLenght4Test = ["Żebbuġ, Gozo","Boyacá","Algeria"];
var flagsRgw = [
    "Algeria","Żebbuġ-Gozo","Boyacá","Bauma","Birgu","Bulgaria","Equatorial Guinea"," Bangladesh naval Ensign",
    "Somaliland","Santo Domingo","Heligoland","Groningen","Kuwait","Bulgaria Naval Ensign","Northern Province, Sri Lanka","Mexico",
    "Turkmenistan"
    ];
var flagsRgo = [
    "Sri Lanka", "Cusco","Zambia", "Ireland","Zambia"
    ];
var flagsRgy = [
    "Acre","Bolivia","Benin","Burkina Faso","Cameroon","Casanare","Congo","Ethiopia","Lithuania","Jagodina",
    "Dominica","Grenada","Mauritania"
    ];
var flagsRbw = [
    "Alagoas", "Attard","Australia","Puerto Rico","Russia","Schleswig-Holstein","Wyoming",
    "Anguilla","Canada","Finland","Luxembourg","Taiwan","South Korea"
    ];
var flagsRbo = [
    "Armenia","Bong","Arizona","Swaziland"
    ];
var flagsGbw = [
    "Australia","The Netherlands","Žužemberk","Azerbaijan", "Abruzzo", "Córdoba Colombia",
    "Djibouti","Jastrowie","Nicaragua","El Salvador","Guatemala"
    ];
var flagsRow = [
    "India","French Polynesia","Armenia","Papua New Guinea"
    ];
var flagsBow = [
    "Anguilla - Ensign", "Marshall Islands"
    ];
var flagsGow = [
    "Cyprus","Niger"
    ];
var flagsGbo = [
    "Karakalpakstan"
    ];
var flagsRby = [
    "Aragon","Democratic Republic of the Congo",
    ];
var flagsGby = [
    "Amapá","Brazil","Apure","Chocó","Dublin","Delta Amacuro","Bar","Christmas Island","Agadir"
    ];
var flagsOry = [
        "Los Angeles"
    ];
var flagsOgy = [
    "Bhután",
    ];
var flagsOby = [
    "Cojedes"
    ];
var flagsWry = [
    "Aranđelovac","Vatican City","Brunei"
    ];
var flagsWgy = [
    "Bobrovec","Bormla","Ehime","Caquetá Department","Koryaks","Imavere Parish"
    ];
var flagsWby = [
    "Argentina"
    ];
var flagsOwy = [
     "Central African Republic"
    ];
// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
  
  
   
 
 console.log(ENG);
 

 
 $$("#ENG").on("click", function() {
     
     
     
     
     if ($$('.picker-modal.modal-in').length > 0) {
    myApp.closeModal('.picker-modal.modal-in');
     }
  myApp.pickerModal(
    '<div id="picker" class="picker-modal">' +
    '<div class="backgroundpicker">' +
      '<div class="toolbar">' +
        '<div id="toolbarpicker" class="toolbar-inner">' +
          '<div class="left" id="changeENG">'+'<input class="botones" type="button"  align="center" id="changeENG" value="English Language"></input>'+ '</div>' +
          '<a id="closeButton" href="#" class="close-picker">Close</a>' +
        '</div>' +
      '</div>' +
      
        '<div id="innerpicker"  class="content-block">' +
          '<p>English language, West Germanic language of the Indo-European language family<p>'+
          '<p>that is closely related to Frisian, German, and Dutch (in Belgium called Flemish) languages. English originated in England and is the dominant language of the United States, the United Kingdom, Canada, Australia, Ireland, New Zealand, and various island nations in the Caribbean Sea and the Pacific Ocean. It is also an official language of India, the Philippines, Singapore, and many countries in sub-Saharan Africa, including South Africa. English is the first choice of foreign language in most other countries of the world, and it is that status that has given (100 of 13112 words)</p>' +
        '</div>' +
        '</div>' +
    '</div>'
  )
    
   $$("#changeENG").on("click", function(event) {
      ENG = $$("#ENG").val();
      ENG = true;
      console.log(ENG);
      if(ENG == true) {
     $$("#tutorialWelcome").text("Welcome"); 
     $$("#tutorialQuote").text("It's time to explore the world with Rubik's Cube Flags");
     $$("#tutorialInstruction").text("First Press the Cube and Get the your colors of the day!." + "\n" + "Seccond, Now you got the colors press the Explore" + "to know more about your new Flag!");
     $$("#leftpanelnews").text("News");
     $$("#leftpanelquote").text("Which place of the world you are going visit today?");
     $$("#leftpanelinformation").text("If you donate 5 US$ or more," +
          "you can ask us us to update the database with" + " " +
          "5 of your favorite flags, if they are not yet in the database." +
          "After the donation, send the list of chosen flags to rubiksflags@gmail.com");
      }
      $$(".picker-modal").remove();
  });  
 });
 
 
    $$("#leftpanelbutton").on("click", function() {
        var  url = panelurl;
        $$.getJSON(url, function(request) {
            pick = request[Math.floor(Math.random() * request.length)];
        });
        $$("#ciudad").text(pick.name);
        $$("#icon").attr("src", pick.flag);
        $$("#timezones").text("La hora es: " + pick.timezones)
        $$("#population").text("Poblacion: " + pick.population);    
        $$("#region").text("Region: " + pick.region);          
        console.log("lpb:" + pick);
    });
        
 

 
 
 
 
  $$(".RubikTheflag").on("click", function(event) {
     console.log(event);
    var flagsConv = flagsConvinations.slice(0);
    var fRgb = flagsRgb.slice(0); 
    
    
    
    
    function randomConvinationFunction() {
    var randomConvination = Math.floor((Math.random() * 2) + 1)
     console.log(randomConvination)
    return randomConvination;
   
}
    //check case 0
    switch(randomConvinationFunction()) {
             case 1:
                 console.log("RGB working");
                    $$("#flagbutton1").css(
                        "background-color", "red");
                         $$("#flagbutton2").css(
                         "background-color", "blue")
                         $$("#flagbutton3").css(
                         "background-color", "green")
                             function randomrgbFlagFunction() {
                                   var randomConvination = Math.floor((Math.random() * flagsRgbLenght4Test.length) + 1)
                                   console.log("random RGBflagWorking");
                                   return randomConvination;
                                }
                                if(randomrgbFlagFunction() != null) {
                                     switch(randomrgbFlagFunction()) {
                                        case 1:
                                            console.log("rgbflag3");
                                            console.log("amazonas");
                                            flagName = $$("#flagname").text("Amazonas (Venezuela)");
                                            flagDescription = $$("<p>").text(AmazonasVenz);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Amazonas_State.svg/100px-Flag_of_Amazonas_State.svg.png")
                                            .css("height", "70px")
                                            .css("width", "145px")
                                            .css("border-style", "inset");
                                            console.log(flagDescription);
                                            if(ENG == true) {
                                            console.log("rgbflag1");
                                            flagName = $$("#flagname").text("Amazonas (Venezuela)");
                                            flagDescription = $$("<p>").text(AmazonasVenzEn);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Amazonas_State.svg/100px-Flag_of_Amazonas_State.svg.png")
                                            .css("height", "70px")
                                            .css("width", "145px")
                                            .css("border-style", "inset");
                                            console.log(flagDescription);
                                            }
                                       break; 
                                         case 2:
                                            console.log("rgbflag3");
                                            console.log("Akiruno");
                                            flagName = $$("#flagname").text("Akiruno");
                                            flagDescription = $$("<p>").text(akiruno);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/1/15/Flag_of_Akiruno%2C_Tokyo.svg")
                                            .css("height", "70px")
                                            .css("width", "145px")
                                            .css("border-style", "inset");
                                            console.log(flagDescription);
                                            if(ENG == true) {
                                            console.log("rgbflag2ENG working");
                                            flagName = $$("#flagname").text("Akiruno");
                                            flagDescription = $$("<p>").text(arukinoEn);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Amazonas_State.svg/100px-Flag_of_Amazonas_State.svg.png")
                                            .css("height", "70px")
                                            .css("width", "145px")
                                            .css("border-style", "inset");
                                            console.log(flagDescription);
                                            }
                                        break; 
                                         case 3:
                                            console.log("rgbflag3");
                                            console.log("Curika");
                                            flagName = $$("#flagname").text("Cukarica");
                                            flagDescription = $$("<p>").text(cukarica);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/COA_Cukarica.png/100px-COA_Cukarica.png")
                                            .css("height", "70px")
                                            .css("width", "145px")
                                            .css("border-style", "inset");
                                            console.log(flagDescription);
                                            if(ENG == true) {
                                            console.log("rgbflag3");
                                            flagName = $$("#flagname").text("Cukarica");
                                            flagDescription = $$("<p>").text(cukaricaEn);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/COA_Cukarica.png/100px-COA_Cukarica.png")
                                            .css("height", "70px")
                                            .css("width", "145px")
                                            .css("border-style", "inset");
                                            console.log(flagDescription);
                                            }
                                          break; 
                                     }
                                };
                                
                    break;
                    
      case 2:
                 console.log("RGW working");
                    $$("#flagbutton1").css(
                        "background-color", "red");
                         $$("#flagbutton2").css(
                         "background-color", "green")
                         $$("#flagbutton3").css(
                         "background-color", "white")
                             function randomrgbFlagFunction() {
                                   var randomConvination = Math.floor((Math.random() * flagsRgwLenght4Test.length) + 1)
                                   console.log("random RGBflagWorking");
                                   return randomConvination;
                                }
                                if(randomrgbFlagFunction() != null) {
                                     switch(randomrgbFlagFunction()) {
                                        case 1:
                                            console.log("rgwflag1");
                                            console.log("Żebbuġ");
                                            flagName = $$("#flagname").text("Żebbuġ");
                                            flagDescription = $$("<p>").text(Żebbuġ);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_%C5%BBebbu%C4%A1%2C_Gozo.svg/500px-Flag_of_%C5%BBebbu%C4%A1%2C_Gozo.svg.png")
                                            .css("height", "70px")
                                            .css("width", "145px")
                                            .css("border-style", "inset");
                                            console.log(flagDescription);
                                            if(ENG == true) {
                                            console.log("rgwflag1");
                                            flagName = $$("#flagname").text("Żebbuġ");
                                            flagDescription = $$("<p>").text(ŻebbuġEn);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_%C5%BBebbu%C4%A1%2C_Gozo.svg/500px-Flag_of_%C5%BBebbu%C4%A1%2C_Gozo.svg.png")
                                            .css("height", "70px")
                                            .css("width", "145px")
                                            .css("border-style", "inset");
                                            console.log(flagDescription);
                                            }
                                       break; 
                                         case 2:
                                            console.log("rgwflag2");
                                            console.log("Boyacá");
                                            flagName = $$("#flagname").text("Boyacá");
                                            flagDescription = $$("<p>").text(Boyacá);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_Boyac%C3%A1_Department.svg")
                                            .css("height", "70px")
                                            .css("width", "145px")
                                            .css("border-style", "inset");
                                            console.log(flagDescription);
                                            if(ENG == true) {
                                            console.log("rgbflag2ENG working");
                                            flagName = $$("#flagname").text("Boyacá");
                                            flagDescription = $$("<p>").text(BoyacáEn);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_Boyac%C3%A1_Department.svg")
                                            .css("height", "70px")
                                            .css("width", "145px")
                                            .css("border-style", "inset");
                                            console.log(flagDescription);
                                            }
                                        break; 
                                         case 3:
                                            console.log("rgwflag3");
                                            console.log("algeria");
                                            flagName = $$("#flagname").text("algeria");
                                            flagDescription = $$("<p>").text(algeria);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/900px-Flag_of_Algeria.svg.png")
                                            .css("height", "70px")
                                            .css("width", "145px")
                                            .css("border-style", "inset");
                                            console.log(flagDescription);
                                            if(ENG == true) {
                                            console.log("rgbflag1");
                                            flagName = $$("#flagname").text("Cukarica");
                                            flagDescription = $$("<p>").text(cukaricaEn);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/900px-Flag_of_Algeria.svg.png")
                                            .css("height", "70px")
                                            .css("width", "145px")
                                            .css("border-style", "inset");
                                            console.log(flagDescription);
                                            }
                                          break; 
                                     }
                                };
                                
                    break;
                    
    };
    
    
   
   /*var left = $$('.RubikTheflag').offset().left;*/ // Get the calculated left position
 /* console.log(right);*/
 function randomcubecolors() {
         var randomConvination = Math.floor((Math.random() * 4) + 1)
         console.log("random RGWflagWorking");
         return randomConvination;
      }
 
 switch (randomcubecolors()) {
     case 1:
        $$(".RubikTheflag").css("background-color", "red");
  $$("#button1").css("background-color", "blue");
  $$('.cube').transform('rotate(180deg)');
      break;
       case 2:
        $$(".RubikTheflag").css("background-color", "green");
  $$("#button1").css("background-color", "yellow");
  $$('.cube').transform('rotate(90deg)');
         break;
     case 3:
        $$(".RubikTheflag").css("background-color", "yellow");
  $$("#button1").css("background-color", "blue");
  $$('.cube').transform('rotate(-90deg)');
         break;
           case 4:
        $$(".RubikTheflag").css("background-color", "orange");
        $$("#button1").css("background-color", "red");
        $$('.cube').transform('rotate(-180deg)');
         break;
 }

   
  
    
  })
  /* if(flagName == null) {*/
      /* <button class="checkFlag" id="checkflagbutton"><a id="checkflagText" align="center" href="page2.html" >Explore <p id="flagname"></p> </a></button><br>*/
    /*var exploreButton =  $$('<a style="background-color: red" id="checkflagText" align="center" href="page2.html">Explore</a>');
    $$("#buttonexplorehere").append(exploreButton)*/
    
    
       
  $$("#checkflagText").on("click", function(event) {
      flagName =  $$("#flagname").text();
      flagDescriptionText = flagDescription.text();
      console.log(flagImage);
      console.log(flagDescriptionText);
     /* appendTo("#textdescription");*/
  })



});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})
// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;
  if (page.name === 'Page2') {
   // Following code will be executed for page with data-page attribute equal to "about"
      $$("#flagNamePage2").text(flagName);
      $$("#textdescription").text(flagDescriptionText);
      $$(flagImage).appendTo("#flagimg2");
    }
    
  /*
   if (page.name === 'paperbackground') {
     /* var rectangle = new Rectangle ([200, 200], [200,300]); 
      var path = new Path.Rectangle(rectangle);
      path.style = {
          fillColor: '#272727',
          styleColor: '#',
          strokeWidth: 20
      };     
    
    
    
    
    //PAPER PLUGIN NIGHTMARE HOURS
  /*  Framework7.prototype.plugins.myPlugin = function (app, params) {
    	var canvas = document.getElementById('tagtree');
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		// Create a Paper.js Path to draw a line into it:
		var path = new paper.Path();
		// Give the stroke a color
		path.strokeColor = 'black';
		var start = new paper.Point(250, 100);
		// Move to start and draw a line from there
		path.moveTo(start);
		// Note that the plus operator on Point objects does not work
		// in JavaScript. Instead, we need to call the add() function:
		path.lineTo(start.add([ 200, -50 ]));
		// Draw the view now:
		paper.view.draw();
		console.log(params.foo)
};     */
    // Only executed our code once the DOM is ready.
		// Get a reference to the canvas object
	

    
    
    

 /*   if (page.name === 'about') {
     Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }*/
    
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})