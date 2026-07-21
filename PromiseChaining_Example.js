let logged = true; 

function placeOrders(order_name){
    setTimeout(()=>{
        console.log(`Your order for ${order_name} is placed`);
    }, 1500);
}

function notify(){
    return "Please login";
}

const p = new Promise((resolve, reject) => {
    if(logged){
        resolve("User is logged in"); 
    } else {
        reject(notify());
    }
});

p.then((result) => {
    console.log(result);
    return "pizza"           // Returns "pizza" to next .then()
}).then((result)=>{         // Receives "pizza" here
    placeOrders(result)     // Calls placeOrders("pizza")
})
.catch((er) => {
    console.log(er);
});