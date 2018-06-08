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
"Amazonas has Venezuela's highest proportion of indigenous peoples of Venezuela; these make up only around 1.5% of the population nationwide, but the proportion is nearly 50% in Amazonas."
 
 
 
 
var akiruno = "Akiruno es una ciudad situada" + "en la Prefectura de Tokio, Japón." +
"En 2008, la ciudad tenía una población estimada de 81.475 habitantes y una densidad de población de 1.084,63 personas por km². El área total es 73.34 km²." +
"La ciudad fue fundada el 1 de septiembre de 1995.";
 
 
 
 
 
 
 
 
 
 
 
 
 
var flagsRgb = [
    "Akiruno","Amazonas (Venezuela)","Cukarica","Azerbaijan","Gabia","Bor","Belize",
    "Eritrea","Mauritius","Namibia","Oman","South Africa"
    ];
var flagsRgw = [
    "Algeria","Żebbuġ-Ghawdex","Boyacá","Bauma","Birgu","Bulgaria","Equatorial Guinea"," Bangladesh naval Ensign",
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
      '<div class="toolbar">' +
        '<div id="toolbarpicker" class="toolbar-inner">' +
          '<div class="left" id="changeENG">'+'<input class="botones" type="button"  align="center" id="changeENG" value="English Language"></input>'+ '</div>' +
          '<div class="right"><a id="closeButton" href="#" class="close-picker">Close</a></div>' +
        '</div>' +
      '</div>' +
      '<div  class="picker-modal-inner">' +
        '<div  class="content-block">' +
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
 
 
  
 
  
   
 
 
 
 
 
  $$(".RubikTheflag").on("click", function(event) {
     console.log(event);
    var flagsConv = flagsConvinations.slice(0);
    var fRgb = flagsRgb.slice(0); 
    
    
    
    
    function randomConvinationFunction() {
    var randomConvination = Math.floor((Math.random() * 3) + 1)
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
                                   var randomConvination = Math.floor((Math.random() * 3) + 1)
                                   console.log("random RGBflagWorking");
                                   return randomConvination;
                                }
                                if(randomrgbFlagFunction() != null) {
                                     switch(randomrgbFlagFunction()) {
                                        case 1:
                                            console.log("rgbflag1");
                                            flagName = $$("#flagname").text("Amazonas (Venezuela)");
                                            flagDescription = $$("<p>").text(AmazonasVenz);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Amazonas_State.svg/100px-Flag_of_Amazonas_State.svg.png");
                                            console.log(flagDescription);
                                            if(ENG == true) {
                                            console.log("rgbflag1");
                                            flagName = $$("#flagname").text("Amazonas (Venezuela)");
                                            flagDescription = $$("<p>").text(AmazonasVenzEn);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Amazonas_State.svg/100px-Flag_of_Amazonas_State.svg.png");
                                            console.log(flagDescription);
                                            }
                                       break; 
                                         case 2:
                                            console.log("rgbflag2");
                                            flagName = $$("#flagname").text("Akiruno");
                                            flagDescription = $$("<p>").text(akiruno);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/1/15/Flag_of_Akiruno%2C_Tokyo.svg");
                                            console.log(flagDescription);
                                        break; 
                                        
                                         case 3:
                                            console.log("rgbflag1");
                                            flagName = $$("#flagname").text("Cukarica");
                                            flagDescription = $$("<p>").text(AmazonasVenz);
                                            flagImage = $$("<img>").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Amazonas_State.svg/100px-Flag_of_Amazonas_State.svg.png");
                                            console.log(flagDescription);
                                       break; 
                                        
                                        
                                           }
                                }
                    
                                    
            break;
            case 2:
                 console.log("RGW Working");
                    $$("#flagbutton1").css(
                        "background-color", "red")
                         $$("#flagbutton2").css(
                         "background-color", "green")
                         $$("#flagbutton3").css(
                          "background-color", "white");
                           function randomrgbFlagFunction() {
                                   var randomConvination = Math.floor((Math.random() * 2) + 1)
                                   console.log("random RGWflagWorking");
                                   return randomConvination;
                                }
                                 if(randomrgbFlagFunction() != null) {
                                     switch(randomrgbFlagFunction()) {
                                        case 1:
                                            console.log("rgwflag1");
                                            flagName = $$("#flagname").text("Algeria");
                                       break; 
                                         case 2:
                                            console.log("rgwflag2");
                                            flagName = $$("#flagname").text("Żebbuġ-Ghawdex");
                                        break; 
                                           }
                                }
                          
             break;
             
              case 3:
                 console.log("RGW Working");
                    $$("#flagbutton1").css(
                        "background-color", "red")
                         $$("#flagbutton2").css(
                         "background-color", "green")
                         $$("#flagbutton3").css(
                          "background-color", "orange");
                           function randomrgbFlagFunction() {
                                   var randomConvination = Math.floor((Math.random() * 2) + 1)
                                   console.log("random RGWflagWorking");
                                   return randomConvination;
                                }
                                 if(randomrgbFlagFunction() != null) {
                                     switch(randomrgbFlagFunction()) {
                                        case 1:
                                            console.log("rgoflag1");
                                            flagName = $$("#flagname").text("Sri Lanka");
                                       break; 
                                         case 2:
                                            console.log("rgoflag2");
                                            flagName = $$("#flagname").text("Cusco");
                                        break; 
                                           }
                                }
                          
             break;
             
    };
    
    
    
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
 /* }*/



























 
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
    
   if (page.name === 'paperbackground') {
     /* var rectangle = new Rectangle ([200, 200], [200,300]); 
      var path = new Path.Rectangle(rectangle);
      path.style = {
          fillColor: '#272727',
          styleColor: '#',
          strokeWidth: 20
      };      */
    
    
    
    
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
	

    
    
    
    
    
    
    
    }
    

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