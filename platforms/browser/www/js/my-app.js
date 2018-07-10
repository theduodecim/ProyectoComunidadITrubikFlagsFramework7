// Initialize app
/*var myApp = new Framework7({
    myPlugin: {
        foo: 'bar'
    }
    
});*/

var myApp = new Framework7();
// If we need to use custom DOM library, let's save it to $$ variable:
/*var paper = paper;*/
var $ 
var $$ = $;
// Required for side-effects










// VARIABLES GLOBALES
var panelurl = "https://restcountries.eu/rest/v2/";
var pick = "";
var flagName = "";
var flagDescription = "";
var flagDescriptionText = "";
var flagImage;
var flagImgcircle1;
var flagImgcircle2;
var flagImgcircle3;
var ENG = false;
var email = "";
var password = "";
var newEmail;
var newPassword;
var token;
 var  url = panelurl;
        $$.getJSON(url, function(request) {
            var comingrequest = request;
            pick = comingrequest[Math.floor(Math.random() * request.length)];
        });

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
 
var arukinoEn = "Akiruno (Akiruno-shi) is a city located in the western portion of Tokyo Metropolis, Japan. As of 1 February 2016," + 
   "the city had an estimated population of 80,464, and a population"+
   "density of 1100 persons per km². Its total area is 73.47 square kilometres (28.37 sq mi)";
  
 var cukarica= "Čukarica es un barrio y uno de los 17 municipios de Belgrado, la capital de Serbia." + 
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
"of Antioquia covering a total area of 23,189 square kilometres (8,953 sq mi). The capital of Boyacá is the city of Tunja." + 
"Boyacá is known as \"The Land of Freedom\" because this region" + 
"was the scene of a series of battles which led to Colombia's independence from Spain." + 
"The first one took place on 25 July 1819 in the Pantano de Vargas and the final and decisive battle known as the Battle" + 
"of Boyacá was fought on 7 August 1819 at Puente de Boyacá." + 
"Boyacá is home to three universities: the Universidad Pedagógica y Tecnológica de Colombia (UPTC), " + 
"the Universidad de Boyacá (UNIBOYACA), " + 
"and the Saint Thomas Aquinas University" 
 
 
var sriLanka = "Sri Lanka (de forma oficial, la República Democrática Socialista de Sri Lanka), Sri Lankā Prajathanthrika Samajavadi Janarajaya; es un país soberano insular de Asia, ubicado en pleno golfo de Bengala, cuya forma de gobierno es la república semipresidencialista. Su territorio está organizado en nueve provincias y veinticuatro distritos." +
"La isla fue conocida en la Antigüedad como «Lanka», «Lankadvīpa», «Simoundou», «Taprobane», «Serendib» y «Selan», llegando a ser denominada popularmente como la «isla de los mil nombres». Durante su colonización, la isla tomó el nombre de «Ceilán», que se siguió utilizando posteriormente. Su particular forma y su cercanía a la India hicieron que se la llame «La lágrima de la India»." +
"Debido a su ubicación en el camino de las principales rutas marítimas, Sri Lanka es un vínculo naval estratégico entre el Asia occidental y el sudeste asiático, y ha sido un centro de la religión y la cultura budista de la antigüedad. Hoy en día es un país multirreligioso y multiétnico, en el que casi un tercio de la población es seguidor de religiones distintas del budismo, en especial el hinduismo, el cristianismo y el islam. La comunidad cingalesa es la mayoritaria. Los tamiles, que se concentran en el norte y el este de la isla, constituyen la minoría étnica más importante. Otras comunidades incluyen los musulmanes árabes, malayos y los burghers." +
"Famosa por la producción y exportación de canela, té, café, caucho y coco, Sri Lanka cuenta con una progresiva y moderna economía industrial y el más alto ingreso per cápita en el Asia meridional. La belleza natural de Sri Lanka en sus bosques tropicales, playas y paisaje, así como su rico patrimonio cultural, la convierten en un destino turístico de fama mundial." +
"Después de más de dos mil años de gobiernos locales por reinos, partes de Sri Lanka fueron colonizadas por Portugal y los Países Bajos a partir del siglo XVI, antes de que el control de todo el país fuera cedido al Imperio británico en 1815. Durante la Segunda Guerra Mundial, Sri Lanka sirvió como una base importante para las fuerzas aliadas en la lucha contra el Imperio japonés. Un movimiento político nacionalista surgió en el país a principios del siglo XX, con el fin de obtener la independencia política, que fue finalmente concedida por los británicos después de las negociaciones de paz en 1948." +
"La historia de Sri Lanka ha estado marcada durante más de dos décadas por un conflicto étnico entre el gobierno nacional y el movimiento insurgente de los Tigres de Liberación del Eelam Tamil. A inicios de 2002, los dos bandos en conflicto acordaron un alto al fuego, el cual fue roto en reiteradas oportunidades por ambas partes. A principios de 2009, el gobierno nacional inició una ofensiva contra los Tigres, que duró varios meses y resultó en la aniquilación de la guerrilla y la muerte de sus altos mandos, pero a un altísimo costo de vidas civiles."
 
