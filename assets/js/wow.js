window.onload = function() {
    console.log("Page has fully loaded!");
    setInterval(() => {
        console.log("Page is still alive at", new Date());
    }, 60000); // Every 60 seconds
};

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
