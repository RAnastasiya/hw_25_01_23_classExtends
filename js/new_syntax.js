class User {
  #firstName;
  constructor(firstName, lastName, age, isMale = true) {
    this.firstName = firstName;
    this.lastName = lastName; //call set lastName
    this.age = age;
    this.isMale = isMale;
    User.amount++;
  }
  get firstName() {
    return this.#firstName;
  }
  set firstName(value) {
    if (typeof value !== "string") {
      throw new TypeError("first name must be string!");
    }
    this.#firstName = value;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value !== "string") {
      throw new TypeError("last name must be string!");
    }
    this._lastName = value;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    if (typeof value !== "number") {
      throw new TypeError("age must be number!");
    }
    if (value < MIN_AGE || value > MAX_AGE) {
      throw new RangeError(`error: age<${MIN_AGE} or age>${MAX_AGE}`);
    }
    this._age = value;
  }
  get isMale() {
    return this._isMale;
  }
  set isMale(value) {
    if (typeof value !== "boolean") {
      throw new TypeError("isMale must be boolean!");
    }
    this._isMale = value;
  }
  get fullName() {
    return `${this.#firstName} ${this._lastName}`;
  }
  set fullName(value) {
    if (typeof value !== "string") {
      throw new TypeError("full name must be string!");
    }
    //"Brad Pitt"
    //додати перевірку на наявність пробілу
    if (value.includes(" ") === false) {
      throw new RangeError("full name must have space!");
    }
    //додати перевірку на кількість слів у рядку === 2
    const arrFullName = value.trim().split(" ");
    if (arrFullName.length !== 2) {
      throw new RangeError("full name must have two words!");
    }
    this.#firstName = arrFullName[0];
    this._lastName = arrFullName[1];
  }
  toString() {
    return this._firstName;
  }
  static amount = 0;
  static createTestUser(){
    return new User('Test', 'Testtest', 18);
  }
  static isUser(obj){
    return obj instanceof User;
  }
}

// try {
//   const testUser = User.createTestUser();
//   console.log(testUser)
//   console.log(User.isUser({qwe:12}))
//   console.log(User.isUser(testUser))
// } catch (error) {
  
// }


// try {
//   const user3 = new User("Tim", "Qwerrty", 23);
//   user3.fullName = "Fred Trim"; //setter
//   console.log(user3.fullName);
//   console.log(user3.firstName); //getter
//   console.log(user3);
// } catch (error) {
//   console.log(error);
// }

// console.log("important info!");

//написати клас Worker
//у якого будуть данні: приізвище, ставка за день,
//кількість відпрацьованих днів за замовчуванням = 0
//метод, який повертає зарплатню
