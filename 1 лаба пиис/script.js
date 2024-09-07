//1. создали переменную чтобы узнать количество фильмов
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

//2. создали обьект со свойствами count и movies
let personalMovieDB = {
    count: numberOfFilms,
    movies: {}
};

//3. создадим цикл чтобы по 2 разать 2 вопроса
for(let i = 0; i < 2; i++)
{
    let lastMovie = prompt('Один из последних просмотренных фильмов?');
    let movieRating = prompt('На сколько оцените его?');


  //4. нельзя пустую строку, отменить ответ или больше 50 букв
  if(lastMovie != null && movieRating != null 
    && lastMovie != '' && movieRating != '' 
    && lastMovie.length < 50 )
    {
        personalMovieDB.movies[lastMovie] = movieRating;//5. название обьекта movie=lastMovie значение обьекта станоится=movieRating
    }
     else
    {
        i--//если ответ на вопрос неправильный то отвечааем опять
    }
}

//6. Вывести в консоль
console.log(personalMovieDB);