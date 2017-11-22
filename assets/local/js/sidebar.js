 
$(function() {

    "use strict";
     
    var i = function() {
        var i = window.innerWidth > 0 ? window.innerWidth : this.screen.width,
            e = 70;
        1170 > i ? ($("body").addClass("mini-sidebar"), $(".navbar-brand span").hide(), $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible"), $(".sidebartoggler i").addClass("ti-menu")) : ($("body").removeClass("mini-sidebar"), $(".navbar-brand span").show());
        var o = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1;
        o -= e, 1 > o && (o = 1), o > e && $(".page-wrapper").css("min-height", o + "px")
    };

    $(window).ready(i), $(window).on("resize", i), $(".sidebartoggler").on("click", function() {
        $("body").hasClass("mini-sidebar") ? ($("body").trigger("resize"), $(".scroll-sidebar, .slimScrollDiv").css("overflow", "hidden").parent().css("overflow", "visible"), $("body").removeClass("mini-sidebar"), $(".navbar-brand span").show()) : ($("body").trigger("resize"), $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible"), $("body").addClass("mini-sidebar"), $(".navbar-brand span").hide())
    }), 

    $(".nav-toggler").click(function() {
        $("body").toggleClass("show-sidebar"), $(".nav-toggler i").toggleClass("ti-menu"), $(".nav-toggler i").addClass("ti-close")
    }), 


    // $(".floating-labels .form-control").on("focus blur", function(i) {
    //     $(this).parents(".form-group").toggleClass("focused", "focus" === i.type || this.value.length > 0)
    // }).trigger("blur"), $(function() {
    //     for (var i = window.location, e = $("ul#sidebarnav a").filter(function() {
    //             return this.href == i
    //         }).addClass("active").parent().addClass("active");;) {
    //         if (!e.is("li")) break;
    //         e = e.parent().addClass("in").parent().addClass("active")
    //     }
    // }), 

    
    // Set metismenu to sidebarnav
    $(function() {
        $("#sidebarnav").metisMenu()
    }), 

    // Sidebar scroll
    $(".scroll-sidebar").slimScroll({
        wheelStep: 10,
        position: 'left',
        allowPageScroll: false,
        size: "5px",
        height: "100%",
        color: "#999"
    })

});