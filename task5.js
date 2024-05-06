//class movie


class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;

        if (typeof this.rating === 'undefined') {
            this.rating = 'PG';
        }
    }
}

const mov1 = new Movie('KGF', 'Annapurna');
const mov2 = new Movie('RRR', 'Gold', '5');
const mov3 = new Movie('Pushpa', 'Silver', '5');
const mov4 = new Movie('Radhe Shyam', 'Platinum');

console.log(mov1); 
console.log(mov2);
console.log(mov3);
console.log(mov4);

function getPG(movies) {
    const pgMovies = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].rating === 'PG') {
            pgMovies.push(movies[i].title);
        }
    }
    return pgMovies;
}

const movieArray = [mov1, mov2, mov3, mov4];
console.log(getPG(movieArray)); 
const mov5 = new Movie('Casino Royale', 'Eon Productions', 'PG-13');
console.log(mov5);

//calculate uberprice


class UberPrice {
    constructor(baseprice, kilometre, tax) {
        this.baseprice = baseprice;
        this.kilometre = kilometre;
        this.tax = tax;
    }
}

const price = new UberPrice(100, 10, 200);
console.log(price); 
