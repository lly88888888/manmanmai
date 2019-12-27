$(function() {
  let shopid
  let areaid
  $('.nav-all li')
    .eq(0)
    .on('click', function() {
      $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getgsshop',
        success: function(info) {
          $('.dropMenu-ul').html(template('tpl', info))
        },
        complete: function() {
          $('.dropMenu').show()
        }
      })
    })

  $('.nav-all li')
    .eq(1)
    .on('click', function() {
      $.ajax({
        type: 'get',
        url: 'http://localhost:3000/api/getgsshoparea',
        success: function(info) {
          $('.dropMenu-ul').html(template('tpl1', info))
        },
        complete: function() {
          $('.dropMenu').show()
        }
      })
    })
  $('.nav-all li')
    .eq(2)
    .on('click', function() {
      $('.dropMenu-ul').html(`<li><a href="">全部价格</a></li>`)
      $('.dropMenu').show()
    })

  function render(shopid = 0, areaid = 0) {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/getgsproduct',
      data: {
        shopid: shopid,
        areaid: areaid
      },
      success: function(info) {
        $('.mmm_info ul').html(template('tpl2', info))
      }
    })
  }
  render()

  $('.dropMenu-ul').on('click', 'li', function() {
    // 现在的任务是点击下拉菜单然后把下拉菜单的值赋予给nav
    // $(that).text($(this).text())
    if ($(this).data('shopid') !== undefined) {
      shopid = $(this).data('shopid')
      $('.nav-all li')
        .eq(0)
        .text($(this).text())
      render(shopid, areaid)
      $('.dropMenu').hide()
    }
    if ($(this).data('areaid') !== undefined) {
      areaid = $(this).data('areaid')
      $('.nav-all li')
        .eq(1)
        .text($(this).text())
      render(shopid, areaid)
      $('.dropMenu').hide()
    }
  })
})
