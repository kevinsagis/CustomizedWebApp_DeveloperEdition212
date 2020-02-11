define([
  'dojo/_base/declare',
  'jimu/BaseWidgetSetting',
  'dojo/parser',
  'dijit/registry'
],
function (declare,
    BaseWidgetSetting,
    parser,
    registry) {

    return declare([BaseWidgetSetting], {
        baseClass: 'jimu-widget-appupdate-setting',

        setConfig: function (config) {
            this.config = config;
        },

        postCreate: function () {
            this.setConfig(this.config);

        },

        startup: function () {
            this.inherited(arguments);
            parser.parse();
            this._getVersionTextBox();
            this._versionTextBox.set('value', this.config.appVersion);
            this._versionTextBox.set('style', 'width: 600px;');
        },


        _versionTextBox: null,

        _getVersionTextBox: function () {
            this._versionTextBox = registry.byId('versionTextBox');
        },

        getConfig: function () {
            return {
                appVersion: this._versionTextBox.get('value')
            };

        }

    });
});