var movies = require('./movies');

var emilyMovies = movies();
emilyMovies.favMovie = "The Notebook";


console.log("Emily's favorite movie is : " + emilyMovies.favMovie);