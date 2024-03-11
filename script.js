// Open the popup when the RSVP button is clicked
document.getElementById('openPopupBtn').addEventListener('click', function() {
    document.getElementById('popupContainer').style.display = 'flex';
});

document.getElementById('openPopupBtn-m').addEventListener('click', function() {
    document.getElementById('popupContainer').style.display = 'flex';
});

// Close the popup when the close button is clicked
document.getElementById('closePopupBtn').addEventListener('click', function() {
    document.getElementById('popupContainer').style.display = 'none';
});





emailjs.init("hdCoyEtPfj-FdDDzh");

document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var attending = document.querySelector('input[name="attending"]:checked').value;
    var dietaryNeeds = document.getElementById('dietaryNeeds').value;

        var submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;

        var spinner = document.getElementById('spinner');
        spinner.style.display = 'block';

    var params = {
        name: name,
        attending: attending,
        dietaryNeeds: dietaryNeeds
    };


    emailjs.send("service_1dhlt1r", "template_2bhn95c", params)
        .then(function(response) {
            alert('RSVP submitted successfully!');

            document.getElementById('rsvpForm').reset();
        }, function(error) {
            console.error('Error submitting RSVP:', error);
            alert('Error submitting RSVP. Please try again later.');
        })
        .finally(function() {
            // Enable the submit button
            submitBtn.disabled = false;

            // Hide the spinner
            spinner.style.display = 'none';
        });
});