//Verificar si los datos son correctos
function verificarDatos()
{
    var
        txtNom=document.getElementById('txtNom'),
        txtApe=document.getElementById('txtApe'),
        txtMail=document.getElementById('txtMail'),
        txtDep=document.getElementById('txtDep'),
        txtLoc=document.getElementById('txtLoc'),
        txtCi=document.getElementById('txtCi'),
        chkTerms=document.getElementById('chkTerms'),
        txtInput=document.getElementsByClassName('txtInput'),
        estado=true;
    
    //validacion de los textos
    for(i=0;i<txtInput.length;i++)
    {
        if(txtInput[i].value=="")
        {
            txtInput[i].parentNode.classList.remove('normal');
            txtInput[i].parentNode.classList.add('error');
            txtInput[i].nextElementSibling.innerHTML="EL CAMPO NO PUEDE QUEDAR VACIO";
            estado=false;
        }
        else if((txtInput[i].value.length)<=2)
        {
            txtInput[i].parentNode.classList.remove('normal');
            txtInput[i].parentNode.classList.add('error');
            txtInput[i].nextElementSibling.innerHTML="NOMBRE NO VALIDO";
            estado=false;
        }
    }
    
    //comprobar si hay numero en nombre o apellido
    var
        nom=txtNom.value.replace(/\D/g,''),
        ape=txtApe.value.replace(/\D/g,'');
    
    //Impedir que se muestre un tipo de error incorrecto
    if(nom==""){nom="s";}
    if(ape==""){ape="s";}
    
    if(!isNaN(nom))
    {
        estado=false;
        txtNom.parentNode.classList.remove('normal');
        txtNom.parentNode.classList.add('error');
        txtNom.nextElementSibling.innerHTML="NO PUEDE CONTENER NUMEROS";
    }
    if(!isNaN(ape))
    {
        estado=false;
        txtApe.parentNode.classList.remove('normal');
        txtApe.parentNode.classList.add('error');
        txtApe.nextElementSibling.innerHTML="NO PUEDE CONTENER NUMEROS";
    }
    
    //validar cédula
    if(validarCedula(txtCi.value)==false)
    {
        estado=false;
        txtCi.nextElementSibling.innerHTML="CEDULA NO VALIDA";
        txtCi.parentNode.classList.remove('normal');
        txtCi.parentNode.classList.add('error');
    }
    
    //validar mail
    if(validarMail(txtMail.value)==false)
    {
        estado=false;
        txtMail.nextElementSibling.innerHTML="CORREO NO VALIDO";
        txtMail.parentNode.classList.remove('normal');
        txtMail.parentNode.classList.add('error');
        
    }
    
    //validar selects
    if(txtDep.innerHTML=="")
    {
        estado=false;
        txtDep.parentNode.parentNode.classList.remove('normal');
        txtDep.parentNode.parentNode.classList.add('error');
        txtDep.nextElementSibling.innerHTML="EL CAMPO NO PUEDE QUEDAR VACIO";
    }
    if(txtLoc.innerHTML=="")
    {
        estado=false;
        txtLoc.parentNode.parentNode.classList.remove('normal');
        txtLoc.parentNode.parentNode.classList.add('error');
        txtLoc.nextElementSibling.innerHTML="EL CAMPO NO PUEDE QUEDAR VACIO";
    }
    
    //validar bases y condiciones
    if(chkTerms.checked==false)
    {
        estado=false;
        chkTerms.nextElementSibling.innerHTML="EL CAMPO NO PUEDE QUEDAR VACIO";
    }
    return estado;
}