var sriLankaEn = " Sri Lanka, officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia, located in the Indian Ocean to the southwest of the Bay of Bengal and to the southeast of the Arabian Sea. It is separated from the Indian subcontinent by the Gulf of Mannar and the Palk Strait. The legislative capital, Sri Jayawardenepura Kotte, is a suburb of the commercial capital and largest city, Colombo." + 
"Sri Lanka's documented history spans 3,000 years, with evidence of pre-historic human settlements dating back to at least 125,000 years. It has a rich cultural heritage and the first known Buddhist writings of Sri Lanka, the Pāli Canon, date back to the Fourth Buddhist council in 29 BC. Its geographic location and deep harbours made it of great strategic importance from the time of the ancient Silk Road through to the modern Maritime Silk Road." +
"Sri Lanka was known from the beginning of British colonial rule as Ceylon. A nationalist political movement arose in the country in the early 20th century to obtain political independence, which was granted in 1948; the country became a republic and adopted its current name in 1972. Sri Lanka's recent history has been marred by a 30-year civil war, which decisively ended when the Sri Lanka Armed Forces defeated the Liberation Tigers of Tamil Eelam (LTTE) in 2009." +
"The current constitution stipulates the political system as a republic and a unitary state governed by a semi-presidential system. It has had a long history of international engagement, as a founding member of the South Asian Association for Regional Cooperation (SAARC), and a member of the United Nations, the Commonwealth of Nations, the G77, and the Non-Aligned Movement. Along with the Maldives, Sri Lanka is one of only two South Asian countries rated *high* on the Human Development Index (HDI), with its HDI rating and per capita income the highest among South Asian nations. Sri Lankan constitution accords Buddhism the *foremost place*, although it does not identify it as a state religion. Buddhism is given special privileges in the Sri Lankan constitution." + 
"The island is home to many cultures, languages and ethnicities. The majority of the population is from the Sinhalese ethnicity, while a large minority of Tamils have also played an influential role in the island's history. Moors, Burghers, Malays, Chinese, and the aboriginal Vedda are also established groups on the island."
 
 
var cuzco = "Cuzco (en quechua sureño: Qusqu o Qosqo, pronunciado) es una ciudad del sureste del Perú ubicada en la vertiente oriental de la cordillera de los Andes, en la cuenca del río Huatanay, afluente del Vilcanota. Es la capital del departamento del Cuzco y, además, según está declarado en la constitución peruana, es la «capital histórica» del país. " +
"La ciudad de Cuzco, según el Instituto Nacional de Estadística e Informática, es la octava ciudad más poblada de Perú, y albergaba, en 2014, una población de 420 137 habitantes." +
"Plaza de armas, desde Saqsayhuamán." +
"Antiguamente fue la capital del Imperio inca, una de las ciudades más importantes del Virreinato del Perú, en cuya época, y en manos de los españoles, se engalanó de iglesias, palacios y plazas barrocas y neoclásicas, que es lo que hoy le convierten en el principal lugar turístico de Perú. Declarada Patrimonio de la Humanidad en 1983 por la Unesco, suele ser denominada, debido a la gran cantidad de monumentos que posee, la *Roma de América*";

var cuscoEn = "Cusco (Spanish: Cuzco, kusko; Quechua: Qusqu or Quechua: Qosqo), often spelled Cuzco, is a city in southeastern Peru, near the Urubamba Valley of the Andes mountain range. It is the capital of the Cusco Region and of the Cusco Province. In 2013, the city had a population of 435,114. Located on the eastern end of the Knot of Cuzco, its elevation is around 3,400 m (11,200 ft)." +
"The site was the historic capital of the Inca Empire from the 13th until the 16th-century Spanish conquest. In 1983 Cusco was declared a World Heritage Site by UNESCO. It has become a major tourist destination, hosting nearly 2 million visitors a year. The Constitution of Peru designates it as the Historical Capital of Peru.[2] In 1983 Cusco was designated as a World Heritage Site by UNESCO with the title *City of Cuzco*";
 
var IrelandEn = "Ireland is an island in the North Atlantic. It is separated from Great Britain to its east by the North Channel, the Irish Sea, and St George's Channel. Ireland is the third-largest island in Europe." +
"Politically, Ireland is divided between the Republic of Ireland (officially named Ireland), which covers five-sixths of the island, and Northern Ireland, which is part of the United Kingdom. In 2011, the population of Ireland was about 6.6 million, ranking it the second-most populous island in Europe after Great Britain. Just under 4.8 million live in the Republic of Ireland and just over 1.8 million live in Northern Ireland." +
"The island's geography comprises relatively low-lying mountains surrounding a central plain, with several navigable rivers extending inland. Its lush vegetation is a product of its mild but changeable climate which is free of extremes in temperature. It was covered by thick woodlands until the Middle Ages. As of 2013, the amount of land that is wooded in Ireland is about 11% of the total, compared with a European average of 35%. There are twenty-six extant mammal species native to Ireland. The Irish climate is influenced by the Atlantic Ocean and thus very moderate, and winters are milder than expected for such a northerly area, although summers are cooler than those in Continental Europe. Rainfall and cloud cover are abundant.";
 
