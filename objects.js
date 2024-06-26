let users = {
    firstname: 'Disha',
    'last Name': 'Agarwal',
    sayHello:()=> {
        console.log("Hellow");
    }
};

//printing properties
console.log(users.firstname);
 console.log(users['last Name']);

 // add new properties
 users.age = 21;
 console.log(users.age);

 //delete properties
 delete users.firstname;
 console.log(users);

 //check whether property exists in boolean
 console.log('height' in users);

 //accessing all proeprties
 for( let key in users)
    {
        console.log(key + " " + users[key]);
        // if you use dot operator then it will print undefined
    }

// calling methods using anonymous functions
users.sayHi = function (){
    console.log("Hi Disha");
}
users.sayHi();

//calling method way 2 
function hi(){
    console.log("hiiiiiii");
}
users.sayHiii = hi;
users.sayHiii();

//method defined while definign user property
users.sayHello();




