document.onreadystatechange=function(){
    console.log(document.readyState);
    if(document.readyState=="complete"){
        $("#preloader").delay(500).fadeOut();
        $("#status").delay(1000).fadeOut();
    }
}    