function traerInformacionCategorias(){
    $.ajax({
        url:"http://144.22.244.132:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCategoria(respuesta);
        }
    });
}

function pintarRespuestaCategoria(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionCategorias("+respuesta[i].id+")'>Actualizar</button>";                      
        myTable+="<td> <button onclick='borrarInformacionCategorias("+respuesta[i].id+")'>Borrar</button>";     
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategorias(){
    let var2 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
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
            alert("No se guardo correctamente");
    
    
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
            traerInformacionCategorias();
            alert("Se ha Eliminado.")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}


function actualizarInformacionCategorias(idElemento){
    let myData={
        id:idElemento,
        
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
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
            $("#resultado1").empty();
            $("#id").val("");
            $("#Cname").val("");            
            $("#Cdescription").val("");
            
            traerInformacionCategorias();
            alert("se ha Actualizado")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se actualizo correctamente");

        }
    });

}


//===================================ORTOPEDIC=============================\\

function traerInformacionOrtopedic(){
    $.ajax({
        url:"http://144.22.244.132:8080/api/Ortopedic/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaOrtopedic(respuesta);
        }
    });
}

function pintarRespuestaOrtopedic(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";        
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='actualizarInformacionOrtopedic("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarInformacionOrtopedic("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionOrtopedic(){
    let var3 = {
        name:$("#Oname").val(),
        brand:$("#Obrand").val(),
        year:$("#Oyear").val(),
        description:$("#Odescription").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://144.22.244.132:8080/api/Ortopedic/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

function borrarInformacionOrtopedic(idElemento){
    let myData={
        id:idElemento
    };

    let dataToSend=JSON.stringify(myData);
    
    $.ajax({
        url:"http://144.22.244.132:8080/api/Ortopedic/"+idElemento,
        type:'DELETE',
        data:dataToSend,
        contentType:'application/json',
        dataType:'JSON',
        success:function(response) {
            $("#resultado2").empty();
            traerInformacionOrtopedic();
            alert("Se ha Eliminado.")
        },

        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}


function actualizarInformacionOrtopedic(idElemento){ 
    let myData={
        id:idElemento,
        name:$("#Oname").val(),
        brand:$("#Obrand").val(),
        year:$("#Oyear").val(),
        description:$("#Odescription").val(),
        
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://144.22.244.132:8080/api/Ortopedic/update",
        type:'PUT',
        data:dataToSend,
        contentType:'application/JSON',
        dataType: 'JSON', 

        success:function(respuesta) {
            $("#resultado2").empty();
            $("#id").val("");
            $("#Oname").val("");
            $("#Obrand").val("");
            $("#Oyear").val("");
            $("#Odescription").val("");
            
            traerInformacionOrtopedic();
            alert("se ha Actualizado")
            window.location.reload();
        },

        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se actualizo correctamente");

        }
    });

}

//===================================CLIENTES=============================\\

function traerInformacionClient(){
    $.ajax({
        url:"http://144.22.244.132:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClient(respuesta);
        }
    });
}

function pintarRespuestaClient(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";        
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="<td> <button onclick='actualizarInformacionClient("+respuesta[i].idClient+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarInformacionClient("+respuesta[i].idClient+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);
}

function guardarInformacionClient(){
    let var4 = {       
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://144.22.244.132:8080/api/Client/save",
       
        
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente nuevo cliente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

function actualizarInformacionClient(idElemento){ 
    let myData={
        idClient:idElemento,
        
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        
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
            $("#CLemail").val("");
            $("#CLpassword").val("");
            $("#CLname").val("");
            $("#CLage").val("");
            
            traerInformacionClient();
            alert("se ha Actualizado")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se actualizo correctamente");

        }
    });
}
function borrarInformacionClient(idElemento){
    let myData={
        idClient:idElemento
    };

    let dataToSend=JSON.stringify(myData);
    
    $.ajax({
        url:"http://144.22.244.132:8080/api/Client/"+idElemento,
        type:'DELETE',
        data:dataToSend,
        contentType:'application/json',
        dataType:'JSON',
        success:function(response) {
            $("#resultado3").empty();
            traerInformacionClient();
            alert("Se ha Eliminado.")
        },

        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}

//===================================MENSAJES=============================\\
function traerInformacionMessage(){
    $.ajax({
        url:"http://144.22.244.132:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMessage(respuesta);
        }
    });
}

function pintarRespuestaMessage(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionMessage("+respuesta[i].idMessage+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarInformacionMessage("+respuesta[i].idMessage+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMessage(){
    let var5 = {
        
        messageText:$("#Mmessage").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var5),
        
        url:"http://144.22.244.132:8080/api/Message/save",
       
        
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}
function actualizarInformacionMessage(idElemento){
    let myData={
        idMessage:idElemento,
        messageText:$("#Mmessage").val(),
        
        
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://144.22.244.132:8080/api/Message/update",
        type:'PUT',
        data:dataToSend,
        contentType:'application/JSON',
        dataType: 'JSON', 

        success:function(respuesta) {
            $("#resultado4").empty();
            $("#idMessage").val("");
            $("#Mmessage").val("");
            
            
            traerInformacionMessage();
            alert("se ha Actualizado")
        },

        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se actualizo correctamente");

        }
    });

}

function borrarInformacionMessage(idElemento){
    let myData={
        idMessage:idElemento
    };

    let dataToSend=JSON.stringify(myData);
    
    $.ajax({
        url:"http://144.22.244.132:8080/api/Message/"+idElemento,
        type:'DELETE',
        data:dataToSend,
        contentType:'application/json',
        dataType:'JSON',
        success:function(response) {
            $("#resultado4").empty();
            traerInformacionMessage();
            alert("Se ha Eliminado.")
        },

        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}
//===================================RESERVACIONES=============================\\
function traerInformacionReservation(){
    $.ajax({
        url:"http://144.22.244.132:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}
function pintarRespuesta(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionReservation("+respuesta[i].idReservation+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarInformacionReservation("+respuesta[i].idReservation+")'>Borrar</button>";
        myTable+="</tr>";
        
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}
function guardarInformacionReservation(){
    let var6 = {
        
        startDate:$("#RstartDate").val(),
        devolutionDate:$("#RdevolutionDate").val(),
        status:$("#Rstatus").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var6),
        
        url:"http://144.22.244.132:8080/api/Reservation/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente la fecha de reservacion");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}
function actualizarInformacionReservation(idElemento){ 
    let myData={
        idReservation:idElemento,
        startDate:$("#RstartDate").val(),
        devolutionDate:$("#RdevolutionDate").val(),
        status:$("#Rstatus").val(),
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
            $("#RstartDate").val("");            
            $("#RdevolutionDate").val("");
            $("#Rstatus").val("");
            
            traerInformacionReservation();
            alert("se ha Actualizado correctamente la fecha de reservacion")
        },

        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se actualizo la reservacion");

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