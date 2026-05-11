// LOGIN PAGE

const loginForm = document.getElementById("loginForm");

if(loginForm){

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const message = document.getElementById("message");
    const cancelBtn = document.getElementById("cancelBtn");

    loginForm.addEventListener("submit", function(event){

        event.preventDefault();

        if(username.value === "" || password.value === ""){
            message.textContent = "Please fill out this field.";
        }
        else{
             message.textContent = "Login successful! Redirecting...";

            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 1000);
        }

    });

    cancelBtn.addEventListener("click", function(){

        username.value = "";
        password.value = "";
        message.textContent = "";

    });
}

// DASHBOARD PAGE

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        alert("Opening notebook...");

    });

});

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(li => {
            li.classList.remove("active");
        });

        item.classList.add("active");

    });

});