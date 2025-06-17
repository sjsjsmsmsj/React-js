const firstArr = [1, 2, 3]; 
const secondArr = [4, 5, 6]; 
const thirdArr = [...firstArr, ...secondArr]; 
const fourthArr = [...secondArr, ...firstArr]

console.log(thirdArr, fourthArr)

let myArr = ['Eric', 'HoiDanIT', 'React']; 
// myArr.push("new item"); 
// myArr = [...myArr, 'new item']
myArr.unshift(
'new item'
)

console.log(myArr)

const test = {
    name: 'Thinh', 
    address: 'Binh dinh'
}

const myVehicle = {
    brand: 'Ford', 
    model: 'Mustang', 
    color: 'red'
}
const updateMyVehicle = {
    type: 'car', 
    year: 2025, 
    color: 'yellow'
}

const update = { ...myVehicle, ...updateMyVehicle } 
console.log(update)

function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3]
console.log(sum(...numbers))