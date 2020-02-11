// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:builder/plugins/app-list/Import.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"actions jimu-float-trailing" data-dojo-attach-point\x3d"actionsNode"\x3e\r\n    \x3cspan class\x3d"actions-label jimu-ellipsis" title\x3d"${nls.actionsLabel}" data-dojo-attach-event\x3d"onclick:_onActionsLabelClick"\x3e${nls.actionsLabel}\x3c/span\x3e\r\n    \x3cdiv class\x3d"actions-menu" data-dojo-attach-point\x3d"actionsMenu"\x3e\r\n      \x3cdiv class\x3d"actions-menu-item item-import" data-dojo-attach-point\x3d"itemImportBtn" data-dojo-attach-event\x3d"onclick:_onMenuItemClick"\x3e\r\n        \x3cdiv class\x3d"import-button jimu-ellipsis" title\x3d"${nls.importAction}" data-dojo-attach-event\x3d"onclick:_onImportClick"\x3e${nls.importAction}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"actions-menu-item item-upload" data-dojo-attach-event\x3d"onclick:_onMenuItemClick"\x3e\r\n        \x3cdiv class\x3d"upload-button-div"\x3e\r\n          \x3cdiv class\x3d"upload-button jimu-ellipsis" title\x3d"${nls.uploadAction}"\x3e${nls.uploadAction}\x3c/div\x3e\r\n          \x3cform enctype\x3d"multipart/form-data" title\x3d"${nls.uploadAction}" method\x3d"post" action\x3d"/webappbuilder/rest/apps/upload" data-dojo-attach-point\x3d"uploadAppFileFormNode"\x3e\r\n            \x3cinput class\x3d"file-input" title\x3d"${nls.uploadAction}" name\x3d"app" type\x3d"file" accept\x3d".zip" style\x3d"width:100%;height:100%;"\r\n              data-dojo-attach-point\x3d"appFileInputNode" data-dojo-type\x3d"dojox/form/Uploader" data-dojo-attach-event\x3d"onChange:_onAppFileChange,onError:_onAppFileUploadError,onComplete:_onAppFileUploadComplete"\x3e\r\n            \x3cinput name\x3d"creator" type\x3d"text" value\x3d"1234" style\x3d"display:none;" data-dojo-attach-point\x3d"appFileCreatorInputNode"\x3e\r\n            \x3cinput name\x3d"portalUrl" type\x3d"text" style\x3d"display:none" data-dojo-attach-point\x3d"appPortalUrlInputNode"\x3e\r\n            \x3cinput name\x3d"fromList" type\x3d"text" style\x3d"display:none" data-dojo-attach-point\x3d"fromListNode"\x3e\r\n          \x3c/form\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n\r\n'}});
define("dojo/_base/declare dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./Import.html dojo/on dojo/_base/lang dojo/sniff builder/serviceUtils dojo/query jimu/dijit/Message jimu/dijit/ItemSelector jimu/dijit/Popup builder/portalUtils builder/utils esri/lang builder/dijit/FullScreenPopup dojox/form/Uploader dojo/NodeList-dom".split(" "),function(p,c,q,r,t,u,e,b,v,l,m,h,w,k,n,x,f,y){return p([q,r,t],{baseClass:"import-app",templateString:u,_itemSelector:null,
_importPopup:null,nls:null,postMixInProperties:function(){this.inherited(arguments);this.nls=this.appListWidget.nls;this.loading=this.appListWidget.loading},startup:function(){this.inherited(arguments);this.own(e(window.document,"click",b.hitch(this,function(a){a.clickFromSelf||setTimeout(b.hitch(this,function(){c.setStyle(this.actionsMenu,"display","none");window.isRTL?c.setStyle(this.actionsMenu,{left:"auto",right:0}):c.setStyle(this.actionsMenu,{right:"auto",left:0});c.removeClass(this.actionsNode,
"actions-drop-down")}),50)})));this._applyZipToFileInput();this.appPortalUrlInputNode&&(this.appPortalUrlInputNode.value=window.portalUrl);this._keepFileChooserOverItem()},_applyZipToFileInput:function(){m('input[type\x3d"file"]',this.appFileInputNode.domNode).forEach(b.hitch(this,function(a){c.setAttr(a,"accept",".zip")}))},_keepFileChooserOverItem:function(){9>=v("ie")&&m("span.dijitUploader input:first-child",this.domNode).forEach(b.hitch(this,function(a){window.isRTL?c.setStyle(a,{left:"33px",
right:"auto"}):c.setStyle(a,"right","33px")}))},_onActionsLabelClick:function(a){var b=c.getMarginBox(window.jimuConfig.layoutId),d=null;"none"===c.getStyle(this.actionsMenu,"display")?(c.setStyle(this.actionsMenu,"display","block"),d=c.position(this.actionsMenu),window.isRTL?0>d.x&&c.setStyle(this.actionsMenu,{right:"auto",left:0}):d.x+d.w>b.w&&c.setStyle(this.actionsMenu,{left:"auto",right:0})):(c.setStyle(this.actionsMenu,"display","none"),d=c.position(this.actionsMenu),window.isRTL?c.setStyle(this.actionsMenu,
{left:"auto",right:0}):c.setStyle(this.actionsMenu,{right:"auto",left:0}));a.clickFromSelf=!0},_onMenuItemClick:function(a){setTimeout(b.hitch(this,function(){c.setStyle(this.actionsMenu,"display","none");c.removeClass(this.actionsNode,"actions-drop-down");a.stopPropagation()}),50)},_onAppFileUploadError:function(a){console.error(a);new h({message:x.localizeErrMessageByCode(a),buttons:[{label:this.nls.ok,onClick:b.hitch(this,function(){location.reload()})}]});this._keepFileChooserOverItem();this._applyZipToFileInput();
this.loading.hide()},_onAppFileUploadComplete:function(a){a.success?(location.reload(),this._refreshAppOrTemplatePage(a.app&&a.app.isTemplate),this._keepFileChooserOverItem(),this._applyZipToFileInput(),this.loading.hide()):this._onAppFileUploadError(a)},_onAppFileChange:function(){var a=this.appFileInputNode.getFileList();a&&0<a.length&&(/.+(\.zip)$/.test(a[0].name)?(this.loading.show(this.nls.uploading),n.getPortal(window.portalUrl).getUser().then(b.hitch(this,function(a){c.setAttr(this.appFileCreatorInputNode,
"value",a.username);c.setAttr(this.fromListNode,"value",this._currentShownList);this.appFileInputNode.submit(this.uploadAppFileFormNode)}),function(a){console.error(a);new h({message:a.message||a});this.loading.hide()})):new h({message:this.nls.fileTypeError}))},_onImportClick:function(){this._itemSelector=new w({portalUrl:window.portalUrl,itemTypes:["Web Mapping Application"],onlyShowOnlineFeaturedItems:!1,typeKeywords:["Web AppBuilder"],showOnlineItems:!1});this.own(e(this._itemSelector,"item-selected",
b.hitch(this,function(){this._importPopup.enableButton(0)})));this.own(e(this._itemSelector,"none-item-selected",b.hitch(this,function(){this._importPopup.disableButton(0)})));var a=m("#main-page")[0];this._importPopup=new y({zIndex:101,titleStr:this.nls.importApp,blurContainer:a.firstElementChild,content:this._itemSelector.domNode,buttons:[{label:this.nls.ok,isHighLight:!0,onClick:b.hitch(this,this._onImportOkClick)},{label:this.nls.cancel,isHighLight:!1,onClick:b.hitch(this,this._onImportCancelClick)}],
contentAutoHeight:!0});this._importPopup.placeAt(a);this._importPopup.show();this._importPopup.disableButton(0);this._itemSelector.startup();this.own(e(this._itemSelector.tab,"tabChanged",b.hitch(this,function(){window.setTimeout(b.hitch(this,function(){this._importPopup.resize()},100))})));this.own(e(this._itemSelector,"update",b.hitch(this,function(){this._importPopup.resize()})))},_onImportOkClick:function(){var a=this._itemSelector.getSelectedItem(),c=a.id;this.loading.show();n.getPortal(window.portalUrl).getUser().then(b.hitch(this,
function(d){a.getItemData().then(b.hitch(this,function(g){this.loading.hide();this._importPopup.close();g=b.clone(g);l.switchImageFormatOfAppConfig({appConfig:g,appId:c},"import").then(b.hitch(this,function(b){this._checkAppVersion(b.appConfig,{creator:d.username,name:a.title,description:a.description||"",appType:a.typeKeywords&&0<=a.typeKeywords.indexOf("WAB3D")?"HTML3D":"HTML",stemappPath:this.appListWidget.pluginManager.getStemappInfo("HTML").appPath,portalUrl:window.portalUrl,isTemplate:!1,isTemplateApp:!1,
isPredefined:!1})}),b.hitch(this,function(b){this.loading.hide();this._checkAppInfoError(a.title,b)}))}),b.hitch(this,function(b){this.loading.hide();this._checkAppInfoError(a.title,b)}))}),b.hitch(this,function(b){this.loading.hide();this._checkAppInfoError(a.title,b)}))},_checkAppVersion:function(a,c){this.loading.show(this.nls.importing);l.checkAppVersion(a,c).then(b.hitch(this,function(b){this.loading.hide();b=b.versionInfo;"old"===b.wabVersionStatus?this._doAction("upgrade",a,c):"new"===b.wabVersionStatus?
this._showNewer(c.name,b.appVersion):"same"===b.wabVersionStatus&&this._doAction("import",a,c)}),b.hitch(this,function(b){this.loading.hide();this._checkAppInfoError(a.title,b)}))},_checkAppInfoError:function(a,b){new h({message:f.substitute({APP_NAME:a},this.nls.checkVersionError)});console.error(b)},_showUpgrade:function(a,g,d){d="\x3cdiv style\x3d'font-size:14px;overflow:hidden'\x3e"+f.substitute({OLD_VERSION:d.appVersion,LATEST_VERSION:d.latestVersion},this.nls.upgradeContent)+"\x3cdiv style\x3d'height:24px;'\x3e\x3c/div\x3e"+
this.nls.upgradeContentFooter+"\x3c/div\x3e";var e=new k({titleLabel:this.nls.upgradeApp,content:c.toDom(d),width:640,autoHeight:!0,buttons:[{label:this.nls.upgradeBtn,onClick:b.hitch(this,function(){e.close();this._doAction("upgrade",a,g)})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:b.hitch(this,function(){e.close()})}]})},_showNewer:function(a,b){a="\x3cdiv style\x3d'font-size:14px;overflow:hidden'\x3e"+f.substitute({APP_NAME:a,VERSION_NUMBER:b},this.nls.importUpperVertion)+
"\x3c/div\x3e";new k({titleLabel:this.nls.importApp,content:c.toDom(a),width:640,autoHeight:!0,buttons:[{label:this.nls.ok}]})},_doAction:function(a,c,d){"import"===a?this.loading.show(this.nls.importing):"upgrade"===a&&this.loading.show(this.nls.upgrading);l.importPortalApp(c,d).then(b.hitch(this,function(){this._importSuccess(d.appName)}),b.hitch(this,function(a){this.loading.hide();this._importError(d.appName,a)}))},_importSuccess:function(a){this.appListWidget.getAppList().then(b.hitch(this,function(){this._refreshAppOrTemplatePage(!1);
var b="\x3cdiv style\x3d'font-size:14px;overflow:hidden'\x3e"+f.substitute({APP_NAME:a},this.nls.importSuccess)+"\x3c/div\x3e";new k({titleLabel:this.nls.importApp,content:c.toDom(b),width:640,autoHeight:!0,buttons:[{label:this.nls.ok}]})}),b.hitch(this,function(a){console.error(a)})).always(b.hitch(this,function(){this.loading.hide()}))},_importError:function(a,b){a="\x3cdiv style\x3d'font-size:14px;overflow:hidden'\x3e"+f.substitute({APP_NAME:a},this.nls.upgradeFailure)+"\x3c/div\x3e";new k({titleLabel:this.nls.importApp,
content:c.toDom(a),width:640,autoHeight:!0,buttons:[{label:this.nls.ok}]});console.error(b)},_onImportCancelClick:function(){this._importPopup.close()},_refreshAppOrTemplatePage:function(a){a?(this.appListWidget._onSwitchToTemplateContent(),this.appListWidget.refreshTemplatePage()):(this.appListWidget._onSwitchToAppContent(),this.appListWidget.refreshAppPage())}})});