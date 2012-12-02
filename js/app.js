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

    var currentValue = $('#my-age');

    $('#age-slider').change(function(){
        currentValue.html(this.value);
        simulateAging(this.value);
    });

    // Trigger the event on load, so
    // the value field is populated:
    $('#age-slider').change();

});

var simulateAging = function(age) {
    console.log(age);
    $('#age-images img').hide();
    if(age < 30) {
        $('#18years').show();
    } else if(age < 40) {
        $('#30years').show();
    } else if(age < 50) {
        $('#40years').show();
    } else if(age < 70) {
        $('#50years').show();
    } else {
        $('#70years').show();
    }
}
