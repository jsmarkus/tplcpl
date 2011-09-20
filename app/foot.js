var Templating = ( function (window) {
	var tpl, exports = {};

	tpl = exports.tpl = function (viewName, locals, scope) {
		var view = TPL[viewName];
		if('function' !== typeof (view)) {
			throw 'View not found';
		}
		if(scope!=='undefined') {
			return view.call(scope, locals)
		} else {
			return view(locals);
		}
	}
	
	function tplHelper (viewName, locals) {
		return tpl(viewName, locals, this);
	}

	exports.enable = function (klass) {
		if(klass.prototype) {
			klass.prototype.tpl = tplHelper;
		} else {
			klass.tpl = tplHelper;
		}
	}

	return exports;
} (window) );


exports.Templating = Templating;
