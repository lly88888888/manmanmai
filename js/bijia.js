$(function() {
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getcategorybyid',
    data: {
      categoryid: location.search.split('&')[1].split('=')[1]
    },
    success: function(info) {
      $('.place i').text(info.result.category + ' >')
    }
  })

  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getproduct',
    data: {
      productid: location.search.split('&')[0].split('=')[1]
    },
    success: function(info) {
      $('.picinfo').html(template('tpl', info.result))
    }
  })

  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getproductcom',
    data: {
      productid: location.search.split('&')[0].split('=')[1]
    },
    success: function(info) {
      $('.comment').html(template('tpl1', info))
    }
  })
})
