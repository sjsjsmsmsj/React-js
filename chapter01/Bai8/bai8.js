// const person = { name: 'Eric', age: 19, eyeColor: 'black', like: 'girl' }
// const name = person.name; 
// const age = person.age; 
// console.log(name); 
// console.log(age) 


// const person1 = { name: 'Eric', age: 19, eyeColor: 'black', like: 'girl' }
// const { age, name } = person1 
// console.log(age) 
// console.log(name)

const city = ['ha noi', 'da nang', 'sai gon', 'ca mau']; 

// const hanoi = city[0]; 
// const danang = city[1]; 
// const hcm = city[2]; 

// console.log(hanoi)
const [ hanoi, danang, , camau] = city 
console.log(danang, danang, camau)

const react = ['facebook', 'all-in-one', 'javascript'] 
let [facebook, allinone, javascript] = react 
tech = javascript
console.log(tech)


const dev = {
    salary: 2000, 
    tool: 'laptop', 
    like: 'bugs' 
}

const { like } = dev 
console.log(like)