$(function() {
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getcategorytitle',
    success: function(info) {
      $('.first_menu').html(template('tpl', info))
    }
  })

  $('.first_menu').on('click', '.first', function() {
    let that = this
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/getcategory',
      data: {
        titleid: $(that).data('id')
      },
      success: function(info) {
        $(that)
          .children('.active')
          .html(template('tpl1', info))
      },
      complete: function() {
        $(that)
          .children('ul')
          .toggleClass('active')
      }
    })
  })
})
