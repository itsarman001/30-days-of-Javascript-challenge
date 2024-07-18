let str = "i am a string";
let num = 89;
let boolean = true;
let bigint = BigInt("12345678901234567890");
let undef = undefined;

const arr = [1, 3, 4];
const obj = {
  firstName: "sponge",
  lastName: "bob",
  age: 35,
};

function func() {
  console.log("hello world");
}

const typeofArr = [str, num, boolean, bigint, undef, arr, obj, func];
typeofArr.map((elem) => console.log(typeof elem));