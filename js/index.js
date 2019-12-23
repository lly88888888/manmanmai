$(function() {
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getindexmenu',
    success: function(info) {
      $('.mmm_nav').html(template('tpl', info))
    }
  })

  $('.mmm_nav').on('click', '.even', function() {
    $(this)
      .nextAll()
      .toggleClass('active')
  })

  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getmoneyctrl',
    data: {
      pageid: 1
    },
    success: function(info) {
      $('.inner').html(template('tpl1', info))
    }
  })
})
