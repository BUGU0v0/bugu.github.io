function filterPosts() {
	var selector = $(this).data('filter');
	$('#post-list .post-card').not(selector).hide(400);
	$('#post-list .post-card').filter(selector).show(400);
	$('#post-filters .pill-btn').removeClass('is-active');
	$(this).addClass('is-active');
}

$('#post-filters .pill-btn').click(filterPosts);

$(window).on('load', function () {
	$('body').removeClass('is-preload');
});
