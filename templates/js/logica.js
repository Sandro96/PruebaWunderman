function validarCedula(ci) {
    //Inicializo los coefcientes en el orden correcto
    var arrCoefs = new Array(2, 9, 8, 7, 6, 3, 4, 1);
    var suma = 0;
    //Para el caso en el que la CI tiene menos de 8 digitos
    //calculo cuantos coeficientes no voy a usar
    var difCoef = parseInt(arrCoefs.length - ci.length);
    //recorro cada digito empezando por el de más a la derecha
    //o sea, el digito verificador, el que tiene indice mayor en el array
    for (var i = ci.length - 1; i > -1; i--) {
        //Obtengo el digito correspondiente de la ci recibida
        var dig = ci.substring(i, i + 1);
        //Lo tenía como caracter, lo transformo a int para poder operar
        var digInt = parseInt(dig);
        //Obtengo el coeficiente correspondiente al ésta posición del digito
        var coef = arrCoefs[i + difCoef];
        //Multiplico dígito por coeficiente y lo acumulo a la suma total
        suma = suma + digInt * coef;
    }
    var result = false;
    // si la suma es múltiplo de 10 es una ci válida
    if ((suma % 10) === 0) {
        result = true;
    }
    return result;
}

//Validamos el Mail
function validarMail(mail) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(mail) ? true : false;
}

//Rellenar el select departamento
function fillSelect()
{
    var
        lstDep=document.getElementById('lstDep');
    
    for(i in dptosLocs)
    {
        lstDep.innerHTML += "<li onclick='fillLoc(this.innerHTML);selectValue(this.innerHTML,\"txtDep\");'>"+i+"</li>";
    }
}

//Rellenamos el select localidad
function fillLoc(dep)
{
    var
        lstLoc=document.getElementById('lstLoc');
    
    lstLoc.innerHTML="";
    
    for(j in dptosLocs[dep])
    {
        lstLoc.innerHTML += "<li onclick='selectValue(this.innerHTML,\"txtLoc\");'>"+dptosLocs[dep][j]+"</li>";
    }
}

//Mostrar el select (Localidad y departamento)
function selectValue(value,select)
{
    var
        slct=document.getElementById(select);
    
    slct.innerHTML=value;
    
    if(select=="txtDep")
    {
        document.getElementById('txtLoc').innerHTML="";
        stylePH(value,'Departamento');
        stylePH('','Localidad');
    }
    else
    {
        stylePH(value,'Localidad');
    }
    resetState('txtDep');
    resetState('txtLoc');
}

//Mostras lista del select (Localidad y departamento)
function showHideList(id)
{
    var
        list=document.getElementById(id);
    
    list.classList.toggle('hideList');
    list.classList.toggle('showList');
}

//Verificar los placeholders
function stylePH(value,label)
{
    labels=document.getElementsByClassName('lblPlcHld');

    for(i in labels)
    {
        if(label==labels[i].innerHTML)
        {
            if(value!="")
            {
                labels[i].classList.remove('txtEmpty');
                labels[i].classList.add('txtFull');
            }
            else
            {
                labels[i].classList.add('txtEmpty');
                labels[i].classList.remove('txtFull');
            }
            break;
        }
    }
}

//Resetear el estado del input
function resetState(id)
{
    var
        input=document.getElementById(id);
    
    input.nextElementSibling.innerHTML="";
    
    if((id=="txtDep")||(id=="txtLoc"))
    {
        input.parentNode.parentNode.classList.add('normal');
        input.parentNode.parentNode.classList.remove('error');
    }
    else if(id!="chkTerms")
    {
        input.parentNode.classList.remove('error');
        input.parentNode.classList.add('normal');
    }
}
