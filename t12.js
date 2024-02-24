function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var messageText = messageInput.value;

    if (messageText.trim() !== '') {
        var chatBody = document.getElementById('chatBody');

        // Create a new message element
        var messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = messageText;

        // Append the message to the chat body
        chatBody.appendChild(messageElement);

        // Clear the input field
        messageInput.value = '';

        // Scroll to the bottom of the chat body
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}
