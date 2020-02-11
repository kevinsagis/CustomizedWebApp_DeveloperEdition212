define(['dojo/_base/declare',
        'jimu/BaseWidget',
        'dojo/cookie'
],
  function (declare,
      BaseWidget,
      cookie) {


      return declare([BaseWidget], {
          baseClass: 'jimu-widget-appupdate',

          name: 'AppUpdate',

          postCreate: function () {
              this.inherited(arguments);
              this._config = this.config;
          },

          onOpen: function () {
              var appVersion = cookie('appVersion');

              // cookie not created for this session, reload app from server to avoid cache files
              if (!appVersion) {
                  cookie('appVersion', this._config.appVersion);
                  document.location.reload(true);
              }
              // cookie created for this session, but app has been updated, so reload from server
              else if (appVersion != this._config.appVersion) {
                  cookie('appVersion', this._config.appVersion);
                  document.location.reload(true);
              }
          }


      });
  });
  
  // git pull test