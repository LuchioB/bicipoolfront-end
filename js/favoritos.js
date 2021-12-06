$(document).ready(function () {
    $.ajax({
        url: "http://localhost:8080/api/Favorite/all",
        type: "GET",
        cache: false,

        success: function (result) {
            let i = 0;
            let propietario = "";
            let color = "";
            let marca = "";
            let modelo = 0
            let tamaño = "";
            let serie = "";
            let salidaFila = "";

            $("#favorites-table tbody").empty();

            // salidaFila = "<tr><th>ID Cliente</th><th>Nombre</th><th>Email</th><th>Edad</th><th>Mensajes</th><th>Reservaciones</th><th class='accionTd'>Acción</th></tr>";
            // $("#client-table tbody").append(salidaFila);

            for (i = 0; i < result.length; i++) {
                propietario = result[i]["bike"]["owner"]["idOwner"]; // problemas con el propietario al eliminar la relación owner 
                color = result[i]["bike"]["color"];
                marca = result[i]["bike"]["brand"];
                modelo = result[i]["bike"]["model"];
                tamaño = result[i]["bike"]["size"];
                serie = result[i]["bike"]["serial"];

                salidaFila = "<tr><td>" + serie + "</td><td>" +
                    propietario + "</td><td>" + marca + "</td><td>" + modelo + "</td><td>" + tamaño + "</td><td>" +
                    color + "</td><td>" + "<button class='btn btn-warning' onclick='deleteFavorite(" + result[i]["idfavorites"] + ")'>Borrar</button>" + "</td><tr>";

                $("#favorites-table tbody").append(salidaFila);

            }//Fin del for
        }

    })
    $("#add-favorite-button").click(function () {
        let bike = $.trim($("#bike-input").val());
        let user = $.trim($("#user-input").val());

        $.ajax({
            url: "http://localhost:8080/api/user/new",
            type: "POST",
            data: JSON.stringify({
                bike: bike,
                user: user
            }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function () {
                alert("Favorito agregado");
                //location.href = "login.html";
            },
        });
    })
})

function deleteFavorite(idFavorite) {
    $.ajax({
        url: `http://localhost:8080/api/Favorite/${idFavorite}`,
        type: "DELETE",
        success: function(){
            alert("Se ha eliminado el favorito")
        }
    });
}

function updateFavorite(idFavorite) {
    $("#btn-upd-client").click(function () {
        let urlServicio = "http://localhost:8080/api/Favorite/update";
        let bike = $.trim($("#bike-input").val());
        let user = $.trim($("#user-input").val());
            $.ajax({

                url: urlServicio,
                type: "PUT",
                data: JSON.stringify({ "idClient": idClient, "name": name, "age": age, "password": password }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",

                success: (function () {
                    // idClient = 0;
                    $("#bike-input").val("");
                    $("#user-input").val("");
                    alert("Se ha actualizado el favorito")
                    window.location.reload();
                })
            })
    })
}