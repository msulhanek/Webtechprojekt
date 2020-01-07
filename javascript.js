poleDni = [31,29,31,30,31,30,31,31,30,31,30,31];
window.onload = function(){
    divko = document.getElementById("meniny");
    
    setInputFilter(document.getElementById('datum'), function(value) {
        return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
      });
      this.setTimeout(this.dnesnyDatum,100);
}

$(document).ready(function(){
    $.getJSON('meniny.json',function(data){
        poleMien = data.meniny.zaznam;
    })
})

function zobraz(){
    var a = najdiDatum();
    //console.log(datum [3]);
    $('#ukazDatum').html('');
    document.getElementById("meno").value = '';
    $('#meniny').html('');
    if(typeof(datum[3])!=='undefined'){
        $('#meniny').append("V deň "+ datum[2] + datum [3] + "." + datum[0] + datum[1] + " má meniny:" + "<br><br>");
        $.each(poleMien[a], function(i,data){
            if(i!="den"){
    
                $('#meniny').append(data + "<br>");
            }
            
        })
    }
    else{
        $('#meniny').append("Neplatný dátum");
    }
    
}

function najdiDatum(){
    datum = (druhe+prve).toString();
    var pozicia;
    $.each(poleMien, function(i,data){
        
        if(data.den==datum){
            pozicia = i;
        }
        
    })
    return pozicia;
}

function zmenaDatumu(){
    x = document.getElementById("datum").value;
    if(x.search(".")!=-1){
        druhe = overenieMesiaca(x.split(".")[1]);
         prve = overenieDna(x.split(".")[0]);
         zobraz();
    }
}

function dnesnyDatum(){
    var d = new Date();
    druhe = overenieMesiaca((d.getMonth()+1).toString());
    prve = overenieDna((d.getDate()).toString());
    zobraz();
}

function overenieDna(den){
    
    if(den>0 && den <= poleDni[druhe-1] && den.length==2){
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

function zmenaMena(){
    var meno = document.getElementById("meno").value;
    meno = slugify(meno);
    var datum = najdiMeno(meno);
    zobrazMeno(datum);
}

function najdiMeno(meno){
    var datum = 0;
    var pole;
    krajina = document.getElementById("vyberKrajiny").value;
    console.log(typeof(krajina=="SK"));
    $.each(poleMien, function(i, data){
        if(typeof(data.SK)!=='undefined' & krajina=="SK"){
             
            pole = (slugify(data.SK)).split(", ");
            
            for(i=0;i<pole.length;i++){
                if(pole[i].toLowerCase()==meno.toLowerCase()){
                    datum = data.den;
                }
            }
        }
        if(typeof(data.CZ)!=='undefined' & krajina=="CZ"){
            pole = (slugify(data.CZ)).split(", ");
            
            for(i=0;i<pole.length;i++){
                if(pole[i].toLowerCase()==meno.toLowerCase()){
                    datum = data.den;
                }
            }
        }
        if(typeof(data.HU)!=='undefined' & krajina=="HU"){
            pole = (slugify(data.HU)).split(", ");
            
            for(i=0;i<pole.length;i++){
                if(pole[i].toLowerCase()==meno.toLowerCase()){
                    datum = data.den;
                }
            }
        }
        if(typeof(data.AT)!=='undefined' & krajina=="AT"){
            pole = (slugify(data.AT)).split(", ");
            
            for(i=0;i<pole.length;i++){
                if(pole[i].toLowerCase()==meno.toLowerCase()){
                    datum = data.den;
                }
            }
        }
    })
    
    return datum;
}

function zobrazMeno(datum){
    if(datum>0){
        upravenyDatum = datum[2] + datum [3] + "." + datum[0] + datum[1];
        document.getElementById("datum").value = '';
        $('#ukazDatum').html('');
        $('#meniny').html('');
        $('#ukazDatum').append("Má meniny ");
        $('#ukazDatum').append(upravenyDatum);
    }
    else{
        $('#ukazDatum').html('');
        $('#meniny').html('');
        $('#ukazDatum').append("Neplatné meno");
    }
}

function slugify (str) {
    var map = {
        'a' : 'á|ä|â|Á|Â',
        'e' : 'é|É',
        'i' : 'í|Í',
        'o' : 'ó|ô|Ó|Ô',
        'u' : 'ú|Ú',
        'c' : 'č|Č',
        'd' : 'ď|Ď',
        'r' : 'ŕ|Ŕ',
        's' : 'š|Š',
        't' : 'ť|Ť',
        'z' : 'ž|Ž',
        'l' : 'ĺ|ľ|Ĺ|Ľ',
        'n' : 'ň|Ň'
    };
    
    str = str.toLowerCase();
    
    for (var pattern in map) {
        str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    };

    return str;
};





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


  