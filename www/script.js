$('#nl-subscribe').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:'https://hooks.zapier.com/hooks/catch/3301335/cf3e5r/',
        type:'post',
        data:$('#nl-subscribe').serialize(),
        success:function(){
          $('#nl-subscribe').html('<div class="alert-success">Success!</div>');
        }
    });
});

$('.js-scroll-trigger').click(function() {
	$('.navbar-collapse').collapse('hide');
});




$(document).ready(() => {
	$('body').removeClass('loading');
});

