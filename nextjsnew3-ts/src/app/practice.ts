let a: number;
a = 80;
let b: string;
b = "Raj";
//Boolean in TypeScript
let isOnline: boolean;
isOnline = false;

//Array in TypeScript
let arr: number[];
arr = [70, 80, 69];
//Tuple
let ar: [number, string, boolean];
ar = [45, "io", false];
//Enum
enum role {
  "user",
  "admin",
}
//Any
let x;
x = 99;
x = "Gupta";
//function
function raj(a: number, b: string): number {
  return 88;
}
raj(96, "Hello");

// try
function n(m: string, o: number) {}

//type inference
let c = 78;

//type annotation
let d: number;

// Type Aliases 1

type anyTypes = number | string;
let e: anyTypes;
e = 83;
e = "rajkumar";
// Type Aliases 2
type status = "success" | "error" | "pending";
let f: status;
// f="message";

type user = {
  name: string;
  age: number;
};
let p: user;
// p = 50  it is not changable because you already mentioned type user

p = {
  name: "Raj",
  age: 24,
};
