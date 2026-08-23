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

type post = {
  description: string;
  image?: string;
  likes: number;
};

let obj: post = {
  description: "first post",
  image: "/image.png",
  likes: 89,
};

type MathFn = (a: number, b: number) => number;
let add: MathFn = (a, b) => {
  return a;
};

interface postt {
  description: string;
  image?: string;
  likes: number;
}
let obj1: postt = {
  description: "this is interface",
  likes: 66,
};

type A = {
  r: number;
};
type B = {
  s: string;
};
type AB = A & B;

interface C {
  l: number;
}
interface D extends C {
  z: string;
}

let obj2: D = {
  l: 93,
  z: "raj",
};

function hello<T>(t: T, u: T): T {
  return t;
}
hello<string>("raj", "gupta");

let i: kumar;
i = 88;
i = "testing";
