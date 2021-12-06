//-----------------------------------------User "Registro"------------------------------------------//
$(document).ready(function(){
    traerInformacionRegistro();
});

function autoInicioRegistro(){
    console.log("se esta ejecutando")
    $.ajax({
        url: "http://144.22.244.132:8080/api/Registro/all",
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            traerInformacionRegistro(respuesta);
            let $select = $("#select-category");
            $.each(respuesta, function (id,name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select" +name.id);
            });
        }    

    })
}


function traerInformacionRegistro(){
    $.ajax({
        url:"http://localhost:8080/api/Registro/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            //var myItems = response.items;
            var valor ='';
            for(i=0;i < response.length;i++){
                valor+= '<tr>'+
                    '<td>'+response[i].iddocument+'</td>'+
                    '<td>'+response[i].tipodocumento+'</td>'+
                    '<td>'+response[i].apellidouno+'</td>'+
                    '<td>'+response[i].apellidodos+'</td>'+                 
                    '<td>'+response[i].nombredos+'</td>'+
                    '<td>'+response[i].nombreuno+'</td>'+
                    '<td>'+response[i].birthdate+'</td>'+
                    '<td>'+response[i].gender+'</td>'+
                    '<td>'+response[i].city+'</td>'+
                    '<td>'+response[i].address+'</td>'+
                    '<td>'+response[i].telefonouno+'</td>'+
                    '<td>'+response[i].telefonodos+'</td>'+
                    '<td>'+response[i].email+'</td>'+
                    '<td>'+response[i].facebook+'</td>'+
                    '<td>'+response[i].instagram+'</td>'+
                    '<td>'+response[i].codeReference+'</td>'+
                    '<td>'+response[i].tiposangre+'</td>'+
                    '<td>'+response[i].age+'</td>'+
                    '<td>'+response[i].password+'</td>'+
                    '</td>'+
                '</tr>';
            }
            $('#resultado1').html(valor);
            
        }

    });
}

function guardarInformacionRegistro(){
    let var2 = {
        iddocument:$("#idDocument").val(),
        tipodocumento:$("#tipo-documento").val(),
        apellidouno:$("#lastName").val(),
        apellidodos:$("#secondLastName").val(),
        nombredos:$("#secondName").val(),
        nombreuno:$("#firstName").val(),
        birthdate:$("#birthDate").val(),
        gender:$("#genero").val(),
        city:$("#ciudad").val(),
        address:$("#direccion").val(),
        telefonouno:$("#phoneOne").val(),
        telefonodos:$("#phoneTwo").val(),
        email:$("#Remail").val(),
        facebook:$("#Rfacebook").val(),
        instagram:$("#Rinstagram").val(),
        codeReference:$("#Rcode").val(),
        tiposangre:$("#bloodtype").val(),
        age:$("#Redad").val(),
        password:$("#Rpassword").val(),
        
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://localhost:8080/api/Registro/save",
       
                
        success:function(response) {
                console.log(response);
                console.log("Se guardo correctamente el nuevo Registro");
                alert("Se guardo correctamente el nuevo Registro");
                window.location.reload()
                window.location="indeuser.html";
    
        },        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente el Registro");
        }
        });
}

