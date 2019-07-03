function ready()
{
$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText){
  axios.get('https://api.themoviedb.org/3/search/movie?api_key=e31d66b37c7812d921f4d01bc19d93d2&language=en-US&query='+searchText+'&page=1&include_adult=false'
  )
    .then((response) => {
      console.log(response);
      let movies = response.data.results;
      let output = '';
      $.each(movies, (index, movie) => {
        output += `
          <div class="col-sm-3">
            <div class="well text-center">
              <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" >
              <h5 class="title">${movie.title}</h5>
              <h5 class="overview">${movie.overview}</h5>
              <li class="list-group-item box1"><strong>Released On:</strong> ${movie.release_date}</li>
             
              <li class="list-group-item box2"><strong>IMDB Rating:</strong> ${movie.vote_average}</li>
              <br>
              <br>
            </div>
          </div>
         
        `;
      });

      $('#movies').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
}

