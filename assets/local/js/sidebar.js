 
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
    }),

    $(".fix-topbar .topbar").stick_in_parent({}),
    $(".fix-sidebar .left-sidebar").stick_in_parent({})


});