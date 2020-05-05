$('.stamp-img').click((event) => {
    stampImg = $(event.target).attr('src')
    console.log(stampImg)
})