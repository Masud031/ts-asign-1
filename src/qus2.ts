type Product = {
    title: string;
    rating: number;
}  
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
  }
  
  const myProducts: Product[] = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.5 },
    { title: "Book C", rating: 2.5 },
    { title: "Book D", rating: 4 },
    { title: "Book E", rating: 4.5 },
  ];

   const highRated1 = filterByRating(myProducts);
   console.log(highRated1);