function borrarInformacionRegistro(idElemento){
    let elemento={
        id:idElemento
    };


    let dataToSend=JSON.stringify(elemento);
    
    $.ajax({
        url:"http://localhost:8080/api/Registro/"+idElemento,
        type:'DELETE',
        data:dataToSend,
        contentType:'application/JSON',
        dataType:'JSON',
        success:function(respuesta) {
            $("#resultado1").empty();
            autoInicioRegistro();
            alert("Se ha Eliminado correctamente el Registro.")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}

function actualizarInformacionRegistro(idElemento){
    let myData={
        id:idElemento,
        
        iddocument:$("#idDocument").val(),
        tipodocumento:$("#tipo-documento").val(),
        apellidouno:$("#lastName").val(),
        apellidodos:$("#secondLastName").val(),
        nombredos:$("#secondName").val(),
        nombreuno:$("#firstName").val(),
        birthdate:$("#birthDate").val(),
        gender:$("#genero").val(),
        city:$("#ciudad").val(),
        address:$("#direccion").val(),
        telefonouno:$("#phoneOne").val(),
        telefonodos:$("#phoneTwo").val(),
        email:$("#Remail").val(),
        facebook:$("#Rfacebook").val(),
        instagram:$("#Rinstagram").val(),
        codeReference:$("#Rcode").val(),
        tiposangre:$("#bloodtype").val(),
        age:$("#Redad").val(),
        password:$("#Rpassword").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://144.22.244.132:8080/api/Registro/update",
        type:'PUT',
        data:dataToSend,
        contentType:'application/json',
        dataType: 'JSON', 

        success:function(respuesta) {
            $("#resultado1").empty();
            $("#idDocument").val("");
            $("#tipo-documento").val("");
            $("#lastName").val("");
            $("#secondLastName").val("");
            $("#secondName").val("");
            $("#firstName").val("");
            $("#birthDate").val("");
            $("#genero").val("");
            $("#ciudad").val("");
            $("#direccion").val("");
            $("#phoneOne").val("");
            $("#phoneTwo").val("");
            $("#Remail").val("");
            $("#Rfacebook").val("");
            $("#Rinstagram").val("");
            $("#Rcode").val("");
            $("#bloodtype").val("");
            $("#Redad").val("");
            $("#Rpassword").val("");
            
            autoInicioRegistro();
            alert("Se ha Actualizado correctamente el Registro")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se actualizo correctamente");

        }
    });

}
//-----------------------------------------End User "Registro"------------------------------------------//
//-----------------------------------------"Bike"------------------------------------------//


$(document).ready(function(){
    traerInformacionbikes();
});

function autoIniciobikes(){
    console.log("se esta ejecutando")
    $.ajax({
        url: "http://localhost:8080/api/bikes/all",
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            traerInformacionbikes(respuesta);
            let $select = $("#select-category");
            $.each(respuesta, function (id,name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select" +name.id);
            });
        }    

    })
}


function traerInformacionbikes(){
    $.ajax({
        url:"http://localhost:8080/api/bikes/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            //var myItems = response.items;
            var valor ='';
            for(i=0;i < response.length;i++){
                valor+= '<tr>'+
                    '<td>'+response[i].serial+'</td>'+
                    '<td>'+response[i].brand+'</td>'+
                    '<td>'+response[i].size+'</td>'+
                    '<td>'+response[i].type+'</td>'+                 
                    '<td>'+response[i].color+'</td>'+
                    '<td>'+response[i].timeUsed+'</td>'+
                    '<td>'+response[i].status+'</td>'+
              
                    '</td>'+
                '</tr>';
            }
            $('#resultado2').html(valor);
            
        }

    });
}

function guardarInformacionbikes(){
    let var3 = {
        serial:$("#Bserial").val(),
        brand:$("#Bmark").val(),
        size:$("#bikesize").val(),
        type:$("#biketype").val(),
        color:$("#Bcolour").val(),
        timeUsed:$("#Btime").val(),
        status:$("#Bstatus").val(),
        
        
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://localhost:8080/api/bikes/save",
       
                
        success:function(response) {
                console.log(response);
                console.log("Se guardo correctamente el nuevo bikes");
                alert("Se guardo correctamente el nuevo bikes");
                window.location.reload()
    
        },        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente el bikes");
        }
        });
}

