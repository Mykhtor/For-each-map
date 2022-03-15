type User = {
    name: string,
    age: number
}

let users: User[] = [
    
   { name: 'Olimjon', age: 12},
   { name: 'Javohir', age: 13},
   { name: 'temur', age: 20},
   { name: 'Tozo bola', age: 14},
   { name: 'Oldosdf00', age: 17},

]

// for (let i = 0; i <= users.length; i++) {
//     const element = users[i]
//     console.log(element);
    
// }

// for (const element of users ) {

//     if ( element.age <= 13) {
//         console.log(element.name);
//     }

// }



let grownUsers: User[] = []

for (const element of users ) {

    if ( element.age > 11 && element.age < 20) {
        grownUsers.push(element)
    }
   
    
}
console.log(grownUsers);