$(window).on('load', function() {
  suite('Sending messages', function() {
    test('Sending an empty message', function() {
      let initial_count = $('.message').length

      $('#message-form').submit()
      chai.assert.equal($('.message').length, initial_count, 'Empty messages should not be sent');
    });

    test('Sending a blank message', function() {
      let initial_count = $('.message').length

      $('#message-box').html('                ')
      $('#message-form').submit()
      chai.assert.equal($('.message').length, initial_count, 'Blank messages should not be sent');
    });
  });
});
