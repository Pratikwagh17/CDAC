
const myfunction = (data:any)=>{
   console.log(`Result is:${data}`);
}

const myPromis = new Promise((resolve, reject) => {
    let success: boolean = true;
    if (success) {
        resolve("I Complete My Promise");
    } else {
        reject("Sorry I could no Complete My Promise")
    }
});
myPromis.then((val) => {
    // console.log(val);
    myfunction(val);
}).catch((error) => {
    // console.log(error);
     myfunction(error);
});