function borrarInformacionbikes(idElemento){
    let elemento={
        id:idElemento
    };


    let dataToSend=JSON.stringify(elemento);
    
    $.ajax({
        url:"http://localhost:8080/api/bikes/"+idElemento,
        type:'DELETE',
        data:dataToSend,
        contentType:'application/JSON',
        dataType:'JSON',
        success:function(respuesta) {
            $("#resultado2").empty();
            autoIniciobikes();
            alert("Se ha Eliminado correctamente el bikes.")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}

function actualizarInformacionbikes(idElemento){
    let myData={
        id:idElemento,
        
        serial:$("#Bserial").val(),
        brand:$("#Bmark").val(),
        size:$("#bikesize").val(),
        type:$("#biketype").val(),
        color:$("#Bcolour").val(),
        timeUsed:$("#Btime").val(),
        status:$("#Bstatus").val(),
       
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/bikeso/update",
        type:'PUT',
        data:dataToSend,
        contentType:'application/json',
        dataType: 'JSON', 

        success:function(respuesta) {
            $("#resultado1").empty();
            $("#Bserial").val("");
            $("#Bmark").val("");
            $("#bikesize").val("");
            $("#biketype").val("");
            $("#Bcolour").val("");
            $("#Btime").val("");
            $("#Bstatus").val("");
            
            
            autoIniciobikes();
            alert("Se ha Actualizado correctamente ")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se actualizo correctamente");

        }
    });

}
//-----------------------------------------End Bike "Registro"------------------------------------------//
//-----------------------------------------"score"------------------------------------------//



$(document).ready(function(){
    traerInformacionscore();
});

function autoInicioscore(){
    console.log("se esta ejecutando")
    $.ajax({
        url: "http://localhost:8080/api/score/all",
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            traerInformacionscore(respuesta);
            let $select = $("#select-category");
            $.each(respuesta, function (id,name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select" +name.id);
            });
        }    

    })
}


function traerInformacionscore(){
    $.ajax({
        url:"http://localhost:8080/api/score/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            //var myItems = response.items;
            var valor ='';
            for(i=0;i < response.length;i++){
                valor+= '<tr>'+
                    '<td>'+response[i].idScore+'</td>'+
                    '<td>'+response[i].message+'</td>'+
                    '<td>'+response[i].score+'</td>'+
                   
              
                    '</td>'+
                '</tr>';
            }
            $('#resultado4').html(valor);
            
        }

    });
}

function guardarInformacionscore(){
    let var4 = {
        idScore:$("#BidScore").val(),
        message:$("#Bmark").val(),
        score:$("#scoreize").val(),
        
        
        
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://localhost:8080/api/score/save",
       
                
        success:function(response) {
                console.log(response);
                console.log("Se guardo correctamente el nuevo score");
                alert("Se guardo correctamente el nuevo score");
                window.location.reload()
    
        },        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente el score");
        }
        });
}

function borrarInformacionscore(idElemento){
    let elemento={
        id:idElemento
    };


    let dataToSend=JSON.stringify(elemento);
    
    $.ajax({
        url:"http://localhost:8080/api/score/"+idElemento,
        type:'DELETE',
        data:dataToSend,
        contentType:'application/JSON',
        dataType:'JSON',
        success:function(respuesta) {
            $("#resultado4").empty();
            autoInicioscore();
            alert("Se ha Eliminado correctamente el score.")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}

function actualizarInformacionscore(idElemento){
    let myData={
        id:idElemento,
        
        idScore:$("#BidScore").val(),
        message:$("#Bmark").val(),
        score:$("#scoreize").val(),
        
       
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/score/update",
        type:'PUT',
        data:dataToSend,
        contentType:'application/json',
        dataType: 'JSON', 

        success:function(respuesta) {
            $("#resultado4").empty();
            $("#BidScore").val("");
            $("#Bmark").val("");
            $("#scoreize").val("");
            
            
            
            autoInicioscore();
            alert("Se ha Actualizado correctamente ")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se actualizo correctamente");

        }
    });

}
//-----------------------------------------End score"------------------------------------------//
//-----------------------------------------"Owner"------------------------------------------//

$(document).ready(function(){
    traerInformacionowner();
});

function autoInicioOwner(){
    console.log("se esta ejecutando")
    $.ajax({
        url: "http://localhost:8080/api/owner/all",
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            traerInformacionowner(respuesta);
            let $select = $("#select-category");
            $.each(respuesta, function (id,name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select" +name.id);
            });
        }    

    })
}


function traerInformacionOwner(){
    $.ajax({
        url:"http://localhost:8080/api/owner/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            //var myItems = response.items;
            var valor ='';
            for(i=0;i < response.length;i++){
                valor+= '<tr>'+
                    '<td>'+response[i].idOwner+'</td>'+
                    '<td>'+response[i].email+'</td>'+
                    
                   
              
                    '</td>'+
                '</tr>';
            }
            $('#resultado5').html(valor);
            
        }

    });
}

function guardarInformacionOwner(){
    let var5 = {
        idOwner:$("#BidOwner").val(),
        email:$("#Bmark").val(),
        
        
        
        
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var5),
        
        url:"http://localhost:8080/api/owner/save",
       
                
        success:function(response) {
                console.log(response);
                console.log("Se guardo correctamente el nuevo owner");
                alert("Se guardo correctamente el nuevo owner");
                window.location.reload()
    
        },        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente el owner");
        }
        });
}

