var tabs = require('sdk/tabs');
var pageMod = require('sdk/page-mod');



pageMod.PageMod({
	include: '*.openstreetmap.org',
	contentScriptFile: './osmWatcher.js',
	contentScriptWhen: 'start',
	onAttach: osmListener
});


function osmListener(worker) {
	worker.port.on('positionChanged', function(position) {
		console.log(position);
	});

	worker.port.on('debug', function(msg) {
		console.log('[DEBUG] ' + msg);
	});
}



tabs.open('http://www.openstreetmap.org');


