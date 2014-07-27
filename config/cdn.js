module.exports = function(app){
  var path    = require('path');
  var sslEnabled = false

  var options = {
      publicDir  : path.join(__dirname, '../public')
    , viewsDir   : path.join(__dirname, '../views')
    , domain     : 's3.amazonaws.com/tagtree-express'
    , bucket     : 'tagtree-express'
    , key        : 'AKIAIXUB3O7LAAGDZBFA'
    , secret     : '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'
    , hostname   : 'localhost'
    , port       : (sslEnabled ? 443 : 1337)
    , ssl        : sslEnabled
    , production : true
  };

  // Initialize the CDN magic
  var CDN = require('express-cdn')(app, options);

  app.locals.CDN =  CDN();

}
