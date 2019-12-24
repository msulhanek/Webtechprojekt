window.onload = function(){
    divko = document.getElementById("text");
}

$(document).ready(function(){
    $.getJSON('meniny.json',function(data){
        console.log(data.meniny.zaznam[0]);
        var text = [];
        
        $.each(data.meniny.zaznam[0], function(i,v){
            text[i] = v;
            console.log(text[i]);
        });

        console.log(text);
        $('#text').append(text[1]);
    })
})