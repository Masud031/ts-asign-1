//  function formatString(input: string, toUpper?: boolean): string {
//     if (toUpper === false) {
//         return input.toLowerCase();
//     } else {
//         return input.toUpperCase();
//     }
// }
// const output1 = formatString('Hello world', );
// console.log(output1); 
// const output2 = formatString('Hello world',false );
// console.log(output2); 


// type Product = {
//     title: string;
//     rating: number;
// }  
// function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
//     return items.filter(item => item.rating >= 4);
//   }
  
//   const myProducts: Product[] = [
//     { title: "Book A", rating: 4.5 },
//     { title: "Book B", rating: 3.5 },
//     { title: "Book C", rating: 2.5 },
//     { title: "Book D", rating: 4 },
//     { title: "Book E", rating: 4.5 },
//   ];

//    const highRated = filterByRating(myProducts);
//    console.log(highRated);
// -----//

// function concatenateArrays<T>(...arrays: T[][]): T[] {
//     return ([] as T[]).concat(...arrays);
//   }
// const letters = ["a", "b", "c", "d"];
// const moreLetters = ["e", "f", "g", "h"];
// const allLetters =concatenateArrays(letters,moreLetters);
// console.log(allLetters);

// const number=["1","2","3"];
// const moreNumbers=["4","5","6"];
// const allNumbers =concatenateArrays(number,moreNumbers)
// console.log(allNumbers);
// -----//
// class Vehicle {
//     private make: string;
//     private year: number;

//     constructor(make:string,year:number){
//         this.make=make;
//         this.year=year;  
//     }
//     public getInfo():string{
//         return `This vehicle is a ${this.make} from ${this.year}.`;
//     }
// }
// class Car extends Vehicle {
//     private model: string;

//     constructor(make: string, year: number, model: string) {
//         super(make, year); // call Vehicle constructor
//         this.model = model;
//       }
//       public getModel(): string {
//         return `The model is ${this.model}.`;
//       }

// }

// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());
// console.log(myCar.getModel());

// ------//
// function processValue(value: string | number): number|string{
//     if(typeof value == "string"){
//         return value.length;
//     }else{
//         return value * 2;
//         }
//     }
//     console.log(processValue("Masud"));
//     console.log(processValue(10)); 
// -------//
  
  // interface Product {
  //   name: string;
  //   price: number;
  // }
  
  // function getMostExpensiveProduct(products: Product[]): Product | null {
  //   if (products.length === 0) return null;
  
  //   let maxProduct = products[0];
  
  //   for (let product of products) {
  //     if (product.price > maxProduct.price) {
  //       maxProduct = product;
  //     }
  //   }
  
  //   return maxProduct;
  // }
  // const products = [
  //   { name: "Pen", price: 10 },
  //   { name: "Notebook", price: 25 },
  //   { name: "Bag", price: 50 }
  // ];
  //  console.log(getMostExpensiveProduct(products ));
// ------//
// enum Day {

//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday
// }

// function getDayType(day: Day): string {
//   if (day === Day.Saturday || day === Day.Sunday) {
//     return "Weekend";
//   } else {
//     return "Weekday";
//   }
// }

// // Example usage
// console.log(getDayType(Day.Tuesday)); // ➜ "Weekday"
// console.log(getDayType(Day.Sunday));  // ➜ "Weekend"

// ------///
// async function squareAsync(n: number): Promise<number> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (n < 0) {
//         reject("Negative number not allowed");
//       } else {
//         resolve(n * n);
//       }
//     }, 1000); // 1 second delay
//   });
// }
// squareAsync(4).then(result => {
//   console.log("Output after 1s:", result);
// }); 
// squareAsync(-3).catch(console.error);

  