// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const allDirectors = moviesArray.map(function(movies){
    return movies.director
    })
    return allDirectors
}
    

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
     const dramasBySpielberg = moviesArray.filter(function(movies) {
        return movies.director === 'Steven Spielberg' && movies.genre.includes('Drama');
        
});
    return dramasBySpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) {
        return 0;
    }
    const aveScore = moviesArray.reduce(function (accumulator, currentValue) { 
    if(currentValue.score)
    return accumulator + currentValue.score;
    else 
    return  accumulator
    }, 0);
    return + ((aveScore/ moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies

    function dramaMoviesScore(moviesArray) {

        const movieDrama = moviesArray.filter(function(movie){

         if (movie.genre.includes("Drama")) {

             return true;

        }})

        if (movieDrama.length === 0){
            return 0;
        }
        const sum = movieDrama.reduce(function(sum, movie){
             return sum + movie.score;
         }, 0);

         const dramaScore = sum / movieDrama.length;

         return +(dramaScore.toFixed(2));
     }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray
    .slice()
    .sort(function(a,b) {
    return a.year -b.year || a.title.localCompare(b.title)
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray
    .map(function(movie){
        return movie.title
    })
    .sort(function(a,b){
        return a.localCompare(b)
    })
    .slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
