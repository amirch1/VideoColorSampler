window.onload = function() {
    var colorThief = new ColorThief();
    var video = document.getElementById("vid");
    var intervalID;

    video.addEventListener("play", function() {
        intervalID = setInterval(function(){
            var frameColors = colorThief.getPalette(document.getElementById("vid"),3);
            if (frameColors){
                var color1 = frameColors[0];
                var color2 = frameColors[1];
                var color3 = frameColors[2];
                var hex1 = rgbToHex(color1[0],color1[1],color1[2]);
                var hex2 = rgbToHex(color2[0],color2[1],color2[2]);
                var hex3 = rgbToHex(color3[0],color3[1],color3[2]);
                $(".colorSamples").find(".color1").html("<span>"+ntc.name(hex1)[1]+" </span>").css("background-color","rgb("+color1+")");
                $(".colorSamples").find(".color2").html("<span>"+ntc.name(hex2)[1]+" </span>").css("background-color","rgb("+color2+")");
                $(".colorSamples").find(".color3").html("<span>"+ntc.name(hex3)[1]+" </span>").css("background-color","rgb("+color3+")");
            }
        },500);
    });
    video.addEventListener("pause", function() {
        clearInterval(intervalID);
        intervalID = null;
    });
};

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


