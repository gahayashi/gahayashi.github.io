/**
 * function to create a message me link
 */
// <!-- 
(function (window) {
	var username = '{{ site.email | split: "@" | first }}';
	var hostname = '{{ site.email | split: "@" | last }}';
	var atsign = '@';
	var content = username + atsign + hostname;

	var messageme = window.messageme = function (text) {
		if (text === undefined) {
			text = content;
		}

		document.write('<a href="mailto:' + content + '">' + text + '</a>');
	}
})(window);
// -->