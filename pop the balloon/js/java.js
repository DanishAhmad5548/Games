var score = 0;
var life = 3;


$('.main-box').on('click', function(event) {
    // event.preventDefault();
    event.stopPropagation();

    if (life == 1) {
        $('.balloon').hide();
        // $('.main-box').css('background-image', 'url(" + gameup.jpg + ")');
        $('.game-over').text('game over!');
        // alert('Game Over');
    } else {
        life--;
    }
    $('.life').text(life);

});


$('.main-box').on('click', '.balloon', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $("img").attr('src', 'images/explode.gif');
    setTimeout(function() {
        var left = Math.floor(Math.random() * 600);
        var top = Math.floor(Math.random() * 400);
        $('.balloon').css('left', left);
        $('.balloon').css('top', top);
        $("img").attr('src', 'images/balloon.png')

    }, 200);

    score += 10;
    $('.score').text(score);
});