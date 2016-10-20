(function() {
	require('../../css/module/dialog.css');

	//加载dialog模板
	var tpl = require('text!../../template/module/dialog.html');
	$('body').append(tpl);
	module.exports = null;
})();