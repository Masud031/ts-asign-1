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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        if (n < 0) {
                            reject("Negative number not allowed");
                        }
                        else {
                            resolve(n * n);
                        }
                    }, 1000); // 1 second delay
                })];
        });
    });
}
squareAsync(4).then(function (result) {
    console.log("Output after 1s:", result);
});
// squareAsync(-3).catch(console.error);
