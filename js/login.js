document.querySelector("#show-login").addEventListener("click", function() {
    document.querySelector(".popup1").classList.add("active");
    });
    document.querySelector(".popup1 .close-btn1").addEventListener("click", function() {
    document.querySelector(".popup1").classList.remove("active");
    });

    function showConfirmation() {
        // You can add your sign-in logic here
        // For this example, we will just show the confirmation message
        document.getElementById("confirmation-message").style.display = "block";
    }


