document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen formulir dan tombol submit
    var dataForm = document.getElementsByClassName('feedback');
    var submitBtn = document.getElementById('send');

    // Tambahkan event listener untuk tombol submit
    submitBtn.addEventListener('click', function () {
        // Lakukan pengolahan data atau pengiriman ke server di sini
        
        // Tampilkan alert success setelah berhasil menginputkan data
        alert('Data berhasil diinputkan!');
    });
});