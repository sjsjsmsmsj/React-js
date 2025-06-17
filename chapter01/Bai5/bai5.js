const myArray = [1, 2, 3, 4, 5]
// const myList = myArray.map((item) => item * 2)

const myList = myArray.map((item, index) => {
    console.log(item, index)
    return item * 2
}) 

console.log(myList)
console.log(myArray)

const ages = [32, 33, 16, 40] 
const result = ages.filter((item) => {
    return item >= 18
})
console.log(result)