window.onload = function(){
    divko = document.getElementById("text");

    setInputFilter(document.getElementById('datum'), function(value) {
        return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
      });
}

$(document).ready(function(){
    $.getJSON('meniny.json',function(data){
        text = data.meniny.zaznam;
    })
})


function show(){
    var a = findDate();
    $('#text').html('');
    $.each(text[a], function(i,data){
        if(i!="den"){
            console.log(data);
            $('#text').append(data + "<br>");
        }
        
    })
}

function findDate(){
    var datum = (druhe+prve).toString();
    //console.log((mesiac+den).toString());
    var pozicia;
    $.each(text, function(i,data){
        
        if(data.den==datum){
            //console.log(data.den, i);
            pozicia = i;
        }
        
    })
    return pozicia;
}

function zmena(){
    x = document.getElementById("datum").value;
    console.log(x.length);
    if(x.search(".")!=-1){
         prve = overenieDna(x.split(".")[0]);
         druhe = overenieMesiaca(x.split(".")[1]);
         show();
    }
}

function overenieDna(den){
    if(den>0 && den < 32 && den.length==2){
        return den;
    }
    else if(den>0 && den < 32 && den.length==1){
        uDen = 0+den;
        return uDen;
    }
    return 0;
}

function overenieMesiaca(mesiac){
    if(mesiac>0 && mesiac < 13 && mesiac.length==2){
        return mesiac;
    }
    else if(mesiac>0 && mesiac < 13 && mesiac.length==1){
        uMesiac = 0+mesiac;
        return uMesiac;
    }
    return 0;
}

function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
      textbox.addEventListener(event, function() {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      });
    });
  }

  