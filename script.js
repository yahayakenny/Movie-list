const name = document.getElementById('movie-name');
const producer = document.getElementById('producer');
const year = document.getElementById('year');
const rating = document.getElementById('rating');
const form = document.getElementById('form');
const submit = document.getElementById('submit');
const list = document.getElementById('list');
const clear = document.getElementById('clear');
const filter = document.getElementById('filter');


//Get Tasks from local storage
const getMovies = () => {
  let movies;
  if (localStorage.getItem('movies') === null) {
      movies = [];
  } else {
      movies = JSON.parse(localStorage.getItem('movies'));
  }

  movies.forEach ( movie=> {
    const movielist = document.createElement('tr');

  console.log(movielist)
  movielist.setAttribute('id', 'addList' )
      movielist.innerHTML = `
      <td>${movie}</td>
      <td>${movie}</td>
      <td>${movie}</td>
      <td>${movie}</td>
      `;
  list.appendChild(movielist);
  }
)
}

//To Persist to local storage
document.addEventListener("DOMContentLoaded",getMovies);


//Show Movies 
const showMovies = (e) => {
  const nameValue = name.value;
  const producerValue = producer.value;
  const yearValue = year.value;
  const ratingValue = rating.value;
  console.log(nameValue, producerValue, yearValue, ratingValue);

  const movielist = document.createElement('tr');

  console.log(movielist)
  movielist.setAttribute('id', 'addList' )
      movielist.innerHTML = `
      <td>${nameValue}</td>
      <td>${producerValue}</td>
      <td>${yearValue}</td>
      <td>${ratingValue}</td>
      `;
  list.appendChild(movielist);

   //Persist to Local storage
  storeMovies (nameValue, producerValue, yearValue, ratingValue)
   //Prevent Default form submission
  e.preventDefault();
};



const storeMovies = (movie) => {
  let movies;
  if (localStorage.getItem('movies') === null) {
      movies = [];
  } else {
      movies = JSON.parse(localStorage.getItem('movies'));
  }

  movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
}

//Clear Movies
const clearMovies = () => {
    list.innerHTML = "";
   
}


//Filter tasks
const filterTasks = (e) => {
  const text = e.target.value.toLowerCase();
  console.log(text);
  const tr = list.getElementsByTagName("tr");
 for (i = 0; i < tr.length; i++){
   const td = tr[i].getElementsByTagName("td")[0];
   if (td) {
     const textValue = td.textContent || td.innerText;
     if (textValue.toLowerCase().indexOf(text) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
   }
 }
}

//Event listeners
form.addEventListener('submit', showMovies);
clear.addEventListener('click', clearMovies)
filter.addEventListener('keyup', filterTasks)
