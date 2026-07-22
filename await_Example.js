async function main(){
    try{
    let id=123
    const res=await getStudent(id); // Here it waits until getStudent(id) is finished execution
    console.log(res)                // so res is not printed immediately 
   
    /* Without await:
        const promise= getStudent(id) --> since getStudent() itself returns a promise
        promise.then((result)=>{
        console.log(result)}).catch((Error)=>{
        console.log(Error)})

    NOTE: so await replaces .then() , it says "Wait until it's done, then give me the result."
    */

    
    }
    catch(Error){ // If promise was rejected, awaits throws error, so you need to handle it using catch
        console.log(Error)
    }            
}

async function getStudent(id){
    console.log("Fetching student");
    const promise = new Promise((resolve, reject)=>{
        if(id===124){
            resolve("Student is Found");
        }
        else{
            reject("Student not Found")
        }
    });
    return promise;
}

main()

console.log("Hey i have not waited")

/* 
Why doesn't Student is Found print before "Hey i have not waited"?

A: Even though the Promise was resolved immediately .then() callback is never executed immediately.
    JavaScript puts it in a queue and says: "I'll run this after I finish all the normal synchronous code."
 */

