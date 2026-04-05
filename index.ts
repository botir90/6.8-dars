// 1-masala
// function identity<T>(value: T): T {
// return value
// }

// 2-masala
// function getFirst<T>(arr: T[]): T {
// return arr[0]
// }
// 3-masala
// function getLast<T>(arr: T[]): T {
// return arr[arr.length - 1]
// }
// 4-masala
// interface Pair<K,V> {
//     key: K;
//     value: V;
//   }

//   function createPair<K,V>(key:K,value:V):Pair<K,V>{
// return {key , value}
//   }
// 5-masala
// interface HasLength {
//   length: number;
// }

// function getLength<T extends HasLength>(value:T):number{
// return value.length
// // }
// 6-masala
//  function minValue(arr:number[]):number{

// const min  = Math.min(...arr)
// return min
//   }
// 7-masala
// function mergeObjects<T,U>(a:T,b:U):T & U{
// return {...a , ...b} as  T & U
// }
// 8-masala
// function sortArray<T extends string | number>(arr:T[]):T[]{
//  return [...arr].sort((a,b) => {
//   if (typeof a === "number" && typeof b === "number"){
//     return a - b
//   }

//   return String(a).localeCompare(String(b))
//  } ) 
  
 
// }
// 11-masala
// function echo<T>(value:T):T{
// return value
// }
// 12-masala
// function unique<T>(arr:T[]):T[]{
// return [...new Set(arr)]
// }
// 14-masala
// function stack(actions: string[]): any {
//   const store: any[] = [];
//   let result: any = null;

//   for (const action of actions) {
//     if (action.startsWith("push")) {
//       const value = action.split(" ")[1];
//       store.push(isNaN(Number(value)) ? value : Number(value));

//     } else if (action === "pop") {
//       result = store.length > 0 ? store.pop() : null;

//     } else if (action === "peek") {
//       result = store.length > 0 ? store[store.length - 1] : null;
//     }
//   }

//   return result;
// }
// 15-masala
// function queue(actions: string[]): any {
//   const store: any[] = [];
//   let result: any = null;

//   for (const action of actions) {
//     if (action.startsWith("enqueue")) {
//       const value = action.split(" ")[1];
//       store.push(isNaN(Number(value)) ? value : Number(value));

//     } else if (action === "dequeue") {
//       result = store.length > 0 ? store.shift() : null;

//     } else if (action === "peek") {
//       result = store.length > 0 ? store[0] : null;
//     }
//   }

//   return result; 
// }


// 9-dars
// // 1-masala
// // class Car {
// //   private _model : string ;
// //   private _year : number;
// //   private  _color : string = "white"
// //     constructor(model: string, year: number) {
// //       this._model = model ;
// //       this._year = year 
// //     }

import { markAsUntransferable } from "worker_threads";

// //     changeColor(newColor: string): void {
// // this._color = newColor
// //     }

// //     model(): string {
// //       return this._model
// //     }

// //     year(): number {
// //       return this._year
// //     }

// //     color(): string {
// //       return this._color
// //     }
// //   }
// // 2-masala
// // class Student {
// //   private _fristName  : string 
// //   private _lastName : string
// //   private _grade : number
// //     constructor(firstName: string, lastName: string, grade: number) {
// //       this._fristName = firstName
// //       this._lastName = lastName
// //       this._grade = grade
// //     }

// //     fullName(): string {
// //       return this._fristName + " " + this._lastName
// //     }

// //     grade(): number {
// //       return this._grade
// //     }
// //   }

// // 3-masala
// // class BankAccount {
// //     private _balance: number;

// //     constructor(initialBalance: number) {
// //       this._balance = initialBalance
// //     }

// //     deposit(amount: number): void {
// //       this._balance = this._balance + amount
// //     }

// //     withdraw(amount: number): void {
// //       if (amount <= this._balance){
// //         this._balance = this._balance - amount
// //       }
// //     }

