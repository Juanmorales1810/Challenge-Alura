var texto="";
    // función para el primer botón de encriptar texto
        function encriptarTexto(){
        var texto = document.getElementById("paraula").value.toLowerCase();
        if (texto=="") {
            document.getElementById('notext').style.display = 'block';
            document.getElementById('texto').style.display = 'none';
        }
        else{
            document.getElementById('texto').style.display = 'block';
            document.getElementById('notext').style.display = 'none';
            var nuevoTexto=texto.replace(/e/gim,"enter");
            var nuevoTexto=nuevoTexto.replace(/i/gim,"imes");
            var nuevoTexto=nuevoTexto.replace(/o/gim,"ober");
            var nuevoTexto=nuevoTexto.replace(/a/gim, "ai");
            var nuevoTexto=nuevoTexto.replace(/u/gim,"ufat");
            document.getElementById("ingresetexto2").innerHTML=nuevoTexto;
            // document.getElementById("ingresetexto3").innerHTML=nuevoTexto;
            document.getElementById("copiar").style.display="show";
            document.getElementById("copiar").style.display="inherit";
        }
        }  
    // función para el primer botón de desencriptar texto
        function desencriptarTexto(){
        var texto = document.getElementById("paraula").value.toLowerCase();
        if (texto=="") {
            document.getElementById('notext').style.display = 'block';
            document.getElementById('texto').style.display = 'none';
        }
        else{
            document.getElementById('texto').style.display = 'block';
            document.getElementById('notext').style.display = 'none';
            var nuevoTexto=texto.replace(/enter/gim,"e");
            var nuevoTexto=nuevoTexto.replace(/imes/gim,"i");
            var nuevoTexto=nuevoTexto.replace(/ober/gim,"o");
            var nuevoTexto=nuevoTexto.replace(/ai/gim, "a");
            var nuevoTexto=nuevoTexto.replace(/ufat/gim,"u");    
            document.getElementById("ingresetexto2").innerHTML=nuevoTexto;
            // document.getElementById("ingresetexto3").innerHTML=nuevoTexto;
            document.getElementById("copiar").style.display="show";
            document.getElementById("copiar").style.display="inherit";
        }
        }
        function copiarTextoH1() {
        const h1 = document.getElementById("ingresetexto2");
        const texto = h1.innerText;
        navigator.clipboard.writeText(texto).then(function() {
            location.reload();
            alert('Texto copiado al portapapeles: ' + texto);},
        );
        }