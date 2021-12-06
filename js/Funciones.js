//------------------------CATEGORIAS------------------//
$(document).ready(function(){
    traerInformacionCategorias();
});

function autoInicioCategoria(){
    console.log("se esta ejecutando")
    $.ajax({
        url: "http://144.22.244.132:8080/api/Category/all",
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            traerInformacionCategorias(respuesta);
            let $select = $("#select-category");
            $.each(respuesta, function (id,name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select" +name.id);
            });
        }    

    })
}



function traerInformacionCategorias(){
    $.ajax({
        url:"http://144.22.244.132:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            //var myItems = response.items;
            var valor ='';
            for(i=0;i < response.length;i++){
                valor+= '<tr>'+
                    '<td>'+response[i].id+'</td>'+
                    '<td>'+response[i].name+'</td>'+
                    '<td>'+response[i].description+'</td>'+
                    '<td>'+ '<button class="btn btn-danger mx-2" onclick="borrarInformacionCategorias('+response[i].id+')">Borrar</button>'+
                            '<button class="btn btn-info" onclick="actualizarInformacionCategorias('+response[i].id+')">Actualizar</button>'+
                    '</td>'+
                '</tr>';
            }
            $('#tBodyCategorias').html(valor);
            
        }

    });
}

function guardarInformacionCategorias(){
    let var2 = {
        name:$("#name").val(),
        description:$("#description").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://144.22.244.132:8080/api/Category/save",
       
                
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente la nueva categoria");
    
    
        }
        });

}

function borrarInformacionCategorias(idElemento){
    let elemento={
        id:idElemento
    };


    let dataToSend=JSON.stringify(elemento);
    
    $.ajax({
        url:"http://144.22.244.132:8080/api/Category/"+idElemento,
        type:'DELETE',
        data:dataToSend,
        contentType:'application/JSON',
        dataType:'JSON',
        success:function(respuesta) {
            $("#resultado1").empty();
            autoInicioCategoria();
            alert("Se ha Eliminado correctamente la información.")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}

function actualizarInformacionCategorias(idCategoria){
    let myData={
        id:idCategoria,
        
        name:$("#name").val(),
        description:$("#description").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://144.22.244.132:8080/api/Category/update",
        type:'PUT',
        data:dataToSend,
        contentType:'application/json',
        dataType: 'JSON', 

        success:function(respuesta) {
            
            $("#id").val("");
            $("#name").val("");            
            $("#description").val("");
            
           autoInicioCategoria();
            alert("Se ha Actualizado correctamente la informacion")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se actualizo correctamente");

        }
    });

}

//-----------------------------------------CLIENTES------------------------------------------//

$(document).ready(function(){
    traerInformacionClient();
});

function traerInformacionClient(){
    $.ajax({
        url:"http://144.22.244.132:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            //var myItems = response.items;
            var valor ='';
            for(i=0;i < response.length;i++){
                valor+= '<tr>'+
                    '<td>'+response[i].idClient+'</td>'+
                    '<td>'+response[i].email+'</td>'+
                    '<td>'+response[i].password+'</td>'+
                    '<td>'+response[i].name+'</td>'+
                    '<td>'+response[i].age+'</td>'+
                    '<td>'+ '<button class="btn btn-danger mx-2" onclick="borrarInformacionClient('+response[i].idClient+')">Borrar</button>'+
                            '<button class="btn btn-info" onclick="actualizarInformacionClient('+response[i].idClient+')">Actualizar</button>'+
                    '</td>'+
                '</tr>';
            }
            $('#tBodyClient').html(valor);
            
        }

    });
}

function guardarInformacionClient(){
    let var2 = {
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://144.22.244.132:8080/api/Client/save",
       
                
        success:function(response) {
                console.log(response);
                console.log("Se guardo correctamente el nuevo cliente");
                alert("Se guardo correctamente el nuevo cliente");
                window.location.reload()
    
        },        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente el cliente");
        }
        });
}

