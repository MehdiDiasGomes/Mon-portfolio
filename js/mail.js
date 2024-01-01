function envoiEmail() {
    let parms = {
        name: document.getElementById("nom").value,
        object: document.getElementById("objet").value,
        mail: document.getElementById("mail").value,
    };

    emailjs.send('service_7cwu2gi', 'template_kd5ndzf', parms)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}
