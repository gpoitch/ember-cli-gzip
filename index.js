var gzip = require('broccoli-gzip');

function setOptionOrDefault(option, defaultValue) {
  return option === undefined ? defaultValue : option;
}

module.exports = {
  name: 'ember-cli-gzip',
  included: function(app) {
    var options = this.options = app.options.gzip || {};
    options.enabled = setOptionOrDefault(options.enabled, app.env === 'production');
    options.keepUncompressed = setOptionOrDefault(options.keepUncompressed, false);
    options.appendSuffix = setOptionOrDefault(options.appendSuffix, true);
    options.extensions = setOptionOrDefault(options.extensions, ['js', 'css']);
  },
  
  postprocessTree: function (type, tree) {
    if (type === 'all' && this.options.enabled) {
      tree = gzip(tree, this.options);
    }
    return tree;
  }
};
