var requete = new XMLHttpRequest();
const app = document.getElementById('root');
const logo = document.createElement('img');
const container = document.createElement('div');
container.setAttribute('class','container');

logo.src = 'logo.png';

app.appendChild(logo);
app.appendChild(container);

requete.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

requete.onload = function () {
    var data = JSON.parse(this.response);

    if (requete.status >= 200 && requete.status < 400) {
        data.forEach(movie => {
            const card = document.createElement('div');
            card.setAttribute('class','card');

            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            const p = document.createElement('p');
            movie.description = movie.description.substring(0,300);
            p.textContent = `${movie.description}...`;

            container.appendChild(card);

            card.appendChild(h1);
            card.appendChild(p);




        });
      } else {
        console.log('error');
      }
}

requete.send();


//