var Ireland = "Irlanda  oficialmente la República de Irlanda (en irlandés: Poblacht na hÉireann; en inglés: Republic of Ireland) para diferenciarla de Irlanda del Norte,​ es un país soberano, miembro de la Unión Europea, que ocupa la mayor parte de la isla homónima. Su capital es Dublín, situada en el este de la isla. " +
"El país tiene una única frontera terrestre, con Irlanda del Norte, una de las naciones constitutivas del Reino Unido. " +
"La isla está rodeada por el océano Atlántico y tiene el mar Céltico al sur, el canal de San Jorge al sureste y el mar de Irlanda al este. Es una república parlamentaria con un presidente electo que ejerce de jefe de Estado. El jefe del gobierno, el Taoiseach, es nombrado por la Cámara Baja del Parlamento, la Dáil Éireann." +
"El moderno Estado irlandés consiguió su independencia efectiva del Reino Unido en 1922, tras una guerra de independencia que acabó con la firma del Tratado anglo-irlandés, mientras que Irlanda del Norte optó por permanecer en el Reino Unido. Fue cuando se inició el Conflicto de Irlanda del Norte, que aún perdura. Aunque en principio Irlanda fue un dominio dentro del Imperio británico, con el nombre de Estado Libre Irlandés, en 1931 se clarificó su completa independencia legislativa y en 1937 adoptó una nueva constitución y el nombre de Irlanda. En 1949 se eliminaron los deberes restantes de la figura del rey de Irlanda y el país se declaró una república. El Estado no tuvo relaciones formales con Irlanda del Norte durante la mayor parte del siglo xx, " +
"pero desde 1999 han cooperado en varias políticas en el marco del Consejo Ministerial Norte-Sur creado por el Acuerdo de Viernes Santo.";


 
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
var flagsRgoLenghtTest = ["Sri Lanka","Cusco","Ireland"];
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
 


 $$("#ENG").val( "Lenguaje " + "\n"  + "a Ingles");
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
    $$("#clean").text("Some time to explore" + "\n" + "you need to clean" +"\n" + "your cubes" + "\n" + "pressing the star" + "\n" + "Botton above");      
     $$("#tutorialQuote").text("It's time to explore the world with Rubik's Cube Flags");
     $$("#tutorialInstruction").text("First Press the Cube and Get the your colors of the day!." + "\n" + "Seccond, Now you got the colors press the Explore" + "to know more about your new Flag!");
     $$("#leftpanelnews").text("News");
     $$("#leftpanelquote").text("Which place of the world you are going visit today?");
     $$("#leftpanelinformation").text("If you donate 1 US$ or more," +
          "you can ask us us to update the database with" + " " +
          "5 of your favorite flags, if they are not yet in the database." +
          "After the donation, send the list of chosen flags to rubiksflags@gmail.com");
      }
      $$(".picker-modal").remove();
  });  
 });
 
    $$("#leftpanelbutton").on("click", function(event) {
        var panelname = pick.name;
        var pickflag = pick.flag;
        var panelhour = pick.timezones;
        var panelpopulation = pick.population;
        var panelregion = pick.region;
        
        $$("#ciudad").text(panelname);
        $$("#icon").attr("src", pickflag);
        $$("#timezones").text("La hora es: " + panelhour)
        $$("#population").text("Poblacion: " + panelpopulation);    
        $$("#region").text("Region: " + panelregion);          
        console.log("lpb:" + pick);
    });
        
