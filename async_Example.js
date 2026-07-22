async function getStudent(){
    console.log("Fetching student");
    let studentExist=true;

    const promise = new Promise((resolve, reject)=>{
        if(studentExist){
            resolve("Student is Found");
        }
        else{
            reject("Student not Found")
        }
    });

    return promise;
}

getStudent().then((result)=>{    
    console.log(result)
}).catch((Error)=>{
    console.log(Error)
})

console.log("Hey i have not waited")

/* 
Why doesn't Student is Found print before "Hey i have not waited"?

A: Even though the Promise was resolved immediately .then() callback is never executed immediately.
    JavaScript puts it in a queue and says: "I'll run this after I finish all the normal synchronous code."
 */