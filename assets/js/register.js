$(window).on("load", function() {
  $('#register-form').submit((e) => {
    window.location.href = './index.html'
    e.preventDefault();
  })
})
