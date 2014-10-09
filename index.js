var gzip = require('broccoli-gzip');
var compression = require('compression');

var optionsFix;

module.exports = {
  name: 'ember-cli-gzip',
  initOptions: function() {
    var options = optionsFix = this.options = this.app.options.gzip || {};
    options.enabled          = options.enabled !== undefined ? options.enabled : this.app.env === 'production';
    options.keepUncompressed = options.keepUncompressed !== undefined ? options.keepUncompressed : false;
    options.appendSuffix     = options.appendSuffix !== undefined ? options.appendSuffix : true;
    options.extensions       = options.extensions || ['js', 'css'];
  },
  included: function(app) {
    this.app = app;
    this.initOptions();
  },
  postprocessTree: function (type, tree) {
    if (type === 'all' && this.options.enabled) {
      tree = gzip(tree, this.options);
    }

    return tree;
  },
  serverMiddleware: function(config) {
    if (optionsFix.enabled) {
      config.app.use(compression());
    }
  }
};
