function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
  }

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays);
  }

  class Vehicle {
    private make: string;
    private year: number;

    constructor(make:string,year:number){
        this.make=make;
        this.year=year;  
    }
    public getInfo():string{
        return `This vehicle is a ${this.make} from ${this.year}.`;
    }
}
class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year); // call Vehicle constructor
        this.model = model;
      }
      public getModel(): string {
        return `The model is ${this.model}.`;
      }

}


function processValue(value: string | number): number|string{
    if(typeof value == "string"){
        return value.length;
    }else{
        return value * 2;
        }
    }


    function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) return null;
      
        let maxProduct = products[0];
      
        for (let product of products) {
          if (product.price > maxProduct.price) {
            maxProduct = product;
          }
        }
      
        return maxProduct;
      }

      
      function getDayType(day: Day): string {
        if (day === Day.Saturday || day === Day.Sunday) {
          return "Weekend";
        } else {
          return "Weekday";
        }
      }

      
      async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (n < 0) {
              reject("Negative number not allowed");
            } else {
              resolve(n * n);
            }
          }, 1000); // 1 second delay
        });
      }
      