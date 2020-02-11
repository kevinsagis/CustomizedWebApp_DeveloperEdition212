define(['dojo/_base/declare',
  'jimu/BaseWidget',
      'esri/map'

],
    function (declare, BaseWidget, map) {
        var handlerStreetView2 = '';
        var handlerStreetView = '';
   

    var clazz = declare([BaseWidget], {
        templateString: '<div> <hr> <b>Google Street View</b><input type="button" class="jimu-btn" id="btnPict" data-dojo-attach-event="click:_streetviewClick"  style="background-color: rgb(125,125,125)!important; background: url(./widgets/Streetview/images/icon.png) no-repeat; color: white!important;"  value=" &nbsp;&nbsp;&nbsp; Select"> <br><br>1. Click the Street View <i>Select</i> button to activate. ⇢<br /> 2. Click on the map, and Google Streetview will open for this location in a new window. <br><br>Popups must be enabled.   ' +
            '  <br /> <br /> '
            + '<hr><br><b>Google Earth </b> <input type="button" style="background-color: rgb(125,125,125)!important; background: url(./widgets/Streetview/images/icon2.png) no-repeat; color: white!important;" class="jimu-btn" id="btnPict2" value=" &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Select &nbsp;" data-dojo-attach-event="click:_streetviewClick2"><br><br> 1. Click the <i>Select</i> button to activate the tool. ⇢ ' + ' <br />' + '2. Click on the map, and Google Earth will open for this location in a new window. To view 3D imagery where available, click and hold down on the middle mouse button or wheel and then while holding it down, move the mouse to rotate the view.<br /><br /> <img src="./images/mouse.png" width="60"><br /><br />Note: Google Earth currently requires <a href="http://www.chrome.com" target="_blank">Chrome.</a>  </div> ',

            
        handlerStreetView2: '',
        handlerStreetView: '',
        
        onOpen: function () {
            ///kevin m - resize to make it a little bit wider ////
            var panel = this.getPanel();
            panel.position.width = 440;
            panel.position.height = 443;
                     panel.setPosition(panel.position);
            panel.panelManager.normalizePanel(panel);
        },

        _streetviewClick: function () {
            if (handlerStreetView2 !== undefined || handlerStreetView2 !== null) {
                handlerStreetView2 = '';
            };
            map = this.map;

            var handlerStreetView;
            //handlers 
            if (handlerStreetView) {
                handlerStreetView.remove();
                handlerStreetView= null;
            } else {



map.setMapCursor("url(widgets/Streetview/images/streetview.cur),auto");
                handlerStreetView = map.on("click", function (evt) {

                    pt = esri.geometry.webMercatorToGeographic(evt.mapPoint);
                    url = "http://maps.google.com/maps?q=Your+Sign+Location+in+Street+View@" + pt.x + "," + pt.y + "&cbll=" + pt.y + "," + pt.x + "&layer=c";
             

                    window.open(url);

                    ///// remove after one click
                    map.setMapCursor("default");
                    ////remove after one click
                    

                    handlerStreetView.remove();
                });
            };  /// end else for handlerStreetView 


            /////  end of street view widget

            /////
        },
   





    




            _streetviewClick2: function () {

                if (handlerStreetView !== undefined || handlerStreetView !== null) {
                    handlerStreetView = '';

                };

                map2 = this.map;

                var handlerStreetView2;
                //handlers 
                if (handlerStreetView2) {
                    handlerStreetView2.remove();
                    handlerStreetView2 = null;
                } else {



                    map2.setMapCursor("url(widgets/Streetview/images/streetview2.cur),auto");
                    handlerStreetView2 = map2.on("click", function (evt) {

                        pt2 = esri.geometry.webMercatorToGeographic(evt.mapPoint);
                        url2 = "https://earth.google.com/web/@" + pt2.y + "," + pt2.x + ",20.66599881a,243.46830444d,35y,19.66059156h,56.22605831t,-0r";


                        window.open(url2);

                        ///// remove after one click
                        map2.setMapCursor("default");
                        ////remove after one click


                        handlerStreetView2.remove();
                    });
                };  /// end else for handlerStreetView2 Earth 


                /////  end of earth view widget

                /////
        }


    
    }




    );

clazz.hasStyle = false;
clazz.hasUIFile = false;
clazz.hasLocale = false;
clazz.hasConfig = false;
return clazz;
});

