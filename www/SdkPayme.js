//var exec = require('cordova/exec');

//exports.coolMethod = function (arg0, success, error) {
//    exec(success, error, 'SdkPayme', 'coolMethod', [arg0]);
//};

  
// Constructor vacío
function SdkPayme() {}

// recibir los datos
SdkPayme.prototype.coolMethod = function(message, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  cordova.exec(successCallback, errorCallback, 'SdkPayme', 'coolMethod', [options]);
}

 // Instalar la variable en el window
SdkPayme.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.sdkPayme = new SdkPayme();
  return window.plugins.sdkPayme;
};
cordova.addConstructor(SdkPayme.install);
