$(function() {
  let pageSize
  function render(page = 1) {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/getmoneyctrl',
      data: {
        pageid: page
      },
      success: function(info) {
        $('.inner').html(template('tpl', info))
        let total = info.count
        pageSize = Math.ceil(total / 10)

        for (let i = 1; i <= pageSize; i++) {
          $(`<option value="${i}">第${i}页</option>`).appendTo('#drop_menu')
        }
      }
    })
  }
  render()

  let page
  $('#drop_menu').on('change', function() {
    page = $(this).val()
    render(page)
  })

  $('.previous_page').on('click', function() {
    page = $('#drop_menu').val()
    if (page != 1) {
      page = page - 1
      $('#drop_menu option:selected').text('第' + page + '页')
      $('#drop_menu option:selected').val(page)
      render(page)
    }
  })
  $('.next_page').on('click', function() {
    page = parseInt($('#drop_menu').val())

    if (page < pageSize) {
      page = page + 1
      $('#drop_menu option:selected').text('第' + page + '页')
      $('#drop_menu option:selected').val(page)
      render(page)
    } else {
      page = 1
      $('#drop_menu option:selected').text('第' + page + '页')
      $('#drop_menu option:selected').val(page)
      render(page)
    }
  })
})
