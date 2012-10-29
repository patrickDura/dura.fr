/*******************************
* Patrick Dura
* dura.fr
* Creation : 21/02/2012
* Update : 21/02/2012
*******************************/

/// Depends on :
///   Jquery 1.7.1

// Namespace
var App = {
    version:"1.0.0",
    config:{}
};

// Init Space
App.components={};

// Init when dom ready
$(document).ready(function() {
  App.Init();
});

// Init for the website
App.Init = function(){
	App.Carousel();	
	
	$('#printBtn').click(function(){
        print();
    });
}

// Carousel
App.Carousel = function(){
	$('.carousel').carousel(0);
	
	$('.carousel').carousel({
	  interval: 5000
	});
}