$$("#donation").on("click", function() {
    console.log("donation button");
    window.location.href = 'https://www.patreon.com/bePatron?c=1798557';
});
    // If it's not an universal app, use IS_IPAD or IS_IPHONE
   /* if (IS_IOS) {
        window.location = "https://www.patreon.com/bePatron?c=1798557";
    
        setTimeout(function() {
    
            // If the user is still here, open the App Store
            if (!document.webkitHidden) {
    
                // Replace the Apple ID following '/id'
                window.location = 'https://www.patreon.com/bePatron?c=1798557';
            }
        }, 25);
    
    } else if (IS_ANDROID) {
    
        // Instead of using the actual URL scheme, use 'intent://' for better UX
   window.location = 'intent:https://www.patreon.com/bePatron?c=1798557#Intent;package=my.app.id;scheme=myapp;launchFlags=268435456;end;'; */

 
 
  $$(".RubikTheflag").on("click", function(event) {
     console.log(event);
    var flagsConv = flagsConvinations.slice(0);
    var fRgb = flagsRgb.slice(0); 
    
    function randomColorsFunction() {
    var randomConvination = Math.floor((Math.random() * 6) + 1)
     console.log(randomConvination)
    return randomConvination;
}
    
    
    function randomConvinationFunction() {
    var randomConvination = Math.floor((Math.random() * 3) + 1)
     console.log(randomConvination)
    return randomConvination;
}

switch(randomColorsFunction()) {
case 1:
    $$("#checkflagbutton").css(
    "background-color", 'red');
    break;
    
case 2: 
     $$("#checkflagbutton").css(
    "background-color", 'blue');
    break;
    
case 3:
      $$("#checkflagbutton").css(
    "background-color", 'orange');
break;

case 4: 
      $$("#checkflagbutton").css(
    "background-color", 'green');
    break;
case 5: 
      $$("#checkflagbutton").css(
    "background-color", 'yellow');
    break;
case 6: 
      $$("#checkflagbutton").css(
    "background-color", 'white');
    break;
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
                                   var randomConvination = Math.floor((Math.random() * 3) + 1)
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
                                            flagImgcircle1 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton1")
                                            .css("background-image", "url(https://c1.staticflickr.com/8/7390/13911014358_66b30a21b5_b.jpg)");
                                             flagImgcircle2 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton2")
                                            .css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/d/d2/Coat_of_arms_of_Amazonas_State.jpg)");
                                             flagImgcircle3 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton3")
                                            .css("background-image", "url(https://c1.staticflickr.com/3/2934/14018106379_9f63523889_z.jpg)");
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
                                            flagImgcircle1 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton1")
                                            .css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/9/9a/Otsu%2C_Akiruno%2C_Tokyo_190-0174%2C_Japan_-_panoramio_%282%29.jpg)");
                                             flagImgcircle2 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton2")
                                            .css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Hirasawa%2C_Akiruno%2C_Tokyo_197-0812%2C_Japan_-_panoramio.jpg/800px-Hirasawa%2C_Akiruno%2C_Tokyo_197-0812%2C_Japan_-_panoramio.jpg)");
                                             flagImgcircle3 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton3")
                                            .css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Deep_Bowl_from_Ushinuma%2C_Akiruno-shi%2C_Tokyo%2C_Jomon_period%2C_3000-2000_BC_-_Tokyo_National_Museum_-_DSC05623.JPG/400px-Deep_Bowl_from_Ushinuma%2C_Akiruno-shi%2C_Tokyo%2C_Jomon_period%2C_3000-2000_BC_-_Tokyo_National_Museum_-_DSC05623.JPG)");
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
                                            flagImgcircle1 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton1")
                                            .css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/e/ef/Cukarica_coa.jpg)");
                                             flagImgcircle2 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton2")
                                            .css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sv_Petka_Padina.jpg/600px-Sv_Petka_Padina.jpg)");
                                             flagImgcircle3 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton3")
                                            .css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/a/a1/Zlatibor-vazdu%C5%A1na_banja_006.jpg)");
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
                                   var randomConvination = Math.floor((Math.random() * 3) + 1)
                                   console.log("random RGBflagWorking");
                                   return randomConvination;
                                }
                                if(randomrgbFlagFunction() != null) {
                                     switch(randomrgbFlagFunction()) {
                                        case 1:
                                            console.log("rgwflag1");
                                            console.log("Żebbuġ");
                                            flagName = $$("#flagname").text("Żebbuġ Gozo");
                                            flagDescription = $$("<p>").text(Żebbuġ);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_%C5%BBebbu%C4%A1%2C_Gozo.svg/500px-Flag_of_%C5%BBebbu%C4%A1%2C_Gozo.svg.png")
                                            .css("height", "70px")
                                            .css("width", "145px")
                                            .css("border-style", "inset");
                                            console.log(flagDescription);
                                             flagImgcircle1 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton1")
                                            .css("background-image", "url(https://s.iha.com/1799100025806/bb-Zebbug-Vecchio-Mulino-B-B_25.jpeg)");
                                             flagImgcircle2 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton2")
                                            .css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Malta_-_Zebbug_-_Triq_Sciortino_-_Dun_Karm_Psaila_02_ies.jpg/400px-Malta_-_Zebbug_-_Triq_Sciortino_-_Dun_Karm_Psaila_02_ies.jpg)");
                                             flagImgcircle3 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton3")
                                            .css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Malta_-_Zebbug_-_Vjal_il-Helsien_01_ies.jpg/800px-Malta_-_Zebbug_-_Vjal_il-Helsien_01_ies.jpg)");
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
                                             flagImgcircle1 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton1")
                                            .css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Escudo_de_Puerto_Boyac%C3%A1.svg/626px-Escudo_de_Puerto_Boyac%C3%A1.svg.png)");
                                             flagImgcircle2 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton2")
                                            .css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Parque_Corrales_Boyac%C3%A1.JPG/800px-Parque_Corrales_Boyac%C3%A1.JPG)");
                                             flagImgcircle3 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton3")
                                            .css("background-image", "url(https://c1.staticflickr.com/6/5594/14382012619_dff918fba1_b.jpg)");
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
                                            flagImgcircle1 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton1")
                                            .css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/f/fc/Elephnat_Illizi_Algeria.jpg)");
                                             flagImgcircle2 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton2")
                                            .css("background-image", "url(https://cdn.pixabay.com/photo/2017/09/28/17/00/algeria-2796203_960_720.jpg)");
                                             flagImgcircle3 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton3")
                                            .css("background-image", "url(https://c1.staticflickr.com/6/5594/14382012619_dff918fba1_b.jpg)");
                                            
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
        case 3:
             console.log("RGO working");
                    $$("#flagbutton1").css(
                        "background-color", "red");
                         $$("#flagbutton2").css(
                         "background-color", "green")
                         $$("#flagbutton3").css(
                         "background-color", "orange")
                     function randomrgbFlagFunction() {
                                   var randomConvination = Math.floor((Math.random() * 3) + 1) 
                                   console.log("random RGOflagWorking");
                                   return randomConvination;
                                }
                                
                                if(randomrgbFlagFunction() != null) {
                                     switch(randomrgbFlagFunction()) {
                                        case 1:
                                            console.log("rgoflag1");
                                            console.log("sriLanka");
                                            flagName = $$("#flagname").text("SriLanka");
                                            flagDescription = $$("<p>").text(sriLanka);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/1024px-Flag_of_Sri_Lanka.svg.png")
                                            .css("height", "70px")
                                            .css("width", "145px")
                                            .css("border-style", "inset");
                                            console.log(flagDescription);
                                             flagImgcircle1 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton1")
                                            .css("background-image", "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1DSznaYpQicGD3YdBMD2jW0pDwP16t6Jr7_WJnPYacptCVPGSA)");
                                             flagImgcircle2 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton2")
                                            .css("background-image", "url(https://www.goodfreephotos.com/albums/sri-lanka/buddha-statue-on-rocks-in-sri-lanka.jpg)");
                                             flagImgcircle3 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton3")
                                            .css("background-image", "url(https://c.pxhere.com/photos/b8/3e/elephants_sri_lanka_travel_wildlife_ceylon_outdoor_tourism-1376903.jpg!d)");
                                            console.log(flagDescription);
                                            
                                            if(ENG == true) {
                                            console.log("rgoflag1");
                                            flagName = $$("#flagname").text("SriLanka");
                                            flagDescription = $$("<p>").text(sriLankaEn);
                                            console.log(flagDescription);
                                            }
                                       break;
                                       case 2:
                                            console.log("rgoflag2");
                                            console.log("cusco");
                                            flagName = $$("#flagname").text("Cuzco");
                                            flagDescription = $$("<p>").text(cuzco);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Flag_of_Cusco.svg/980px-Flag_of_Cusco.svg.png")
                                            .css("height", "70px")
                                            .css("width", "145px")
                                            .css("border-style", "inset");
                                            console.log(flagDescription);
                                             flagImgcircle1 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton1")
                                            .css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Sacsayhuam%C3%A1n%2C_Cusco%2C_Per%C3%BA%2C_2015-07-31%2C_DD_24.JPG/800px-Sacsayhuam%C3%A1n%2C_Cusco%2C_Per%C3%BA%2C_2015-07-31%2C_DD_24.JPG)");
                                             flagImgcircle2 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton2")
                                            .css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Cusco-coricancha-c01.jpg/399px-Cusco-coricancha-c01.jpg)");
                                             flagImgcircle3 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton3")
                                            .css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/1/13/Chicharr%C3%B3n_Cusco_10062011.jpg)");
                                            console.log(flagDescription);
                                            
                                            if(ENG == true) {
                                            console.log("rgoflag1");
                                            flagName = $$("#flagname").text("Cusco");
                                            flagDescription = $$("<p>").text(cuscoEn);
                                            console.log(flagDescription);
                                            }
                                       break;
                                         case 3:
                                            console.log("rgoflag3");
                                            console.log("Ireland");
                                            flagName = $$("#flagname").text("Ireland");
                                            flagDescription = $$("<p>").text(Ireland);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Flag_of_Cusco.svg/980px-Flag_of_Cusco.svg.png")
                                            .css("height", "70px")
                                            .css("width", "145px")
                                            .css("border-style", "inset");
                                            console.log(flagDescription);
                                             flagImgcircle1 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton1")
                                            .css("background-image", "url(https://c.pxhere.com/photos/d9/5b/klee_shamrocks_luck_nature_lucky_charm_plant_meadow_lucky_clover-1075830.jpg!d)");
                                             flagImgcircle2 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton2")
                                            .css("background-image", "url(https://www.myirelandtour.com/images/photos/hi-res/mayo/inishturk-island/currach-fishing-boat-1.jpg)");
                                             flagImgcircle3 = $$("<input>")
                                            .attr("type2","button")
                                            .attr("id","flagbutton3")
                                            .css("background-image", "url(https://www.publicdomainpictures.net/pictures/260000/velka/pub-in-dublin-ireland-1527331814tZT.jpg)");
                                            console.log(flagDescription);
                                            
                                            if(ENG == true) {
                                            console.log("rgoflag1");
                                            flagName = $$("#flagname").text("Ireland");
                                            flagDescription = $$("<p>").text(IrelandEn);
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
         var randomConvination = Math.floor((Math.random() * 6) + 1)
         console.log("random RGWflagWorking");
         return randomConvination;
      }
 
 switch (randomcubecolors()) {
     case 1:
        $$(".RubikTheflag").css("background-color", "red");
        $$(".RubikTheflag").css("background-color", "orange");
        $$("#button1").css("background-color", "red");
        $$("#button2").css("background-color", "yellow");
        $$("#button3").css("background-color", "blue");
        $$("#button4").css("background-color", "white");
        $$("#button5").css("background-color", "green");
        $$("#button6").css("background-color", "red");
        $$("#button7").css("background-color", "blue");
        $$("#button8").css("background-color", "red");
        $$(".RubikTheflag").css("-webkit-clip-path", "polygon(48% 16%, 38% 20%, 26% 28%, 21% 41%, 19% 53%, 24% 66%, 32% 74%, 41% 78%, 52% 78%, 62% 75%, 71% 72%, 79% 64%, 52% 49%, 66% 36%, 79% 23%, 70% 18%, 59% 16%)");
        $$('.cube').css(
            "transform", "rotate(160deg)");
      break;
       case 2:
        $$(".RubikTheflag").css("background-color", "green");
        $$(".RubikTheflag").css("background-color", "orange");
        $$("#button1").css("background-color", "red");
        $$("#button2").css("background-color", "yellow");
        $$("#button3").css("background-color", "blue");
        $$("#button4").css("background-color", "white");
        $$("#button5").css("background-color", "green");
        $$("#button6").css("background-color", "red");
        $$("#button7").css("background-color", "blue");
        $$("#button8").css("background-color", "red");
        $$(".RubikTheflag").css("-webkit-clip-path", "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)");
         $$('.cube').css("transform", "rotateY(180deg)");
         break;
     case 3:
        $$(".RubikTheflag").css("background-color", "yellow");
        $$(".RubikTheflag").css("background-color", "orange");
        $$("#button1").css("background-color", "red");
        $$("#button2").css("background-color", "yellow");
        $$("#button3").css("background-color", "blue");
        $$("#button4").css("background-color", "white");
        $$("#button5").css("background-color", "green");
        $$("#button6").css("background-color", "red");
        $$("#button7").css("background-color", "blue");
        $$("#button8").css("background-color", "red");
        $$(".RubikTheflag").css("-webkit-clip-path", "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)");
        $$('.cube').css("transform", "rotate(-90deg)");
         break;
           case 4:
        $$(".RubikTheflag").css("background-color", "orange");
        $$("#button1").css("background-color", "red");
        $$("#button2").css("background-color", "yellow");
        $$("#button3").css("background-color", "blue");
        $$("#button4").css("background-color", "white");
        $$("#button5").css("background-color", "green");
        $$("#button6").css("background-color", "red");
        $$("#button7").css("background-color", "blue");
        $$("#button8").css("background-color", "red");
        $$(".RubikTheflag").css("-webkit-clip-path", "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)");
        $$('.cube').css("transform", "rotateY(-180deg)");
         break;
             case 5:
        $$(".RubikTheflag").css("background-color", "orange");
        $$("#button1").css("background-color", "red");
        $$("#button2").css("background-color", "yellow");
        $$("#button3").css("background-color", "blue");
        $$("#button4").css("background-color", "white");
        $$("#button5").css("background-color", "green");
        $$("#button6").css("background-color", "red");
        $$("#button7").css("background-color", "blue");
        $$("#button8").css("background-color", "red");
        $$(".RubikTheflag").css("-webkit-clip-path", "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)");
         $$('.cube').css("transform", "rotate(-360deg)");
         break;
             case 6:
        $$(".RubikTheflag").css("background-color", "orange");
        $$("#button1").css("background-color", "red");
        $$("#button2").css("background-color", "yellow");
        $$("#button3").css("background-color", "blue");
        $$("#button4").css("background-color", "white");
        $$("#button5").css("background-color", "green");
        $$("#button6").css("background-color", "red");
        $$("#button7").css("background-color", "blue");
        $$("#button8").css("background-color", "red");
        $$(".RubikTheflag").css("-webkit-clip-path", "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)");
        $$('.cube').css("transform", "rotateY(360deg)");
         break;
 }

   
  backgroundAnimate(); 
    
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
  
  
/*  

********************************** OLD ANIMATION NOTES
setInterval(
    function () {
        $$('#fallingCube1').animate({translateY: '+=100'}, 0);
    },
    200
);*/
/*.effect( effect [, options ] [, duration ] [, complete ] )*/