function borrarInformacionClient(idClient){
    let elemento={
        id:idClient
    };


    let dataToSend=JSON.stringify(elemento);
    
    $.ajax({
        url:"http://144.22.244.132:8080/api/Client/"+idClient,
        type:'DELETE',
        data:dataToSend,
        contentType:'application/JSON',
        dataType:'JSON',
        success:function(respuesta) {
            $("#resultado1").empty();
            traerInformacionClient();
            alert("Se ha Eliminado correctamente el cliente.")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}

function actualizarInformacionClient(idElemento){ 
    let myData={
        idClient:idElemento,
        
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val(),
        
    };
    
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://144.22.244.132:8080/api/Client/update",
        type:'PUT',
        data:dataToSend,
        contentType:'application/json',
        dataType: 'JSON', 

        success:function(respuesta) {
            $("#resultado3").empty();
            $("#idClient").val("");
            $("#email").val("");
            $("#password").val("");
            $("#name").val("");
            $("#age").val("");
            
            traerInformacionClient();
            alert("se ha Actualizado correctamente el cliente")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se actualizo correctamente");

        }
    });
}

//-----------------------------------------MENSAJES------------------------------------------//

$(document).ready(function(){
    traerInformacionMessage();
});

function traerInformacionMessage(){
    $.ajax({
        url:"http://144.22.244.132:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            //var myItems = response.items;
            var valor ='';
            for(i=0;i < response.length;i++){
                valor+= '<tr>'+
                    '<td>'+response[i].idMessage+'</td>'+
                    '<td>'+response[i].messageText+'</td>'+
                    
                    
                    '<td>'+ '<button class="btn btn-danger mx-2" onclick="borrarInformacionMessage('+response[i].idMessage+')">Borrar</button>'+
                            '<button class="btn btn-info" onclick="actualizarInformacionMessage('+response[i].idMessage+')">Actualizar</button>'+
                    '</td>'+
                '</tr>';
            }
            $('#tBodyMessage').html(valor);
            
        }

    });
}

function guardarInformacionMessage(){
    let var2 = {
        messageText:$("#message").val(),
        
        
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://144.22.244.132:8080/api/Message/save",
       
                
        success:function(response) {
                console.log(response);
                console.log("Se guardo correctamente el nuevo mensaje");
                alert("Se guardo correctamente el nuevo mensaje");
                window.location.reload()
    
        },        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente el mensaje");
        }
        });
}

function borrarInformacionMessage(idMessage){
    let elemento={
        id:idMessage
    };


    let dataToSend=JSON.stringify(elemento);
    
    $.ajax({
        url:"http://144.22.244.132:8080/api/Message/"+idMessage,
        type:'DELETE',
        data:dataToSend,
        contentType:'application/JSON',
        dataType:'JSON',
        success:function(respuesta) {
            $("#resultado1").empty();
            traerInformacionMessage();
            alert("Se ha Eliminado correctamente el mensaje.")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}

function actualizarInformacionMessage(idElemento){ 
    let myData={
        idMessage:idElemento,
        
        messageText:$("#message").val(),
        
        
        
    };
    
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://144.22.244.132:8080/api/Message/update",
        type:'PUT',
        data:dataToSend,
        contentType:'application/json',
        dataType: 'JSON', 

        success:function(respuesta) {
            $("#resultado3").empty();
            $("#idMessage").val("");
            $("#message").val("");
            
            
            
            traerInformacionMessage();
            alert("se ha Actualizado correctamente el mensaje")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se actualizo correctamente");

        }
    });
}


//-----------------------------------------ORTOPEDIC------------------------------------------//
$(document).ready(function(){
    traerInformacionOrtopedic();
});

function autoInicioOrtopedic(){
    console.log("se esta ejecutando")
    $.ajax({
        url: "http://144.22.244.132:8080/api/Ortopedic/all",
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            traerInformacionOrtopedic(respuesta);
            let $select = $("#select-category");
            $.each(respuesta, function (id,name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select" +name.id);
            });
        }    

    })
}


function traerInformacionOrtopedic(){
    $.ajax({
        url:"http://144.22.244.132:8080/api/Ortopedic/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            //var myItems = response.items;
            var valor ='';
            for(i=0;i < response.length;i++){
                valor+= '<tr>'+
                    '<td>'+response[i].id+'</td>'+
                    '<td>'+response[i].name+'</td>'+
                    '<td>'+response[i].brand+'</td>'+
                    '<td>'+response[i].year+'</td>'+
                    '<td>'+response[i].category+'</td>'+                    
                    '<td>'+response[i].description+'</td>'+
                    '<td>'+ '<button class="btn btn-danger mx-2" onclick="borrarInformacionOrtopedic('+response[i].id+')">Borrar</button>'+
                            '<button class="btn btn-info" onclick="actualizarInformacionOrtopedic('+response[i].id+')">Actualizar</button>'+
                    '</td>'+
                '</tr>';
            }
            $('#tBodyOrtopedic').html(valor);
            
        }

    });
}

