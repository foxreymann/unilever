$(document).ready(function(){

    location.hash = "";
    
    $('#gender img').wiggle('start', {
        wiggleDegrees: ['.5','1','.5','0','-0.5','-1','-0.5','0'],
    });

    $("#gender img").hover(
        function () {
            $(this).wiggle('stop').wiggle('start', {
                wiggleDegrees: ['2','4','2','0','-2','-4','-2','0'],
            }).addClass("hover");
        },
        function () {
            $(this).wiggle('stop').wiggle('start', {
                wiggleDegrees: ['.5','1','.5','0','-0.5','-1','-0.5','0'],
            }).removeClass("hover");
        }
    );

    $("#gender img").click(function() {
        $(window).scrollTop($('#age').offset().top);
    });

});
