"use strict";

/*
Створити клас Товар з властивостями: назва, ціна, валюта, кількість,
і методами: повернути інформацію про товар і купити товар(метод приймає кількість одиниць товару і повертає суму).

Створити дочірні класи Фізичний товар і Віртуальний товар, обидва походять від класу товар.
У фізичного товара додається властивість вага.
У віртуального товара додається властивість розмір пам'яті.
Зміниться метод повернути інформацію про товар.
*/

class Product {
  constructor(name, price, current, quantity) {
    (this.name = name),
      (this.price = price),
      (this.current = current),
      (this.quantity = quantity);
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError("Product name must be string!");
    }
    if (value.length < 2) {
      throw new Error("Product name must be have min 2 leters!");
    }
    this._name = value;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    if (typeof value !== "number") {
      throw new TypeError("Price must be number!");
    }
    if (value < 0) {
      throw new RangeError("Price must be > 0!");
    }
    this._price = value;
  }
  get current() {
    return this._current;
  }
  set current(value) {
    if (typeof value !== "string") {
      throw new TypeError("Product current must be string!");
    }
    this._current = value;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(value) {
    if (typeof value !== "number") {
      throw new TypeError("Quantity must be number!");
    }
    if (value < 0) {
      throw new RangeError("Quantity must be > 0!");
    }
    this._quantity = value;
  }
  getInfo() {
    return `Name: ${this._name}, Price: ${this._price}, Current: ${this._current}, Quantity: ${this._quantity}`;
  }
  buy(value) {
    if (value > this._quantity) {
      throw new TypeError("Available " + this._quantity + " poducts!");
    }
    this._quantity -= value;
    return value * this._price + this._current;
  }
}
class PhysicalProduct extends Product {
  constructor(name, price, current, quantity, weight) {
    super(name, price, current, quantity);
    this.weight = weight;
  }
  get weight() {
    return this._weight;
  }
  set weight(value) {
    if (typeof value !== "number") {
      throw new TypeError("Weight must be number!");
    }
    if (value < 0) {
      throw new RangeError("Weight must be > 0!");
    }
    this._weight = value;
  }
  getInfo() {
    return `Name: ${this._name}, Price: ${this._price}, Current: ${this._current}, Quantity: ${this._quantity}, Weight: ${this._weight}`;
  }
}
class OnlineProduct extends Product {
  constructor(name, price, current, quantity, memorySize) {
    super(name, price, current, quantity);
    this.memorySize = memorySize;
  }
  get memorySize() {
    return this._memorySize;
  }
  set memorySize(value) {
    if (typeof value !== "number") {
      throw new TypeError("Memory size must be number!");
    }
    if (value < 0) {
      throw new RangeError("Memory size must be > 0!");
    }
    this._memorySize = value;
  }
  getInfo() {
    return `Name: ${this._name}, Price: ${this._price}, Current: ${this._current}, Quantity: ${this._quantity}, Memory size: ${this._memorySize}`;
  }
}

try {
  const propduct = new Product("propduct", 100, "USD", 10);
  const phPropduct = new PhysicalProduct("propduct ph", 150, "USD", 15, 100);
  const onlinePropduct = new OnlineProduct("propduct online", 120, "USD", 30, 1000);
  console.log(propduct)
  console.log(phPropduct)
  console.log(onlinePropduct.buy(20))
  console.log(onlinePropduct)
  console.log(onlinePropduct.buy(20))
  console.log(onlinePropduct)
} catch (error) {
  console.log(error);
}
