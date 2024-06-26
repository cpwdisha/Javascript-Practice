// used to allow user to input as many parameters as they would like while calling function

function sum(...args)
{
    let ans = 0;
    for(let i =0; i< args.length; i++)
        {
            ans+= args[i];
        }
        console.log(ans);
}
sum(5,5,5);

// args being stored as array