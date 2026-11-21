"use strict";
const myfunction = (data) => {
    console.log(`result is:${data}`);
};
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (!success) {
        resolve("i complete my promise");
    }
    else {
        reject("sorry i could not complete it");
    }
});
myPromise.then((val) => {
    console.log(val);
    myfunction(val);
}).catch((error) => {
    console.log(error);
    myfunction(error);
});
