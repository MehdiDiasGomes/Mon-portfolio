function sendEmail() {
    let parms = {
        name: document.getElementById("nom").value,
        object: document.getElementById("objet").value,
        mail: document.getElementById("mail").value,
        message: document.getElementById("area").value
    };

    emailjs.send("service_7cwu2gi", "template_kd5ndzf", parms)
        .then(function (response) {
            console.log("Email envoyé avec succès : ", response);
            displayMessage("success", "Email envoyé avec succès");
        })
        .catch(function (error) {
            console.error("Erreur lors de l'envoi de l'email : ", error);
            displayMessage("error", "Échec de l'envoi de l'email");
        });

        console.log("test")
}

function displayMessage(type, message) {
    alert(message);
}