const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (phone === "") {
        alert("Please enter your phone number");
        return;
    }

    if (service === "") {
        alert("Please select a service");
        return;
    }

    alert("Service has been booked successfully!");

});