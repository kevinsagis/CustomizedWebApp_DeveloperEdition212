// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:builder/plugins/app-list/AppListPage.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"separate-line" \x3e\r\n    \x3cdiv class\x3d"switch-app-template"\x3e\r\n      \x3cdiv class \x3d"switch-btn-box selected jimu-float-leading" data-dojo-attach-point\x3d"appListBtnBox" \x3e\r\n        \x3cdiv class\x3d"switch-btn app-list-btn" data-dojo-attach-point\x3d"appListBtn" data-dojo-attach-event\x3d"onclick:_onSwitchToAppList"\x3e${nls.apps}\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"blue-block"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3cdiv class \x3d"switch-btn-box jimu-float-leading" data-dojo-attach-point\x3d"templateListBtnBox"\x3e\r\n        \x3cdiv class\x3d"switch-btn template-list-btn jimu-float-leading" data-dojo-attach-point\x3d"templateListBtn" data-dojo-attach-event\x3d"onclick:_onSwitchToTemplateList"\x3e${nls.templates}\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"blue-block"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"app-content" data-dojo-attach-point\x3d"appContent"\x3e\r\n    \x3cdiv class\x3d"head-section" data-dojo-attach-point\x3d"head-section"\x3e\r\n        \x3cdiv class\x3d"textPart1 jimu-float-leading"\x3e${nls.welcomeMessage}\x3c/div\x3e\r\n        \x3cdiv class\x3d"textPart2 jimu-float-leading"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"importBtnDiv"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"create-button-div jimu-float-trailing" data-dojo-attach-point\x3d"createBtnDiv"\x3e\r\n          \x3cinput class\x3d"create-button jimu-ellipsis" type\x3d"button" title\x3d"${nls.appCreate}" value\x3d"${nls.appCreate}" data-dojo-attach-event\x3d"onclick:_onCreateClick"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"list-section" id\x3d"list-section" data-dojo-attach-point\x3d"listSection"\x3e\r\n      \x3ctable class\x3d"list-section-head"\x3e\r\n        \x3ctbody\x3e\r\n          \x3ctr class\x3d"head-content"\x3e\r\n            \x3cth class\x3d"name" data-dojo-attach-point\x3d"headContentName"\x3e${nls.appName}\x3c/th\x3e\r\n            \x3cth class\x3d"desc"\x3e${nls.appDesc}\x3c/th\x3e\r\n            \x3cth class\x3d"time"\x3e${nls.appTime}\x3c/th\x3e\r\n            \x3cth class\x3d"modified"\x3e${nls.appModified}\x3c/th\x3e\r\n            \x3cth class\x3d"creator"\x3e${nls.appCreator}\x3c/th\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/tbody\x3e\r\n      \x3c/table\x3e\r\n\r\n      \x3cdiv class\x3d"list-section-body-content" id\x3d"list-section-body-content" data-dojo-attach-point\x3d"listSectionBodyContent"\x3e\r\n        \x3ctable class\x3d"list-table" data-dojo-attach-point\x3d"listTable"\x3e\r\n          \x3ctbody data-dojo-attach-point\x3d"listTableBody"\x3e\x3c/tbody\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n\r\n      \x3cdiv class\x3d"list-section-body-content" id\x3d"template-list-section-body-content" data-dojo-attach-point\x3d"templateListSectionBodyContent"\x3e\r\n        \x3ctable class\x3d"list-table" data-dojo-attach-point\x3d"templateListTable"\x3e\r\n          \x3ctbody data-dojo-attach-point\x3d"templateListTableBody"\x3e\x3c/tbody\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3c!--iframe style\x3d"display:none" name\x3d"downloadTargetFrame"\x3e\x3c/iframe--\x3e\r\n\x3c/div\x3e\r\n\r\n'}});
define("dojo/_base/declare dojo/_base/html dojo/_base/array dojo/mouse dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./AppListPage.html dojo/on dojo/_base/lang ./AppOperMenu ./Import dojo/topic dojo/dom-class dojo/query jimu/dijit/Message jimu/utils dojox/form/Uploader dojo/NodeList-dom".split(" "),function(A,a,q,y,B,C,D,E,n,g,F,G,z,l,H,I,J){return A([B,C,D],{baseClass:"app-list-page",templateString:E,menu:void 0,label:"applist",apps:null,templates:null,sortBy:"lastUpdated",
_itemSelector:null,_importPopup:null,_eventHandles:null,_appOperMenus:null,_currentShownList:null,appListWidget:null,postMixInProperties:function(){this.inherited(arguments);this.nls=this.appListWidget.nls;this.loading=this.appListWidget.loading;this.folderUrl=this.appListWidget.folderUrl},constructor:function(){this._eventHandles=[];this._appOperMenus=[];this._currentShownList="appList"},startup:function(){this.inherited(arguments);a.setSelectable(this.appContent,!1);this.importDijit=(new G({appListWidget:this.appListWidget})).placeAt(this.importBtnDiv)},
refresh:function(a,b){this.createAppList(a,b)},createAppList:function(f,b){var c,d=null;this.cleanAppList();a.setStyle(this.listSectionBodyContent,"display","block");a.setStyle(this.templateListSectionBodyContent,"display","block");for(c=0;c<f.length;c++)d=this.createAppNode(f[c],c,d);for(c=0;c<b.length;c++)d=this.createAppNode(b[c],c,d,!0);"templateList"===this._currentShownList?(a.setStyle(this.templateListSectionBodyContent,"display","block"),a.setStyle(this.listSectionBodyContent,"display","none")):
(a.setStyle(this.templateListSectionBodyContent,"display","none"),a.setStyle(this.listSectionBodyContent,"display","block"))},cleanAppList:function(){a.empty(this.listTableBody);a.empty(this.templateListTableBody);q.forEach(this._appOperMenus,function(a){a.destroy()});this._appOperMenus=[];q.forEach(this._eventHandles,function(a){a.remove()});this._eventHandles=[]},createAppNode:function(f,b,c,d){var e,m,l,k,t,p,u,r,w,v,x;d?(m=this.templateListTableBody,x=this.templateListSectionBodyContent,p=this.nls.preview):
(m=this.listTableBody,x=this.listSectionBodyContent,p=this.nls.launch);b=a.create("tr",{"class":"list-table-item"+(b%2?" list-table-item-add ":" "),"data-app-id":f.id,"data-app-name":f.name},m);v=a.create("td",{"class":"item-begin-td item-first-td"},b);a.create("td",{"class":"item-begin-td item-second-td"},b);m=a.create("td",{"class":"item-name-td"},b);l=a.create("div",{"class":"item-name",innerHTML:f.name,title:f.name},m);k=a.create("td",{"class":"item-desc-td"},b);t=a.create("div",{"class":"item-desc",
innerHTML:f.description,title:f.description},k);e=a.create("td",{"class":"item-time-td"},b);w=a.create("div",{"class":"item-time",innerHTML:this.appListWidget._getLocaleDateTime(f.lastUpdated)},e);e=a.create("td",{"class":"item-modified-td"},b);var q=a.create("div",{"class":"item-modified",innerHTML:f.modified},e);e=a.create("td",{"class":"item-creator-td"},b);a.create("div",{"class":"item-creator",innerHTML:f.creator},e);e=a.create("td",{"class":"item-loading-td",innerHTML:"\x3cdiv class\x3d'loading-div'\x3e\x3c/div\x3e"},
b);var h=H(".loading-div",e)[0];a.create("img",{src:this.folderUrl+"css/images/download.gif","class":"loading-img"},h);e=a.create("td",{"class":"item-operations-td"},b);e=a.create("div",{"class":"item-operations-div"},e);a.setStyle(e,"display","none");u=a.create("div",{"class":"item-more jimu-float-trailing"},e);r="stemapp/index.html?id\x3d"+f.id;f.isPredefined&&(r+="\x26ispredefined\x3dtrue");a.create("div",{innerHTML:'\x3ca href\x3d"'+r+'" target\x3d"_blank"\x3e'+p+"\x3c/a\x3e","class":"item-preview jimu-float-trailing",
title:p},e);p="";f.isPredefined&&(p="display: none");p=a.create("div",{"class":"item-edit jimu-float-trailing",title:this.nls.edit,style:p},e);a.create("div",{innerHTML:this.nls.edit,"class":"item-edit-text jimu-float-leading"},p);r=a.create("td",{"class":"item-end-td"},b);r=a.create("div",{"class":"app-menu-div"},r);d=new F({app:f,posNode:b,loadingDiv:h,appListWidget:this.appListWidget,nls:this.nls,isTemplate:d},r);this._appOperMenus.push(d);h=n(b,y.enter,g.hitch(this,this._onListTableItemMouseover,
b,e,c));this._eventHandles.push(h);h=n(b,y.leave,g.hitch(this,this._onListTableItemMouseout,b,e,d,c));this._eventHandles.push(h);h=n(b,"click",g.hitch(this,function(a){a.stopPropagation()}));this._eventHandles.push(h);h=n(l,"dblclick",g.hitch(this,this._onNameDoubleClick,f,b,m,l,w,q));this._eventHandles.push(h);h=n(t,"dblclick",g.hitch(this,this._onDescriptionDoubleClick,f,b,k,t,w,q));this._eventHandles.push(h);h=n(p,"click",g.hitch(this,this._onAppEditClick,f));this._eventHandles.push(h);h=n(u,"click",
g.hitch(this,this._onAppMoreClick,f,d,u,v,b,e,c));this._eventHandles.push(h);h=n(this.ownerDocument,"click",g.hitch(this,this._onAppsClick,d,b,e,v,c,u));this._eventHandles.push(h);h=z.subscribe("menuAll/hide",g.hitch(this,this._onAppsClick,d,b,e,v,c,u));this._eventHandles.push(h);h=n(x,"scroll",g.hitch(this,this._onScroll,d,b,e,v,c,u));this._eventHandles.push(h);return b},changeTextFieldOfNode:function(f,b,c,d,e,m,q){if(!f.isPredefined){var k,t=g.clone(f);a.setStyle(e,"display","none");k="name"===
d?a.create("input",{value:f[d],"class":"jimu-input item-input-"+d},c):a.create("textarea",{value:f[d],"class":"jimu-input item-textarea-"+d},c);k.focus();k.select();l.add(b,"list-table-item-dbclick");n(k,"blur",g.hitch(this,function(){f[d]!==k.value&&(k.value=J.stripHTML(k.value),t[d]=k.value,this.appListWidget.updateApp(t).then(g.hitch(this,function(b,c){!0===c.success?(a.setAttr(e,"innerHTML",b),a.setAttr(e,"title",b),a.setAttr(m,"innerHTML",this._getLocaleDateTime(c.lastUpdated)),a.setAttr(q,"innerHTML",
c.modified),f[d]=b):(console.error("The response of updateApp is 'unsuccess'!"),new I({message:c.message}))},k.value),function(a){console.error("Updates 'app name' or 'app description' failed!"+a)}));a.destroy(k);a.setStyle(e,"display","block");l.remove(b,"list-table-item-dbclick")}))}},_onCreateClick:function(){var a=this.appListWidget.pluginManager.getExtensions("startup.creation-entry")[0],a=this.appListWidget.pluginsMeta[a.pluginName];this.loading.show("");this.appListWidget.pluginManager.loadPlugin(a).then(g.hitch(this,
function(a){a.popupDlg();this.loading.hide()}),g.hitch(this,function(){this.loading.hide()}))},_onSwitchToAppList:function(){a.setStyle(this.templateListSectionBodyContent,"display","none");a.setStyle(this.listSectionBodyContent,"display","block");a.setStyle(this.createBtnDiv,"display","block");a.setAttr(this.headContentName,"innerHTML",this.nls.appName);a.setStyle(this.importDijit.itemImportBtn,"display","block");a.addClass(this.appListBtnBox,"selected");a.removeClass(this.templateListBtnBox,"selected");
this._currentShownList="appList"},_onSwitchToTemplateList:function(){a.setStyle(this.listSectionBodyContent,"display","none");a.setStyle(this.templateListSectionBodyContent,"display","block");a.setStyle(this.createBtnDiv,"display","none");a.setAttr(this.headContentName,"innerHTML",this.nls.templateName);a.setStyle(this.importDijit.itemImportBtn,"display","none");a.addClass(this.templateListBtnBox,"selected");a.removeClass(this.appListBtnBox,"selected");this._currentShownList="templateList"},_onListTableItemMouseover:function(f,
b,c){l.add(f,"list-table-item-mouseover");c&&l.add(c,"list-table-next-item-mouseover");a.setStyle(b,"display","block")},_onListTableItemMouseout:function(f,b,c,d){c.isShow||(l.remove(f,"list-table-item-mouseover"),d&&l.remove(d,"list-table-next-item-mouseover"),a.setStyle(b,"display","none"))},_onNameDoubleClick:function(a,b,c,d,e,m){g.hitch(this,this.changeTextFieldOfNode(a,b,c,"name",d,e,m))},_onDescriptionDoubleClick:function(a,b,c,d,e,m){g.hitch(this,this.changeTextFieldOfNode(a,b,c,"description",
d,e,m))},_onAppEditClick:function(a){this.appListWidget.pluginManager.getPluginByName("startup").switchToAppConfig(a)},_onAppMoreClick:function(f,b,c,d,e,m,g,k){b.isShow?(b.hide(),l.remove(d,"item-first-td-selected"),a.removeClass(c,"item-more-selected")):(z.publish("menuAll/hide"),b.set("app",f),b.show(),l.add(d,"item-first-td-selected"),a.addClass(c,"item-more-selected"),this._onListTableItemMouseover(e,m,g,k));k.stopPropagation()},_onAppsClick:function(f,b,c,d,e,g){f.hide();l.remove(d,"item-first-td-selected");
e&&l.remove(e,"list-table-next-item-mouseover");l.remove(b,"list-table-item-mouseover");a.removeClass(g,"item-more-selected");a.setStyle(c,"display","none")},_onScroll:function(a,b,c,d,e,g){!0===a.isShow&&this._onAppsClick(a,b,c,d,e,g)}})});