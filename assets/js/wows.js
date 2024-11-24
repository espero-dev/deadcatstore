document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please choose a file!');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    uploadFile(formData);
});

async function uploadFile(formData) {
    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            document.getElementById('uploadStatus').textContent = 'File uploaded successfully!';
        } else {
            document.getElementById('uploadStatus').textContent = 'Upload failed.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('uploadStatus').textContent = 'An error occurred while uploading the file.';
    }
}