// //     balance(): number {
// //       return this._balance
// //     }
// //   }
// 4-masala
// class Rectangle {
//   private _width  : number 
//   private _heigth : number 
//     constructor(width: number, height: number) {
//       this._width = width 
//       this._heigth =height
//     }

//     area(): number {
//       return  this._width * this._heigth
//     }

//     perimeter(): number {
//       return 2 * (this._width + this._heigth)
//     }
//   }
// 5-masala
//   class Circle {
//     private _radius : number 
//     constructor(radius: number) {
//       this._radius = radius
//     }

//     area(): number {
//       return parseFloat((Math.PI * this._radius ** 2).toFixed(2))
//     }

//     circumference(): number {
//       return parseFloat((2 * Math.PI * this._radius).toFixed(2))
//     }
//   }

// 6-masala
// class Counter {
//     private static _count: number = 0;
//     private _id: number;

//     constructor() {
//       Counter._count++
//       this._id = Counter._count
//     }

//     id(): number {
//       return this._id;
//     }

//     count(): number {
//       return Counter._count
//     }
//   }
// 7-masala
// class DiscountedProduct {
//   private _name : string 
//   private _price : number 
//   private _discountPercent : number 
//   constructor(name: string, price: number, discountPercent: number) {
//     this._name = name
//     this._price = price 
//     this._discountPercent =  discountPercent
//   }

//   name(): string {
//     return this._name
//   }

//   originalPrice(): number {
//     return this._price
//   }

//   finalPrice(): number {
//     const discount = this._price * (this._discountPercent / 100)
// const result = this._price - discount
// return parseFloat(result.toFixed(2))
//   }
// }
// 8-masala
// class UserAccount {
//   private _username : string
//   private _password : string
    

//     constructor(username: string, password: string) {
//       this._username = username
//       this._password = password
//     }

//     username(): string {
//       return this._username
//     }

//     checkPassword(pwd: string): boolean {
//       return pwd === this._password
//     }

//     changePassword(oldPwd: string, newPwd: string): boolean {

//       if (oldPwd === this._password){
//         this._password = newPwd
//         return true

//       }
//       return false
//     }
//      toJSON() {                                  
//         return { username: this._username };
//         }
//   }

// 9-masala
// class Account {
//     private _accountNumber: string;
//     private _holderName: string;
//     private _balance: number;

//     constructor(accountNumber: string, holderName: string, balance: number) {
//         this._accountNumber = accountNumber;
//         this._holderName = holderName;
//         this._balance = balance;
//     }

//     accountNumber(): string {
//         return this._accountNumber;
//     }

//     holderName(): string {
//         return this._holderName;
//     }

//     balance(): number {
//         return this._balance;
//     }

//     deposit(amount: number): void {
//         this._balance = this._balance + amount;
//     }

//     withdraw(amount: number): void {
//         if (amount <= this._balance) {
//             this._balance = this._balance - amount;
//         }
//     }
// }
// 10-masala
//  class Cat {
//     private _name : string;
//     private _age  : number;
    
//     constructor(name: string, age: number) {
//       this._name =  name
//       this._age = age 

//     }

//     name(): string {
//       return this._name
//     }

//     age(): number {
//       return this._age
//     }

//     speak(): string {
//       return "Meow!";
//     }
//   }
// 11-masala
// class CarRental {
//     private _id: number;
//     private _name: string;
//     private _pricePerDay: number;
//     private _isAvailable: boolean = true;

//     constructor(id: number, name: string, pricePerDay: number) {
//         this._id = id;
//         this._name = name;
//         this._pricePerDay = pricePerDay;
//     }

//     id(): number {
//         return this._id;
//     }

//     name(): string {
//         return this._name;
//     }

//     pricePerDay(): number {
//         return this._pricePerDay;
//     }

//     totalPrice(days: number): number {
//         return this._pricePerDay * days;
//     }

//     isAvailable(): boolean {
//         return this._isAvailable;
//     }
// }

