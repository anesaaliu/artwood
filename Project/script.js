document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const kitchenItems = document.querySelectorAll('.kitchen-item');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();

        kitchenItems.forEach(item => {
            const title = item.querySelector('h2').textContent.toLowerCase();

            if (title.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});



function emailSend() {
    var userName = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var messageBody = "Name: " + userName + "<br>Phone: " + phone + "<br>Email: " + email + "<br>Message: " + message;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "anesaaliuu@gmail.com",
        Password: "pass",
        To: 'anesaaliu519@gmail.com',
        From: 'anesaaliuu@gmail.com',
        Subject: "New Contact Form Enquiry",
        Body: messageBody
    }).then(
        message => {
            alert("Message Sent Successfully");
            document.getElementById('contact-form').reset();
        },
        error => {
            alert("Failed to send the message. Please try again.");
            console.error(error);
        }
    );

    return false; 
}

