$(function() {
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getbrand',
    data: {
      brandtitleid: location.search.split('?')[1].split('=')[1]
    },
    success: function(info) {
      $('.mmm_ranking ul').html(template('tpl', info))
    }
  })
})
