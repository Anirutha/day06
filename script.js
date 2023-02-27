//1.Class Movie
//The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

//1) title, which is a String representing the title of the movie
//2) studio, which is a String representing the studio that made the movie
//3) rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
/*a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
 a String representing the studio, and a String representing the rating as its arguments,
 and sets the respective class properties to these values.*/
 //Ans:
 //Input:
 class movie { 

    constructor(title, studio, rating) { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}
const movieDetails = new movie("Vikram","Cinepolis", "PG-13");
console.log(movieDetails);
//Output:
//movie { title: 'Vikram', studio: 'Cinepolis', rating: 'PG-13' }

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
//Ans:
 //Input:
class movies { 

    constructor(title, studio, rating = "PG") { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movie1 = new movies("Thunivu","Zee studios");
console.log(movie1);
//Output:
//movies { title: 'Thunivu', studio: 'Zee studios', rating: 'PG' }

/*c) Write a method getPG, which takes an array of base type Movie as its argument, 
and returns a new array of only those movies in the input array with a rating of "PG". 
You may assume the input array is full of Movie instances. The returned array need not be full.*/
//Ans:
 //Input:
class Moviee {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}

let moviee1 = new Moviee("Vikram", "Raj kamal films", "PG");
let moviee2 = new Moviee("Sita Raman", "Vyjayanthi Movies", "V");
let movie3 = new Moviee("The Avengers", "Marvel Studios", "PG");
let movie4 = new Moviee("Thunivu", "Zee studios", "PG-13");
let movie5 = new Moviee("The rise of Gru", "Illumination", "PG");

let movieArray = [moviee1, moviee2, movie3, movie4, movie5];
let pgMovies = Moviee.getPG(movieArray);
console.log(pgMovies); 
//Output:
[ Moviee { title: 'Vikram', studio: 'Raj kamal films', rating: 'PG' },
  Moviee { title: 'The Avengers', studio: 'Marvel Studios', rating: 'PG' },
  Moviee {title: 'The rise of Gru', studio: 'Illumination', rating: 'PG' } ]
  
  /*d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
  the studio “Eon Productions”, and the rating “PG­13”*/
  //Ans:
 //Input:
  class Moviez {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    let casinoRoyale = new Moviez("Casino Royale", "Eon Productions", "PG-13");
    console.log(casinoRoyale);
    //Output:
    /*Moviez {
        title: 'Casino Royale',
        studio: 'Eon Productions',
        rating: 'PG-13' }*/