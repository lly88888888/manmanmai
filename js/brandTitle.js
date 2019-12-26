$(function() {
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getbrandtitle',
    success: function(info) {
      $('.mmm_category ul').html(template('tpl', info))
    }
  })
})
