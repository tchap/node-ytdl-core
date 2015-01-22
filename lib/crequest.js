var $ = require('jquery');

module.exports = function(options, callback) {
  $.get(options.url)
    .done(function(data) {
      callback(null, data);
    })
    .fail(function(req, stat, err) {
      callback(err, null);
    });
};