//     var vertic = { duration : 900, easing : 'linear', queue : 'FallingCubesDown'};


//     $('.example span').repeat()
//     .animate({top:160},vertic)
//     .animate({top:0},vertic).join();

// $('.example .ball').repeat()
//   .animate({top:-160},vertic)
//   .animate({top:0},vertic).join('FallingCubesDown')
//   ._.dequeue('FallingCubesDown');

/*$$('.thefall').repeat(30).each($$)
    .animate(
        {   
            'margin-left': randomness,
            'margin-top': randomness2,
            'margin-bottom': randomness3
             
        },
    ).delay(1000)
    .animate(
        {
            'margin-left': 'randomMadness()',
            'margin-top': 'randomMadness()',
            'margin-bottom': 'randomMadness()' 
           
        },
    ).until(100);
    
    /*  var vertic = { duration : 900, easing : 'linear', queue : 'FallingCubesDown'};
  $$('#fallingCube1').repeat(20)
    .animate({
            'margin-top': '160'
        },vertic)
    .animate({top:0},vertic).join();

  $$('#fallingCube1').repeat(20)
  .animate({
            'margin-left': '-260'
        },vertic)
  .animate({top:0},vertic).join('FallingCubesDown')
  ._.dequeue('FallingCubesDown');
  */
    
   


