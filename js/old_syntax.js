'use strict';
function UserOld(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  UserOld.amount++;
}
//static
UserOld.amount = 0;
UserOld.createTestUser = function(){
  return new UserOld('Test', 'Testtest', 18);
}
function UserProto(){
  this.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
  }
  this.toString = function(){
    return this.firstName;
  }
}
UserOld.prototype = new UserProto();


