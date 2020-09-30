$(window).on('load', function() {
  $('#message-form').submit((e) => {
    let text = $('#message-box').val();
    $('#message-box').val('');
    if (text !== '') {
      addMessage(text);
    }

    e.preventDefault();
  })

  $('#message-box').keypress(function (e) {
    if(e.which == 13 && !e.shiftKey) {
      $(this).closest('form').submit();
      e.preventDefault();
    }
  });
})

function addMessage(text) {
  $('#chat-history').append(`<div class='chat-message sent'>${text}</div>`)
}
