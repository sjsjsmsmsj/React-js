let user = {}; 
// console.log(user.address ? user.address: 'undefine') 
console.log(user?.address?.street ?? 'not found user')

let userAdmin = {
    admin() {
        alert("I am Eric");
    }
}
let userGuest = {}; 
userAdmin.admin?.() 
userGuest.admin?.()


let key = "firstName"; 
let user1 = {
    firstName: 'Hoi Dan IT'
}; 

let user2 = null; 
alert(user1?.[key])
alert(user2?.[key])