// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function sayHello(input) {
//     if (input === "Alex") {
//         return "Hello, Alex!"
//     }
//     else if (input === "Pat"){
//         return "Hello, Pat!"
//     }
//     else{
//         return "Hello, Jane!"
//     }
// }


function sayHello(input= "World") {
    if (input === true) {
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!";
    }
}
function isFive(input) {
    return input === 5 || input === "5";
}



