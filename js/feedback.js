document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen formulir dan tombol submit
    var dataForm = document.getElementsByClassName('feedback');
    var submitBtn = document.getElementById('send');

    // Tambahkan event listener untuk tombol submit
    submitBtn.addEventListener('click', function () {
        // Lakukan pengolahan data atau pengiriman ke server di sini
        var nama = document.getElementById('nama').value;
        var email = document.getElementById('email').value;
        var telepon = document.getElementById('telepon').value;
        var masukan = document.getElementById('feedback').value;

        const feedbackData = {
            nama: nama,
            email: email,
            telepon: telepon,
            masukan: masukan,
        };

        postFeedback(feedbackData);
        // Tampilkan alert success setelah berhasil menginputkan data
        alert('Data berhasil diinputkan!');
    });
});


// Function to handle the POST request to submit feedback
async function postFeedback(feedbackData) {
    const API_URL = "https://be-2-section-surabaya-28-production.up.railway.app/feedback";

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feedbackData),
        });

        if (response.ok) {
            console.log('Feedback submitted successfully!');
        } else {
            console.error('Failed to submit feedback.');
        }
    } catch (error) {
        console.error('Error submitting feedback:', error);
    }
}

