const form = document.getElementById("RegistrationForm");  // finds an existing form in the DOM and stores a reference to it in the variable form.
 
form.addEventListener("submit", function(event) {  // When submit happens, run this function.

    event.preventDefault(); // prevents page refresh after submission, so that you will able to see the below printed values
                            // if you dont do it,  page refreshes immediately, your JavaScript won't get enough time to read values and print them.

    const name = document.getElementById("UserName").value;
    const password = document.getElementById("pass").value;
    const email = document.getElementById("mail").value;
    const phone = document.getElementById("mobile").value;
    const dob = document.getElementById("BOD").value;

    const gender = document.querySelector(
        'input[name="Gender"]:checked'      // find inputs whose name is Gender,Among those, find one currently selected.
    )?.value;                               // (?. is optional chaining) If element exists, get its value. Otherwise, return undefined.

    console.log(name);
    console.log(password);
    console.log(email);
    console.log(phone);
    console.log(dob);
    console.log(gender);
});

