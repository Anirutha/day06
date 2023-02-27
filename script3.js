//4. write a class to calculate the uber price.
//Ans:
//Input:
class UberPrice {
    constructor(duration, distance, baseFare, costPerMile) {
      this.duration = duration;
      this.distance = distance;
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      
    }
  
    totalPrice() {
      return this.baseFare + (this.duration * this.costPerMile) + this.distance;
    }
  }
  
  const myUber = new UberPrice(10,15,25,70);
  console.log(myUber.totalPrice());
  Output:
  740