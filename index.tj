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