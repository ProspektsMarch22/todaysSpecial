const menu = {
  _meal : '',
  _price : 0,
  //Setters for the meal and price, so to check if the inputs are valid
  set meal(mealToCheck){
    if(typeof mealToCheck === 'string'){
      return this._meal = mealToCheck;
    } else {
      console.log('Input a valid meal name')
    }
  },
  set price(priceToCheck){
    if(typeof priceToCheck === 'number'){
      if(priceToCheck > 0){
        return this._price = priceToCheck;
      } else {
        console.log('The meal price must be greater than 0')
      }
    } else {
      console.log('Input a valid meal price')
    }
  },
  //Getter for the Today's Special - checks again the validity of the inputs and throws a shallow error message if not
  get todaySpecial(){
    if(this._meal && this._price){
      return `Today's Special is ${this._meal} for \$${this._price}!`
    } else {
      return `Error: Meal or price was not set correctly.`
    }
  }
}

//For easy inputing, i coded the following function
const setTodaysSpecial = (mealName, mealPrice) => {
  menu.meal = mealName;
  menu.price = mealPrice;
}

//Calls the function and checks the result
setTodaysSpecial('Bitoca', 10);
let {todaySpecial} = menu;
console.log(todaySpecial);
