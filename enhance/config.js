exports = module.exports = function() {
  var mod = {
    start: function() {
      (function(left, right) {
        var copyConfig = function(left, right) {
          if (app.has(left) && app.has(right)) {
            for (var key in left) {
              var value = left[key];
              if (typeof value !== "object") {
                right[key] = value;
              } else {
                copyConfig(value, right[key]);
              }
            }
          }
        };
        copyConfig(left, right);
      })(appConfig.config, config);
    }
  };
  return mod;
}