function backgroundAnimate() {
      $('#FunnyBackground').animate({
    left: 50,
    top: 50
}, 'slow', function () { $(this).removeAttr('style'); });

 function randomMadness1() {
         var randomConvination = Math.floor((Math.random() * 600) + 1);
         console.log("random RGWflagWorking");
         return randomConvination;
      }
      
var randomness1 = randomMadness1();
var randomness2 = randomMadness1();
var randomness3 = randomMadness1();
var randomness4 = randomMadness1();
console.log(randomness1);
console.log(randomness2);
console.log(randomness3);
console.log(randomness4);

    
var cube1 = $$("#fallingCubes1blue1");
var cube2 = $$("#fallingCubes2red5");
var cube3 = $$("#fallingCubes4yellow3");
var cube4 =  $$("#fallingCubes5white4");
var cube5 =  $$("#fallingCubes6orange6");
var cube6 = $$("#fallingCubes1blue2");
var cube7 = $$("#fallingCubes6orange4"); 
var cube8 =  $$("#fallingCubes5white1");
var cube9 =  $$("#fallingCubes4yellow1"); 
var cube10 =  $$("#fallingCubes5white6");

var cube11 = $$("#fallingCubes3green3");
var cube12 = $$("#fallingCubes4yellow2");
var cube13 = $$("#fallingCubes5white2");
var cube14 =  $$("#fallingCubes1blue3");
var cube15 =  $$("#fallingCubes2red6");
var cube16 = $$("#fallingCubes3green1");
var cube17 = $$("#fallingCubes2red1");  
var cube18 =  $$("#fallingCubes3green6");
var cube19 =  $$("#fallingCubes4yellow5"); 
var cube20 =  $$("#fallingCubes5white5"); 


var cube21 =  $$("#fallingCubes4yellow4");
var cube22 = $$("#fallingCubes3green4");
var cube23 = $$("#fallingCubes3green2");
var cube24 = $$("#fallingCubes2red4");
var cube25 = $$("#fallingCubes2red3");
var cube26 = $$("#fallingCubes5white3");
var cube27 = $$("#fallingCubes2red2"); 
var cube28 = $$("#fallingCubes3green5"); 
var cube29 = $$("#fallingCubes6orange3"); 
var cube30 = $$("#fallingCubes6orange5");
var cube31 = $$("#fallingCubes6orange2");
var cube32 = $$("#fallingCubes6orange1");
var cube33 = $$("#fallingCubes1blue4");
var cube34 = $$("#fallingCubes1blue5");
var cube35 = $$("#fallingCubes4yellow6");

 $$([cube1,cube2,cube3,cube4,cube5,cube6,cube7,cube8,cube9,cube10,cube11,cube12,cube13,cube14,cube15,cube16,cube17,
 cube18,cube19,cube20,cube21,cube22,cube23,cube24,cube25,cube26,cube27,cube28,cube29,cube30,cube31,cube32,cube33,cube34,cube35]).each(function(
     ){
         $$(this).animate(
        {   
            'margin-top': randomness3,
        });
     });
}



