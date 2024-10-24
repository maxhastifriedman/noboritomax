function updateMessage() {
    const message = document.querySelector('p');
    if (message) message.textContent = 'This template is now TypeScript-powered!';
}

window.onload = () => {
    updateMessage();
};
