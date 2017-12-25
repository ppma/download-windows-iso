// ==UserScript==
// @name           windows iso
// @author         ppma
// @description    # download-windows-iso;在微软官网下载windows iso镜像
// @updateURL      https://github.com/ppma/download-windows-iso/raw/master/key.user.js
// @downloadURL    https://github.com/ppma/download-windows-iso/raw/master/key.user.js
// @license        GPL version 3
// @include        https://www.microsoft.com/*/software-download/windows*
// @run-at         document-start
// @version 17.12.25
// ==/UserScript==
(function() {
	navigator.__defineGetter__('platform', function() {
		return 'Linux x86';
	});
	navigator.__defineGetter__('userAgent', function() {
		return 'Mozilla/5.0 (X11; Fedora; Linux x86_64;) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.3';
	});
})();
