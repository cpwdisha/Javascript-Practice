function talk(message){
    console.log(message);
}

talk();

// we called a function without sending the required parameter which would print undefined

function defaulttalk(msg = "Hello")
{
    console.log(msg);
}
defaulttalk("Disha");