function backgroundRecover() {
      $('#FunnyBackground').animate({
    left: 50,
    top: 50
}, 'slow', function () { $(this).removeAttr('style'); });
    
var cube1 = $$("#fallingCubes1blue1");
var cube2 = $$("#fallingCubes2red5");
var cube3 = $$("#fallingCubes4yellow3");
var cube4 =  $$("#fallingCubes5white4");
var cube5 =  $$("#fallingCubes6orange6");
var cube6 = $$("#fallingCubes1blue2");
var cube7 = $$("#fallingCubes6orange4"); 
var cube8 =  $$("#fallingCubes5white1");
var cube9 =  $$("#fallingCubes4yellow1"); 
var cube10 =  $$("#fallingCubes5white6");

var cube11 = $$("#fallingCubes3green3");
var cube12 = $$("#fallingCubes4yellow2");
var cube13 = $$("#fallingCubes5white2");
var cube14 =  $$("#fallingCubes1blue3");
var cube15 =  $$("#fallingCubes2red6");
var cube16 = $$("#fallingCubes3green1");
var cube17 = $$("#fallingCubes2red1");  
var cube18 =  $$("#fallingCubes3green6");
var cube19 =  $$("#fallingCubes4yellow5"); 
var cube20 =  $$("#fallingCubes5white5"); 


var cube21 =  $$("#fallingCubes4yellow4");
var cube22 = $$("#fallingCubes3green4");
var cube23 = $$("#fallingCubes3green2");
var cube24 = $$("#fallingCubes2red4");
var cube25 = $$("#fallingCubes2red3");
var cube26 = $$("#fallingCubes5white3");
var cube27 = $$("#fallingCubes2red2"); 
var cube28 = $$("#fallingCubes3green5"); 
var cube29 = $$("#fallingCubes6orange3"); 
var cube30 = $$("#fallingCubes6orange5");
var cube31 = $$("#fallingCubes6orange2");
var cube32 = $$("#fallingCubes6orange1");
var cube33 = $$("#fallingCubes1blue4");
var cube34 = $$("#fallingCubes1blue5");
var cube35 = $$("#fallingCubes4yellow6");

 $$([cube1,cube2,cube3,cube4,cube5,cube6,cube7,cube8,cube9,cube10,cube11,cube12,cube13,cube14,cube15,cube16,cube17,
 cube18,cube19,cube20,cube21,cube22,cube23,cube24,cube25,cube26,cube27,cube28,cube29,cube30,cube31,cube32,cube33,cube34,cube35]).each(function(
     ){
         $$(this).removeAttr('style');
     });
}

    
    
