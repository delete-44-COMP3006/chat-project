$(window).on("load", function() {
  $('#login-form').submit((e) => {
    window.location.href = './chat.html'
    e.preventDefault();
  })
})
