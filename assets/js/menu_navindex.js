// JavaScript Document

// Menu Home 
$(function(){
    $("#menuHome").on("click", function(){
        var posicion = 0
        $("html, body").animate({
            scrollTop: posicion
        }, 2000); 
    });
});



//Inicia link a menus en html - 
 
 // Call to action
 

 $(function(){
    $("#btNosostros").on("click", function(){
        var posicion = $("#nosostros").offset().top - 48;
        $("html, body").animate({
            scrollTop: posicion
        }, 2000); 
    });
});
 



$(function(){
    $("#btSocios").on("click", function(){
        var posicion = $("#socios").offset().top - 48;
        $("html, body").animate({
            scrollTop: posicion
        }, 2000); 
    });
});
 
 
 
 $(function(){
    $("#btContacto").on("click", function(){
        var posicion = $("#contacto").offset().top - 48;
        $("html, body").animate({
            scrollTop: posicion
        }, 2000); 
    });
});



 $(function(){
    $("#btAsociados").on("click", function(){
        var posicion = $("#asociados").offset().top - 48;
        $("html, body").animate({
            scrollTop: posicion
        }, 2000); 
    });
});