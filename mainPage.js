function displayImage(event) {
    var image = document.getElementById('uploaded-image');
    image.src = URL.createObjectURL(event.target.files[0]);
}

document.querySelector('.profile-upload-btn').addEventListener('click', function() {
    document.getElementById('file-upload').click();
});
