$(window).on('load', function() {
  $('#message-form').submit((e) => {
    // Retriev message val
    let text = $('#message-box').val();

    // If message is valid (ie is not empty or just whitespace)...
    if (text !== '' && text.trim()) {
      // Clear message field
      $('#message-box').val('');

      // Add new message to chat history
      addMessage(text);
    }

    e.preventDefault();
  })

  $('#message-box').keypress(function (e) {
    // Submit the form when enter is pressed. for shift + enter, add a newline to message
    if(e.which == 13 && !e.shiftKey) {
      $(this).closest('form').submit();
      e.preventDefault();
    }
  });
})

function addMessage(text) {
  // Create new HTML element and add it to page
  $('#chat-history').append(`<div class='chat-message sent'>${text}</div>`)
}