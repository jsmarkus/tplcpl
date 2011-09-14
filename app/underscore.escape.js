//
// Underscore Template Auto-Escape
//

(function() {

    var _ = require('underscore');

    if (!_) {
        return;
    }
       
    var templateSettings = {
        evaluate    : /<%([\s\S]+?)%>/g,
        interpolate : /<%-([\s\S]+?)%>/g,
        autoEscape  : /<%=([\s\S]+?)%>/g
    };

    var template = function(str, data) {
        var c  = _.templateSettings;
        var tmpl = 'var __p=[],__e=escapeHTML,print=function(){__p.push.apply(__p,arguments);};' +
          'with(obj||{}){__p.push(\'' +
          str.replace(/\\/g, '\\\\')
             .replace(/'/g, "\\'")
             .replace(c.autoEscape, function(match, code) {
               return "',__e(" + code.replace(/\\'/g, "'") + "),'";
             })
             .replace(c.interpolate, function(match, code) {
               return "'," + code.replace(/\\'/g, "'") + ",'";
             })
             .replace(c.evaluate || null, function(match, code) {
               return "');" + code.replace(/\\'/g, "'")
                                  .replace(/[\r\n\t]/g, ' ') + "__p.push('";
             })
             .replace(/\r/g, '\\r')
             .replace(/\n/g, '\\n')
             .replace(/\t/g, '\\t')
             + "');}return __p.join('');";
        var func = new Function('obj', tmpl);
        return data ? func(data) : func;
    };
    
    _.extend(_, {
        templateSettings:     templateSettings,
        template:             template
    });

})();

