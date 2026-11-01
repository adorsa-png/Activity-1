// 1. Product Class
class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  // Method to reduce stock with validation
  reduceStock(qty) {
    if (qty <= 0) {
      return { success: false, message: "Quantity must be greater than 0." };
    }
    if (qty > this.stock) {
      return { 
        success: false, 
        message: `Not enough stock for ${this.name}. 
        Available: ${this.stock}, Requested: ${qty}` 
      };
    }
    this.stock -= qty;
    return { success: true, message: `${qty} x ${this.name} 
    stock reduced. Remaining: ${this.stock}` };
  }
}

// 2. ShoppingCart Class
class ShoppingCart {
  constructor(customerName) {
    this.customerName = customerName;
    this.items = [];
  }

  addItem(product, qty) {
    // Check stock first
    const stockCheck = product.reduceStock(qty);
    
    if (!stockCheck.success) {
      console.log(`FAILED: ${stockCheck.message}`);
      return;
    }

    // Check if the product already in cart
    const existingItem = this.items.find(item => item.product.name === product.name);
    if (existingItem) {
      existingItem.qty += qty;
    } else {
      this.items.push({ product, qty });
    }
    
    console.log(`ADDED: ${qty} x ${product.name} to cart.`);
  }

  calculateTotal() {
    let total = 0;
    for (let item of this.items) {
      total += item.product.price * item.qty;
    }
    return total;
  }

  displayCart() {
    console.log("\n========== SHOPPING CART ==========");
    console.log(`Customer: ${this.customerName}`);
    
    if (this.items.length === 0) {
      console.log("Cart is empty.");
    } else {
      for (let item of this.items) {
        const subtotal = item.product.price * item.qty;
        console.log(`${item.product.name} | Qty: ${item.qty}
          | Price: $${item.product.price} | Subtotal: $${subtotal}`);
      }
      console.log(`FINAL TOTAL: $${this.calculateTotal()}`);
    }
    console.log("------------------------\n");
  }
}

// ----- TEST DATA -------

// Create at least 3 products
const laptop = new Product("Laptop", 50000, 5);
const keyboard = new Product("Keyboard", 1500, 10);
const mouse = new Product("Mouse", 800, 3);

console.log("Initial Stock:");
console.log(`${laptop.name}: ${laptop.stock}`);
console.log(`${keyboard.name}: ${keyboard.stock}`);
console.log(`${mouse.name}: ${mouse.stock}\n`);

// Create one ShoppingCart
const myCart = new ShoppingCart("Crestoper");

// Adding different products & quantities
myCart.addItem(laptop, 2);
myCart.addItem(keyboard, 3);
myCart.addItem(mouse, 1);

// Test: Attempting to add more than available stock
myCart.addItem(mouse, 5);
myCart.addItem(laptop, 10);
myCart.addItem(keyboard, 2);

// Display cart and total
myCart.displayCart();

// the remaining stock after purchasing
console.log("Remaining Stock After Purchase:");
console.log(`${laptop.name}: ${laptop.stock}`);
console.log(`${keyboard.name}: ${keyboard.stock}`);
console.log(`${mouse.name}: ${mouse.stock}`);