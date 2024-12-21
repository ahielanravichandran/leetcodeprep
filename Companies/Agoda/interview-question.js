// [['10', 'tag1', 'tag2'], ['20', 'tag3', 'empty']]
// Price, followed by tag names, empty is no discount tag

// [['tag1', '0', '10'], ['tag2', '1', '10'], ['tag3', '2', '10']]
// Discount name, discount type, discount valye

// Find the min price for every product, return the total sum of it

const products = [
  ["10", "tag1", "tag2"],
  ["20", "tag3", "empty"],
];
const discounts = [
  ["tag1", "0", "10"],
  ["tag2", "1", "10"],
  ["tag3", "2", "10"],
];

class Product {
  constructor(product) {
    this.product = this.deserialise(product);
  }
  deserialise(product) {
    const [price, ...tags] = product;
    return {
      price: Number(price),
      tags,
    };
  }
}

class Discount {
  constructor(discount) {
    this.discount = discount;
  }
  findPrice(price) {
    const { type, value } = this.discount;
    switch (type) {
      case "0": {
        return value;
      }
      case "1": {
        return price - price * (value / 100);
      }
      case "2": {
        return price - value;
      }
    }
  }
}

const constructDiscountMap = (discounts) => {
  const map = {};
  discounts.forEach((discount) => {
    const [name, type, value] = discount;
    map[name] = { type, value: Number(value) };
  });
  return map;
};

const findMinPriceList = (products, discounts) => {
  const priceList = [];
  const discountMap = constructDiscountMap(discounts);
  console.log(`discountMap`, discountMap);
  products.forEach((product) => {
    const deserialisedProduct = new Product(product).product;
    console.log(`product:`, deserialisedProduct);
    const { price, tags } = deserialisedProduct;
    let minPrice = Infinity;
    tags.forEach((tag) => {
      if (tag === "empty") {
        minPrice = Math.min(Infinity, minPrice)
        return
      };
      const discount = new Discount(discountMap[tag] || null);
      console.log("price", discount.findPrice(price));
      minPrice = Math.min(discount.findPrice(price), minPrice);
    });
    priceList.push(minPrice)
  });
  
  return priceList
};

export const execute = () => {
  const priceList = findMinPriceList(products, discounts);
  let sum = 0;
  priceList.forEach(price => {
    sum = sum + price
  })
  console.log(`priceList`,priceList)
  console.log(`sum`, sum)
};
