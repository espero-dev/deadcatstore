window.onload = function() {
    console.log("Page has fully loaded!");
    setInterval(() => {
        console.log("Page is still alive at", new Date());
    }, 60000); // Every 60 seconds
};

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


/*setInterval(() => {
    fetch('/keep-alive', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ timestamp: Date.now() }),
    }).then(response => {
        if (!response.ok) {
            console.error('Failed to keep session alive');
        }
    }).catch(err => console.error('Network error', err));
}, 300000); // Every 5 minutes

const audio = new Audio();
audio.src = "data:audio/wav;base64,..."; // Base64-encoded silent audio
audio.loop = true;
audio.play();

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = ''; // Some browsers require this to show a prompt
});*/