$$("#FunnyBackgroundrecover").on("click", function() { 
  backgroundRecover();
}); 

    
   $$("#FunnyBackgroundExplode").on("click", function() { 
   backgroundAnimate();
       
   }); 
    


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
  if (page.name === 'Page2') {https://rubikscubeflags-duodecim.c9users.io
   // Following code will be executed for page with data-page attribute equal to "about"
      $$("#flagNamePage2").text(flagName);
      $$("#textdescription").text(flagDescriptionText);
      $$(flagImage).appendTo("#flagimg2");
      $$(flagImgcircle1).appendTo(".flagsColorspage2");
      $$(flagImgcircle2).appendTo(".flagsColorspage2");
      $$(flagImgcircle3).appendTo(".flagsColorspage2");
    }
    
})
    
    
 $$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;
     if (page.name === 'firebaseauthpage') {
         
         
         
   // Following code will be executed for page with data-page attribute equal to "about"
 function SignIn() {
      email = $$("#email").val();
      password = $$("#password").val();
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error" + errorMessage);
    })
 }

  $$("#SignIn").on("click", function() {
      SignIn();
    });
    
    
    
   
    
    }
});
         
        
   $$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;
     if (page.name === 'firebaseauthpageSignUp') {
   // Following code will be executed for page with data-page attribute equal to "about"
   
   
   
   
   
  function createAcc () { 
        newEmail = $$("#newEmail").val();
        newPassword = $$("#newPassword").val();
     
        firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword).catch(function(error) {
         var errorCode = error.code;
         var errorMessage = error.message;
          }).then(
        db.collection("users").add({
         email: newEmail,
         uid:  firebase.auth().currentUser.uid
        })
        )
        .catch(function(error){
        console.log("Error:" + error)
     });
  }

    $$("#createAcc").on("click", function() {
       createAcc();
   });

}



});    
      
      
      
      
        
    
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
   Framework7.prototype.plugins.myPlugin = function (app, params) {
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
};  
    // Only executed our code once the DOM is ready.
		// Get a reference to the canvas object
	

    
    
    

 /*   if (page.name === 'about') {
     Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }*/
    


// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})