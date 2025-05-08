"use strict";
function filterByRating(items) {
    return items.filter(item => item.rating >= 4);
}
const myProducts = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.5 },
    { title: "Book C", rating: 2.5 },
    { title: "Book D", rating: 4 },
    { title: "Book E", rating: 4.5 },
];
const highRated1 = filterByRating(myProducts);
console.log(highRated1);
