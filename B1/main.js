// Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
let strings = ["aba", "aa", "ad", "c", "vcd"];
let max = (arr) => {
  let maxLength = -9999;
  arr.map((s) => {
    if (s.length > maxLength) {
      maxLength = s.length;
    }
  });
  return maxLength;
};
let getStringHasMaxLength = (arr) => {
  let maxLength = max(arr);
  return arr.filter((a) => {
    return a.length == max(arr);
  });
};
console.log(getStringHasMaxLength(strings));

// Bài 2. Cho mảng users như sau:

users = [
  {
    name: "Bùi Công Sơn",
    age: 30,
    isStatus: true,
  },
  {
    name: "Nguyễn Thu Hằng",
    age: 27,
    isStatus: false,
  },
  {
    name: "Phạm Văn Dũng",
    age: 20,
    isStatus: false,
  },
];

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
let getUserByAgeAndIsStatus = (age, isStatus) => {
  return users.filter((user) => {
    return user.age > age && isStatus;
  });
};
console.log(getUserByAgeAndIsStatus(25, true));
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
let sortUserByAgeASC = () => {
  return users.sort((a, b) => a.age - b.age);
};
console.log(sortUserByAgeASC());

// Bài 3. Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

// getCountElement(["one", "two", "three", "one", "one", "three"])

// Kết quả
// {
//     one: 3,
//     two : 1,
//     three : 2
// }

let getCountElement = (arr)=>{
    let hashMap = new Map();
    for (let index = 0; index < arr.length; index++) {
        if(hashMap.get(arr[index]) > 0){
            hashMap.set(arr[index],hashMap.get(arr[index])+1);
        }else{
            hashMap.set(arr[index],1);
        }
    }

    return Object.fromEntries(hashMap);
}

console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));
