$(function() {
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getmoneyctrlproduct',
    data: {
      productid: location.search.split('?')[1].split('=')[1]
    },
    success: function(info) {
      $('.center').html(template('tpl', info.result))
      $('ul').html(template('tpl1', info.result))
    }
  })
})
