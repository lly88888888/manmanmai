$(function() {
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getsitenav',
    success: function(info) {
      $('.address').html(template('tpl', info))
    }
  })
})
