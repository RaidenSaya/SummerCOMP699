//STEP 1
var movies = ['Inception', 'Office Space', 'Lord of The Rings', 'The Dark Knight', '2 Fast 2 Furious'];
console.log(movies[1]);
console.log('\n');
//STEP 2
var movies = new Array(5);
movies[0] = 'Inception'
movies[1] = 'Office Space'
movies[2] = 'Lord of The Rings'
movies[3] = 'The Dark Knight'
movies[4] = '2 Fast 2 Furious'
console.log(movies[0]);
console.log('\n');
//STEP 3
var movies = new Array(5);
movies[0] = 'Inception'
movies[1] = 'Office Space'
movies[2] = 'Lord of The Rings'
movies[3] = 'The Dark Knight'
movies[4] = '2 Fast 2 Furious'
movies.splice(2, 0, 'Coco');
console.log(movies.length);
console.log('\n');
//STEP 4
var movies = [
    'Inception',
    'Office Space',
    'Lord of The Rings',
    'The Dark Knight',
    '2 Fast 2 Furious'
]
movies.shift();
console.log(movies);
console.log('\n');
//STEP 5
var movies = [
    'Inception',
    'Office Space',
    'Lord of The Rings',
    'The Dark Knight',
    '2 Fast 2 Furious',
    'Coco',
    'Casino Royale'
];
for (let movie in movies) {
    console.log(movies[movie]);
}
console.log('\n');
//STEP 6
var movies = [
    'Inception',
    'Office Space',
    'Lord of The Rings',
    'The Dark Knight',
    '2 Fast 2 Furious',
    'Coco',
    'Casino Royale'
];
for (let i of movies) {
    console.log(i);
}
console.log('\n');
//STEP 7
var movies = [
    'Inception',
    'Office Space',
    'Lord of The Rings',
    'The Dark Knight',
    '2 Fast 2 Furious',
    'Coco',
    'Casino Royale'
];
movies.sort()
for (let i of movies) {
    console.log(i);
};
console.log('\n');
//STEP 8
var movies = [
    'Inception',
    'Office Space',
    'Lord of The Rings',
    'The Dark Knight',
    '2 Fast 2 Furious',
    'Coco',
    'Casino Royale',  
];
var leastFavMovies = [
    'Suicide Squad',
    'The Last Jedi',
    'Jupiter Ascending'
];
movies.sort();
leastFavMovies.sort();
console.log('Movies I like:', '\n', '\n');
for (let i of movies) {
    console.log(i);
};
console.log('\n', '\n', 'Movies I regret watching:','\n', '\n',);
for (let i of leastFavMovies) {
    console.log(i);
};
console.log('\n');
//STEP 9
var movies = [
    'Inception',
    'Office Space',
    'Lord of The Rings',
    'The Dark Knight',
    '2 Fast 2 Furious',
    'Coco',
    'Casino Royale',  
];
var leastFavMovies = [
    'Suicide Squad',
    'The Last Jedi',
    'Jupiter Ascending'
];
movies = movies.concat(leastFavMovies)
movies.reverse().sort()
for (let i of movies) {
    console.log(i);
};
console.log('\n');
//STEP 10
var movies = [
    'Inception',
    'Office Space',
    'Lord of The Rings',
    'The Dark Knight',
    '2 Fast 2 Furious',
    'Coco',
    'Casino Royale',  
];
var leastFavMovies = [
    'Suicide Squad',
    'The Last Jedi',
    'Jupiter Ascending'
];
movies = movies.concat(leastFavMovies)
movies.reverse().sort()

var lastMovie = movies.pop()
console.log(lastMovie);
console.log('\n');
//STEP 11
var movies = [
    'Inception',
    'Office Space',
    'Lord of The Rings',
    'The Dark Knight',
    '2 Fast 2 Furious',
    'Coco',
    'Casino Royale',  
];
var leastFavMovies = [
    'Suicide Squad',
    'The Last Jedi',
    'Jupiter Ascending'
];
movies = movies.concat(leastFavMovies)
movies.reverse().sort()
var lastMovie = movies.shift()
console.log(lastMovie);
console.log('\n');
//STEP 12
var movies = [
    'Inception',
    'Office Space',
    'Lord of The Rings',
    'The Dark Knight',
    '2 Fast 2 Furious',
    'Coco',
    'Casino Royale',  
    'Suicide Squad',
    'The Last Jedi',
    'Jupiter Ascending'
];
console.log(movies.indexOf("Suicide Squad"), movies.indexOf("The Last Jedi"), movies.indexOf("Jupiter Ascending"))
movies[7] = "National Treasure"
movies[8] = "National Lampoon's Christmas Vacation"
movies[9] = "Nightmare Before Christmas"
movies.sort()
for (let i of movies) {
    console.log(i);
};
console.log('\n');
//STEP 13
var movies = [["Inception", 5], ["2 Fast 2 Furious", 4], ["Casino Royale", 5], ["Coco", 5], ["Office Space", 3]]
let movieNames = movies.filter((word) => {return typeof word[0] === 'string'}).map((word) => {
    return word[0]
});
for (let i of movieNames) {
    console.log(i);
};
console.log('\n')
//STEP 14
var employees = [
    'ZAK',
    'JESSICA',
    'MARK',
    'FRED',
    'SALLY'
];
var showEmployees = function (employees) {
    console.log("Employees:", '\n', '\n');
    for (let i of employees) {
        console.log(i);
    };
}
showEmployees(employees)
console.log('\n')
//STEP 15
function filterValues(arr) {
    return arr.filter(Boolean)
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
//STEP 16
function randomNumber(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(randomNumber([0,1,2,3,4,5,6,7,8,9,10]))
//STEP 17
function largestNumber(arr) {
    return Math.max.apply(null, arr);
}
console.log(largestNumber([0,1,2,3,4,5,6,7,8,9,10]))