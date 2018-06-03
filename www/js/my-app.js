// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;


// VARIABLES GLOBALES
var flagName = "";
var flagsConvinations = ["rgb", "rgo", "rgw", "rgy" , "rbw", "rbo", "gbw", "row", "bow", "gow",
 "rgy", "rby", "gby", "ory", "ogy", "oby", "wry", "wgy", "wby", "owy"];
var flagsRgb = [
    
    
    
    ];
var flagsRgo = [];
var flagsRgw = [];
var flagsRgy = [];
var flagsRbw = [];
var flagsRbo = [];
var flagsGbw = [];
var flagsRow = [];
var flagsBow = [];
var flagsGow = [];
var flagsRgy = [];
var flagsRby = [];
var flagsGby = [];
var flagsOry = [];
var flagsOgy = [];
var flagsOby = [];
var flagsWry = [];
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
  $$("RubikTheflag").on("click", function() {
    
    
    
    
    
    
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