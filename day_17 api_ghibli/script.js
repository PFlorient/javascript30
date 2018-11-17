var requete = new XMLHttpRequest();

requete.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

requete.onload = function () {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
          console.log(movie.title);
        });
      } else {
        console.log('error');
      }
}

requete.send();


