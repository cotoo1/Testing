$(function(){
    $("#registro").validate({
        rules:{
            nombre: {
                required:true
            },
            apellido:{
                required:true
            },
            correo:{
                email:true,
                required:true
            },
            pass1:{
                required:true,
                minlength: 4
            },
            pass2:{
                required:true,
                equalTo:'#pass1'
            }
        },//rules
        messages:{
            nombre:{
                required:'Ingrese su nombre'
            },
            apellido:{
                required:'Ingrese su apellido'
            },
            correo:{
                required:'Ingrese su correo',
                email:'Ingrese un formato válido'
            },
            pass1:{
                required:'Ingrese una contraseña',
                minlength:'Caracteres insuficientes, minimo 4'
            },
            pass2:{
                required:'Reingrese su contraseña',
                equalTo:'Contraseñas no coinciden'
            },
        }
    }); //fin de la validacion
});//fin de la funcion de validar