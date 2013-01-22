function setEmbedLinks_onion(){
    var padurl = window.location.href.split("?")[0];
    var mode = 'readwrite';
    if ($('#readonlyinput').is(':checked')) {
        var basePath = document.location.href.substring(0, document.location.href.indexOf("/p/"));
        padurl = basePath + "/p/" + clientVars.readOnlyId;
        mode = 'readonly';
    }
    var re = new RegExp(clientVars.obl_onion,"g");
    var str = clientVars.obl_domain;
    if ($('#onioninput').is(':checked')) { 
      re = new RegExp(clientVars.obl_domain,"g");
      str = clientVars.obl_onion;
    } 
    padurl = padurl .replace(re, str);  
    $('#embedinput').val("<iframe name='embed_" + mode + "' src='" + padurl + "?showControls=true&showChat=true&showLineNumbers=true&useMonospaceFont=false' width=600 height=400></iframe>");
    $('#linkinput').val(padurl);
}

$('#onioninput').on('change',function(){
    setEmbedLinks_onion();
});

$('#readonlyinput').on('change',function(){
    setEmbedLinks_onion();  
});

$('#linkinput').on('focus', function(){
   setEmbedLinks_onion(); 
});