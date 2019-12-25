$(function() {
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getcouponproduct',
    data: {
      couponid: location.search.split('?')[1].split('=')[1]
    },
    success: function(info) {
      $('.details ul').html(template('tpl', info))
    }
  })
})
