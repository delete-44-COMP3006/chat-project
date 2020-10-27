$(window).on('load', function() {
  if (localStorage.getItem('messageCounter') === null) {
    // Start message counter if it does not exist
    localStorage.setItem('messageCounter', 0)

    // Create demo user and one default message
    let user = new User('Oats')
    let message = new Message('Hi there!', new Date(), user, localStorage.messageCounter)

    // Save message
    message.send()
  } else {
    // Else find every message up to counter and print it
    for(var i = 0; i < localStorage.getItem('messageCounter'); i++) {
      let storedItem = localStorage.getItem(i)
      if (storedItem !== null) {
        let message = JSON.parse(storedItem);
        Object.setPrototypeOf(message, Message.prototype)

        message.createBubble()
      }
    }
  }

  $('#message-form').submit((e) => {
    // Retrieve message value
    let text = $('#message-box').val();

    // If message is valid (ie is not empty or just whitespace)...
    if (text !== '' && text.trim()) {
      // Clear message field
      $('#message-box').val('');

      // Add new message to chat history
      let message = new Message(text, new Date(), new User('Wheaty'), localStorage.getItem('messageCounter'))
      message.send()
    }

    e.preventDefault();
  })

  $('#message-box').keypress(function (e) {
    // Submit the form when enter is pressed. For shift + enter, add a newline to message
    if(e.which == 13 && !e.shiftKey) {
      $('#message-form').submit();
      e.preventDefault();
    }
  });
});

// Returns nicely formatted date & time stamp for message
function dateString (date) {
  return `${date.getHours()}:${date.getMinutes()} &middot; ${date.getDate()}/${date.getMonth()}`
}

function User(name) {
  this.name = name;
}

function Message(text, date, user, id) {
  this.text = text;
  this.date = dateString(date);
  this.user = user;
  this.id = id;

  localStorage.setItem('messageCounter', ++id);
}

// Function to send a message & append it to the HTML
Message.prototype.send = function() {
  localStorage.setItem(this.id, JSON.stringify(this))

  // Create new element
  this.createBubble()
}

Message.prototype.createBubble = function() {
  // Create new HTML element
  let htmlElement = ''

  htmlElement += `<div class="message ${this.isSent() ? 'sent' : 'received'}">`
  htmlElement += `<div class="chat-bubble">${this.text}</div>`
  htmlElement += `<p class="signature">${this.user.name} &middot; ${this.date}</p>`
  htmlElement += '</div>'

  // ...and add it to page
  $('#history').append(htmlElement)
}

// Returns whether the message is sent (true) or received (false)
Message.prototype.isSent = function() {
  return this.user.name === 'Wheaty';
}
