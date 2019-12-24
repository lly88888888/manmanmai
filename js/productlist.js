$(function() {
  let pageSize
  function render(page = 1) {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/getproductlist',
      data: {
        categoryid: location.search.split('&')[0].split('=')[1],
        pageid: page
      },
      success: function(info) {
        $('.inner').html(template('tpl', info.result))
        let total = info.result.count
        pageSize = Math.ceil(total / 10)
        if ($('#drop_menu').children().length == 0) {
          for (let i = 1; i <= pageSize; i++) {
            $(`<option value="${i}">第${i}页</option>`).appendTo('#drop_menu')
          }
        }
      }
    })
  }
  render()

  $('.place i').text(
    decodeURI(location.search.split('&')[1].split('=')[1]) + ' >'
  )

  $('#drop_menu').change(function() {
    let page = $(this).val()
    render(page)
  })

  $('.previous_page').on('click', function() {
    let page = $('#drop_menu').val()
    if (page != 1) {
      page = page - 1
      $('#drop_menu option:selected').text('第' + page + '页')
      $('#drop_menu option:selected').val(page)
      render(page)
    } else {
    }
  })
  $('.next_page').on('click', function() {
    let page = parseInt($('#drop_menu').val())
    console.log(page)

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
