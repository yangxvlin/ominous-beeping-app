cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-hot-code-push-local-dev-addon.chcpLocalDev",
      "file": "plugins/cordova-hot-code-push-local-dev-addon/www/chcpLocalDev.js",
      "pluginId": "cordova-hot-code-push-local-dev-addon",
      "clobbers": [
        "chcpLocalDev"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-hot-code-push-local-dev-addon": "0.4.2",
    "cordova-plugin-browsersync": "0.1.7"
  };
});