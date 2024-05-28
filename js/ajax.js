function htmlAjax(nombreArchivo, idhtml){
    
    const request= new XMLHttpRequest();
    const url='./html/'+nombreArchivo;

    request.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            
            document.getElementById(idhtml).outerHTML=this.responseText;
              
        }
    }
    
    request.open("GET", url);
    request.send();

}

window.addEventListener('load', () => {
    htmlAjax('nav.html','nav');
    htmlAjax('carousel.html','carousel');
    htmlAjax('footer.html','footer');
    htmlAjax('contenido.html','contenido');
    htmlAjax('whatsapp.html','whatsapp');
});



