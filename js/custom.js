$(document).ready(function(){
	// Se inicializa el menu
    $("#menu").metisMenu();
    // Se inicializa el scroll del menu
    var heigthWindow = $(window).height();
    //document.getElementById("markermap").style.height = heigthMap +"px";
    $('.scroll-sidebar').slimScroll({
    	wheelStep: 10,
    	position: 'left',
    	allowPageScroll: false,
        height: heigthWindow +"px"
    });
    
});