function borrarInformacionOwner(idElemento){
    let elemento={
        id:idElemento
    };


    let dataToSend=JSON.stringify(elemento);
    
    $.ajax({
        url:"http://localhost:8080/api/owner/"+idElemento,
        type:'DELETE',
        data:dataToSend,
        contentType:'application/JSON',
        dataType:'JSON',
        success:function(respuesta) {
            $("#resultado5").empty();
            autoInicioowner();
            alert("Se ha Eliminado correctamente el owner.")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}

function actualizarInformacionOwner(idElemento){
    let myData={
        id:idElemento,
        
        idOwner:$("#BidOwner").val(),
        email:$("#Bmark").val(),
        
        
       
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/owner/update",
        type:'PUT',
        data:dataToSend,
        contentType:'application/json',
        dataType: 'JSON', 

        success:function(respuesta) {
            $("#resultado5").empty();
            $("#BidOwner").val("");
            $("#Bmark").val("");
            
            
            
            
            autoInicioowner();
            alert("Se ha Actualizado correctamente ")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se actualizo correctamente");

        }
    });

}
//-----------------------------------------End Owner"------------------------------------------//
//-----------------------------------------"Reservacion"------------------------------------------//



$(document).ready(function(){
    traerInformacionreservation();
});

function autoInicioreservation(){
    console.log("se esta ejecutando")
    $.ajax({
        url: "http://localhost:8080/api/reservation/all",
        type: "GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            traerInformacionreservation(respuesta);
            let $select = $("#select-category");
            $.each(respuesta, function (id,name){
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select" +name.id);
            });
        }    

    })
}


function traerInformacionreservation(){
    $.ajax({
        url:"http://localhost:8080/api/reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(response){
            //var myItems = response.items;
            var valor ='';
            for(i=0;i < response.length;i++){
                valor+= '<tr>'+
                    '<td>'+response[i].idReservation+'</td>'+
                    '<td>'+response[i].reservationDate+'</td>'+
                    
                   
              
                    '</td>'+
                '</tr>';
            }
            $('#resultado6').html(valor);
            
        }

    });
}

function guardarInformacionreservation(){
    let var6 = {
        idReservation:$("#Breservation").val(),
        reservationDate:$("#Bmark").val(),
        
        
        
        
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var6),
        
        url:"http://localhost:8080/api/reservation/save",
       
                
        success:function(response) {
                console.log(response);
                console.log("Se guardo correctamente el nuevo reservation");
                alert("Se guardo correctamente el nuevo reservation");
                window.location.reload()
    
        },        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente el reservation");
        }
        });
}

function borrarInformacionreservation(idElemento){
    let elemento={
        id:idElemento
    };


    let dataToSend=JSON.stringify(elemento);
    
    $.ajax({
        url:"http://localhost:8080/api/reservation/"+idElemento,
        type:'DELETE',
        data:dataToSend,
        contentType:'application/JSON',
        dataType:'JSON',
        success:function(respuesta) {
            $("#resultado6").empty();
            autoInicioreservation();
            alert("Se ha Eliminado correctamente el reservation.")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
        }
    });
}

function actualizarInformacionreservation(idElemento){
    let myData={
        id:idElemento,
        
        idReservation:$("#Breservation").val(),
        reservationDate:$("#Bmark").val(),
        
        
       
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);

    $.ajax({
        url:"http://localhost:8080/api/reservation/update",
        type:'PUT',
        data:dataToSend,
        contentType:'application/json',
        dataType: 'JSON', 

        success:function(respuesta) {
            $("#resultado6").empty();
            $("#Breservation").val("");
            $("#Bmark").val("");
            
            
            
            
            autoInicioreservation();
            alert("Se ha Actualizado correctamente ")
            window.location.reload()
        },

        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se actualizo correctamente");

        }
    });

}
//-----------------------------------------End Owner"------------------------------------------//
//-----------------------------------------"contact"------------------------------------------//
$(document).ready(function() {
    $("#btn-contact").click(function() {
        $("input1").val("")
        $("input2").val("")
        $("input3").val("")
        $("input4").val("")
    })
})