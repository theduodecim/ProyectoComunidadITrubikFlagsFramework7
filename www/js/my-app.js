// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;


// VARIABLES GLOBALES
var flagName = "";

var flagsConvinations = ["rgb", "rgo", "rgw", "rgy" , "rbw", "rbo", "gbw", "row", "bow", "gow",
 "gbo", "rby", "gby", "ory", "ogy", "oby", "wry", "wgy", "wby", "owy"];
 
var flagsRgb = [
    "Agadir","Akiruno","Amazonas","Cukarica","Azerbaijan","Gabia","Bor","Belize",
    "Eritrea","Mauritius","Namibia","Oman","South Africa", "Northern Province, Sri Lanka"
    ];
var flagsRgw = [
    "Algeria","Żebbuġ-Ghawdex","Boyacá","Bauma","Birgu","Bulgaria","Equatorial Guinea"," Bangladesh naval Ensign",
    "Somaliland","Santo Domingo","Heligoland","Groningen","Kuwait","Bulgaria Naval Ensign"
    ];
var flagsRgo = [
    "Sri Lanka","Jain flag", "Cusco","Zambia", "Ireland"
    ];
var flagsRgy = [
    "Acre","Bolivia","Benin","Burkina Faso","Cameroon","Casanare","Congo","Ethiopia","Lithuania","Jagodina",
    "Dominica","Grenada"
    ];
var flagsRbw = [
    "Alagoas", "Attard","Australia","Puerto Rico","Russia","Schleswig-Holstein","Wyoming",
    "Anguilla","Canada","Finland","Luxembourg","Taiwan"
    ];
var flagsRbo = [
    "Armenia","Bong","Arizona",
    
    ];
var flagsGbw = [
    "Australia","The Netherlands","Žužemberk","Azerbaijan", "Abruzzo", "Córdoba Colombia",
    "Djibouti","Jastrowie"
    ];
var flagsRow = [
    "India","French Polynesia",""
    
    ];
var flagsBow = [
    "Anguilla - Ensign", "Marshall Islands"
   
    ];
var flagsGow = [
    "Cyprus",
    ];
var flagsGbo = [
    "Karakalpakstan"
    ];
var flagsRby = [
    "Aragon",
    ];
var flagsGby = [];
var flagsOry = [];
var flagsOgy = [];
var flagsOby = [];
var flagsWry = [
    "Aranđelovac", 
    
    ];
var flagsWgy = [];
var flagsWby = [];
var flagsowy = [];
// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
 
  $$("#button1").on("click", function(event) {
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
                 console.log("Hoalaa");
                    $$("#flagbutton1").css(
                        "background-color", "red");
                         $$("#flagbutton2").css(
                         "background-color", "blue")
                         $$("#flagbutton3").css(
                         "background-color", "green")
                             function randomrgbFlagFunction() {
                                   var randomConvination = Math.floor((Math.random() * 2) + 1)
                                   console.log("randomrgbisworkin");
                                   return randomConvination;
                                }
                                     switch(randomrgbFlagFunction()) {
                                        case 1:
                                        $$("#flagname").text("Agadir");
                                       break; 
                                         case 2:
                                          $$("#flagName").text("Akiruno");
                                        break; 
                                    
                                           }
            break;
            case 2:
                 console.log("asdasdas");
                    $$("#flagbutton1").css(
                        "background-color", "red")
                         $$("#flagbutton2").css(
                         "background-color", "green")
                         $$("#flagbutton3").css(
                          "background-color", "white");
                          
                          
             break;
    };
    
    
   
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

  if (page.name === 'page2') {
        // Following code will be executed for page with data-page attribute equal to "about"
       
        
        
        
        
        
        
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