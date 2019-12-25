$(function() {
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getinlanddiscount',
    success: function(info) {
      $('.inner').html(template('tpl', info))
    }
  })
})
