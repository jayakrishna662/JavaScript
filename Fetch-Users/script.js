const loadUsersBtn = document.getElementById("loadUsersBtn");

loadUsersBtn.addEventListener("click", loadUsers);

let displayUsers=document.getElementById("showUsers");

async function loadUsers(){

    try{
    const response=await fetch("https://jsonplaceholder.typicode.com/user"); // Free public API providing a JSON array of 10 fake user profiles
        
    // If HTTP request was not Successful   
    if(!response.ok) {
            throw new Error(`Request failed with Status: ${response.status}`);
    }

    // Convert the JSON response into a JavaScript value.  Here, the API returns a JSON array of objects, so this becomes a JavaScript array of objects.
    const users = await response.json(); 

    // Every time you click, clear any previous content. Because clicking multiple times shows same result again and again
    displayUsers.innerHTML=""; 
    
    for(const user of users){   // For each user
        // Append to HTML with user name and user email
        displayUsers.innerHTML+= `<p><B>Name:</B> ${user.name} <B>Email:</B> ${user.email}</p>`
    }   
    }
    catch(error){
        console.log(error)
        displayUsers.innerHTML = "<p>Failed to load users.</p>";
    }
}