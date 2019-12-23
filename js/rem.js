$(window)
  .resize(function() {
    let width = $(window).width()
    width = Math.max(width, 320)
    width = Math.min(width, 750)
    // 设计图的大小/50px = 屏幕的大小/当前屏的fontsize
    $('html').css('fontSize', (width / 15).toFixed(2) + 'px')
  })
  .trigger('resize')
