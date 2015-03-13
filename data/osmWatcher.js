
function hash2position(hash) {
	var match = /^#map=\d+\/([0-9.-]+)\/([0-9.-]+)/.exec(hash);
	if (match !== null) {
		return {
			"status": "OK",
			"accuracy": 10.0,
			"location": {
				"lat": parseFloat(match[1]),
				"lng": parseFloat(match[2])
			}
		};
	}
}

window.addEventListener('hashchange', function(e) {
	self.port.emit('debug', window.location.hash);
	self.port.emit('positionChanged', hash2position(window.location.hash));
	e.preventDefault();
	e.stopPropagation();
}, true);

