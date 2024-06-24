const users = [
    { first: "Disha" , last: "Agarwal", age: 21},
    { first: "Jyotiraditya", last: "Kumari Gupta", age: 21},
    { first: "Shreya" , last: "Agarwal", age: 26},
    { first: "Mona" , last: "Agarwal", age: 53}
];

// {21 : 2, 26 : 1, 53 : 1}
const countEach = users.reduce(function(accumulator, current){
    if(accumulator[current.age])
        {
            accumulator[current.age] = ++accumulator[current.age];
        }
        else
        {
            accumulator[current.age] = 1;
        }
        return accumulator;
}, {});
console.log(countEach);

// List of first names of all people with age less than 30 using filter
const less30 = users.filter((x) => {
    if(x.age < 30)
        return x.first;
});
console.log(less30);


//Count of all elements using reduce
const countoutput = users.reduce(function (count, current){
    count = count + 1;
    return count;
},0);
console.log(countoutput);


//List of all full names using reduce
const output = users.reduce((concat, current)=>
{
    concat.push(current.first + " " + current.last);
    return concat;
},[]);
console.log(output);


//List of all full names using map
const mapFullName = users.map((x) => {
    return x.first + " " + x.last;
});
console.log(mapFullName);