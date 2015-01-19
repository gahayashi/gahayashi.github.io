/**
 * Gabriele Hayashi
 */
var appname = 'blog.js'

function log(string) {
	console.log(appname + ': ' + string);
}

(function (window, $) {
	$(function () {
		log('Enter');
		log('Exit');
	});
})(window, window.jQuery);

log('Loaded')