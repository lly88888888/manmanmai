$(function() {
  let myScroll = new IScroll('.sliding-nav', {
    mouseWheel: true,
    scrollbars: false,
    scrollX: true
    // 横向滚动导航栏
  })

  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getbaicaijiatitle',
    success: function(info) {
      $('.nav-all').html(template('tpl', info))
    }
  })

  function render(titleid) {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/getbaicaijiaproduct',
      data: {
        titleid: titleid
      },
      success: function(info) {
        $('.product-list').html(template('tpl1', info))
      }
    })
  }
  render()
  $('.nav-all').on('click', 'li', function() {
    let titleid = $(this).data('id')
    render(titleid)
  })

  $(window).on('scroll', function() {
    if ($(this).scrollTop() >= 800) {
      $('.returntop').fadeIn()
    } else {
      $('.returntop').hide()
    }
  })

  $('.returntop').on('click', function() {
    $(window).scrollTop(0)
  })
})
