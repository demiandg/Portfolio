function msjenviado()
{
    if(verificarCampos())
    {
        var user = document.getElementById("txtnombre").value;
        alert("Gracias " + user + ", su mensaje ha sido enviado.");
    }
    else
    {
        alert("Todos los campos deben ser completados");
    }
}


function verificarCampos()
{
    let nom = document.getElementById('txtnombre').value;
    let tel = document.getElementById('txtcorreo').value;
    let mail = document.getElementById('txtelefono').value;
    let msj = document.getElementById('txtmensaje').value;
    if (nom == "" || tel == "" || mail == "" || msj == "")
    {
        return false;
    }
    else
    {
        return true;
    }
}
