$(function() {
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getcoupon',
    success: function(info) {
      $('.mmm_ticket ul').html(template('tpl', info))
    }
  })
})
