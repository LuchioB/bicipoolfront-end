
if (email == "" || password == "") {
    // alert("Llene todos los campos, no pueden estar vacios");
    let idalert = document.getElementById('alertvacia');
    let alertHTML = `
    <div class="alert alert-primary" role="alert">
        Llene todos los campos, no pueden estar vacios
    </div>
    `;
    idalert.innerHTML = alertHTML;
    return
} else {
    $.ajax({
        url: "http://144.22.244.132:8080/api/Registro/" + email + "/" + password,
        type: "GET",
        dataType: "json",
        success: function (respuesta) {
            
            if (respuesta.id != null) {
                alert(`Bienvenido ${respuesta.name}`);
                window.location="indeuser.html";
            } else {
                let idalert = document.getElementById('alertvacia');
                let alertHTML = `
                <div class="alert alert-primary" role="alert">
                El usuario no se encuentra, intente de nuevo o cree una cuenta si no la tiene
                </div>
                `;
                idalert.innerHTML = alertHTML;
                return
            }
        }
    });
}
