// ==UserScript==
// @name           windows iso
// @author         ppma
// @description    在微软官网下载windows iso镜像
// @license        GPL version 3
// @match          https://www.microsoft.com/zh-cn/software-download/windows*
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
