"use strict";
const myPromis = new Promise((resolve, reject) => {
    let success = true;
    if (!success) {
        resolve("I Complete My Promise");
    }
    else {
        reject("Sorry I could no Complete My Promise");
    }
});
myPromis.then((val) => {
    console.log(val);
}).catch((error) => {
    console.log(error);
});
