///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define(['dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/_base/html',
    'require',
    'dojo/on',
    'dojo/keys',
    'dojo/topic',
    'dijit/_TemplatedMixin',
    'dojo/text!./Panel.html',
    'jimu/BaseWidgetPanel',
    'jimu/dijit/LoadingIndicator',
    'jimu/utils'
  ],
  function(
    declare, lang, html, require, on, keys, topic,
    _TemplatedMixin, template, BaseWidgetPanel, LoadingIndicator, utils
  ) {
    //jshint unused:false
    /****
    This panel is dockable at left
    ****/
    return declare([BaseWidgetPanel, _TemplatedMixin], {
      baseClass: 'jimu-panel jimu-ldockable-panel',

      templateString: template,

      width: 0,

      postCreate: function(){
        this.inherited(arguments);
        this.maxWidth = this.position.width;

        var _tabindex = this.config.tabIndex;
        html.setAttr(this.domNode, 'tabindex', _tabindex);
        // html.setAttr(this.barNode, 'tabindex', _tabindex - 1);
        // this.widget = this.widgetManager.getWidgetById(this.config.widgets[0].id);

        this.own(on(this.domNode, 'keydown', lang.hitch(this, function(evt){
          if(!this.widget){
            var widgetConfig = this.config.widgets[0];
            this.widget = this.widgetManager.getWidgetById(widgetConfig.id);
            html.setAttr(this.widget.domNode, 'aria-label', widgetConfig.label);
            //not use tabIndex+/-1, for not effecting main tabbing order
            html.setAttr(this.widget.domNode, 'tabindex', 0);
            this.own(on(this.widget.domNode, 'keydown', lang.hitch(this, function(evt){
              if(evt.target === this.widget.domNode){
                if(evt.keyCode === keys.ENTER){
                  evt.preventDefault();
                  utils.focusFirstFocusNode(this.widget.domNode);
                }else if(evt.keyCode === keys.ESCAPE){
                  this.domNode.focus();
                }
                else if(evt.keyCode === keys.TAB){ //temp, for stopping default behavior
                  evt.preventDefault();
                  if(!evt.shiftKey){
                    //focus on close btn
                  }
                }
              }else if(evt.keyCode === keys.ESCAPE){
                evt.stopPropagation();
                this.widget.domNode.focus();
              }
            })));
          }
          if(html.hasClass(evt.target, this.baseClass)){
            if(evt.keyCode === keys.ENTER){
              this.widget.domNode.focus();
            }else if(evt.keyCode === keys.ESCAPE){
              utils.trapToNextFocusContainer(this.domNode);
            }
          }
        })));
      },

      startup: function(){
        var configs = this.getAllWidgetConfigs();
        if(Array.isArray(this.config.widgets)){
          configs = this.config.widgets;
        }else{
          configs = [this.config];
        }
        if(configs.length > 0){
          html.empty(this.containerNode);
        }

        this.inherited(arguments);
      },

      onOpen: function(){
        this._setPostionWidthAndLeft();
        html.setStyle(this.domNode, {
          width: this.position.width + 'px'
        });
        if(this.position.width === 0){
          this.panelManager.minimizePanel(this);
        }else{
          this.panelManager.maximizePanel(this);
        }
      },

      setPosition: function(position){
        this.inherited(arguments);
        topic.publish('changeMapPosition', {left: this.position.left + this.position.width});
      },

      onMaximize: function() {
        html.addClass(this.barNode, 'max');
        html.removeClass(this.barNode, 'min');

        this.position.left = 0;
        this.setPosition(this.position);
        this.inherited(arguments);
      },

      onMinimize: function() {
        html.removeClass(this.barNode, 'max');
        html.addClass(this.barNode, 'min');

        //on minimize, we can't set width/height = 0 to minimize because we use border-box model
        //and the content height/width can't be nagative
        //go here for more information: http://dev.w3.org/csswg/css-ui/#box-sizing
        this.position.left = 0 - this.position.width;
        this.setPosition(this.position);
        this.inherited(arguments);
      },

      resize: function(){
        this._setPostionWidthAndLeft();

        var style = utils.getPositionStyle(this.position);
        style.position = 'absolute';
        html.setStyle(this.domNode, style);
        topic.publish('changeMapPosition', {left: this.position.left + this.position.width});
      },

      _setPostionWidthAndLeft: function(){
        if(window.appInfo.isRunInMobile){
          var box = html.getMarginBox(window.jimuConfig.layoutId);
          this.position.width = box.w * 0.8;
          if(this.position.width > this.maxWidth){
            this.position.width = this.maxWidth;
          }
        }else{
          this.position.width = this.position.width;
        }

        // if(this.windowState === 'minimized'){
        //   this.position.left = 0 - this.position.width;
        // }else{
        //   this.position.left = 0;
        // }
      },

      _onBarClick: function() {
        if (this.windowState === 'maximized') {
          this.panelManager.minimizePanel(this);
        } else {
          this.panelManager.maximizePanel(this);
        }
      }

    });
  });