// Attraverso l'apposita API di Boolean generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

function getEmails () {

  for (let i = 0; i < 10; i++) {
    $.ajax({
      url: 'https://flynn.boolean.careers/exercises/api/random/mail',
      method: 'GET',

      success: function (data) {
        const mail = data.response;
        console.log(mail);
        $('#container').append(`<p>${mail}</p>`)
      },

      error: function() {
        console.log('errore');
      }
    })
  }
}

getEmails();
