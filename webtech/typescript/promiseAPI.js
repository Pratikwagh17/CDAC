"use strict";
async function getuser() {
    try {
        const result = await fetch("http://localhost:4040/products");
        const users = await result.json();
        console.log(users);
    }
    catch (error) {
        console.log(error);
    }
}
getuser();