function guardarInformacionOrtopedic(){
    let var2 = {
        name:$("#Oname").val(),
        brand:$("#Obrand").val(),
        year:$("#Oyear").val(),
        description:$("#Odescription").val(),
        
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://144.22.244.132:8080/api/Ortopedic/save",
       
                
        success:function(response) {
                console.log(response);
                console.log("Se guardo correctamente el nuevo ortopedico");
                alert("Se guardo correctamente el nuevo ortopedico");
                window.location.reload()
    
        },        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente el ortopedico");
        }
        });
}

function borrarInformacionOrtopedic(idElemento){
    let elemento={
        id:idElemento
    };


    let dataToSend=JSON.stringify(elemento);
    
    $.ajax({
        url:"http://144.22.244.132:8080/api/Ortopedic/"+idElemento,
        type:'DELETE',
        data:dataToSend,
        contentType:'application/JSON',
        dataType:'JSON',
        success:function(respuesta) {
            $("#resultado1").empty();
            autoInicioOrtopedic();
            alert("Se ha Eliminado correctamente el ortopedico.")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}

function actualizarInformacionOrtopedic(idOrtopedic){
    let myData={
        id:idOrtopedic,
        
        name:$("#Oname").val(),
        brand:$("#Obrand").val(),
        year:$("#Oyear").val(),
        description:$("#Odescription").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://144.22.244.132:8080/api/Ortopedic/update",
        type:'PUT',
        data:dataToSend,
        contentType:'application/json',
        dataType: 'JSON', 

        success:function(respuesta) {
            
            $("#id").val("");
            $("#Oname").val("");
            $("#Obrand").val("");
            $("#Oyear").val("");            
            $("#Odescription").val("");
            
            autoInicioOrtopedic();
            alert("Se ha Actualizado correctamente el ortopedico")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se actualizo correctamente");

        }
    });

}

//----------------------------------RESERVATIONS-----------------------------//

$(document).ready(function(){
    traerInformacionReservation();
});

function traerInformacionReservation(){
    $.ajax({
        url:"http://144.22.244.132:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            //var myItems = response.items;
            var valor ='';
            for(i=0;i < response.length;i++){
                valor+= '<tr>'+
                    '<td>'+response[i].idReservation+'</td>'+
                    '<td>'+response[i].startDate+'</td>'+
                    '<td>'+response[i].devolutionDate+'</td>'+
                    '<td>'+response[i].status+'</td>'+
                    '<td>'+ '<button class="btn btn-danger mx-2" onclick="borrarInformacionReservation('+response[i].idReservation+')">Borrar</button>'+
                            '<button class="btn btn-info" onclick="actualizarInformacionReservation('+response[i].idReservation+')">Actualizar</button>'+
                    '</td>'+
                '</tr>';
            }
            $('#tBodyReservation').html(valor);
            
        }

    });
}

function guardarInformacionReservation(){
    let var2 = {
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val()
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://144.22.244.132:8080/api/Reservation/save",
       
                
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente la nueva categoria");
    
    
        }
        });

}

function borrarInformacionReservation(idElemento){
    let elemento={
        idReservation:idElemento
    };


    let dataToSend=JSON.stringify(elemento);
    
    $.ajax({
        url:"http://144.22.244.132:8080/api/Reservation/"+idElemento,
        type:'DELETE',
        data:dataToSend,
        contentType:'application/JSON',
        dataType:'JSON',
        success:function(respuesta) {
            $("#resultado5").empty();
            traerInformacionReservation();
            alert("Se ha Eliminado la reservacion.")
        },

        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}

function actualizarInformacionReservation(idElemento){ 
    let myData={
        idReservation:idElemento,
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#status").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://144.22.244.132:8080/api/Reservation/update",
        type:'PUT',
        data:dataToSend,
        contentType:'application/json',
        dataType: 'JSON', 

        success:function(respuesta) {
            $("#resultado5").empty();
            $("#idReservation").val("");
            $("#startDate").val("");            
            $("#devolutionDate").val("");
            $("#status").val("");
            
            traerInformacionReservation();
            alert("se ha Actualizado correctamente la fecha de reservacion")
        },

        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se actualizo la reservacion");

        }
    });

}