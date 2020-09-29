$(window).on("load", function() {
  $('#send-button').click(() => {
    let text = $('#message-box').val()
    addMessage(text)
  })
})

function addMessage(text) {
  $('#chat-history').append(`<div class='chat-message sent'>${text}</div>`)
}
