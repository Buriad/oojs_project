const getAllFood = async () => {
  return await fetch("https://dev-api.mstars.mn/api/foods", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

/* Food class
//Food class that has properties: category, category_id, image, discount, price, name, stock
//and methods: 
addProduct => increase Stock number and return true;
removeProduct => Decrease Stock number and return true
this.image = "https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com" + image
 
*/

class Food {
  constructor(category, category_id, image, discount, price, name, stock) {
    this.category = category;
    this.category_id = category_id;
    this.image = image;
    this.discount = discount;
    this.price = price;
    this.name = name;
    this.stock = stock;
  }
  addProduct() {
    this.stock += 1;
    return true;
  }
  removeProduct() {
    this.stock += 1;
    return true;
  }
}

//create an array foods

// //call getAllFoods() then create Food objects and push every Food objects to foods array

getAllFood()
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });

fetch("https://dev-api.mstars.mn/api/foods")
  .then((res) => res.json())
  .then((res) => {
    let arrofFoods = res;
  });

// // //Generate HMTL function
