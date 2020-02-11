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
define(["dojo/_base/declare",
  "jimu/BaseWidget",
  "./BAWizard"

],
  function (declare, BaseWidget, BAWizard) {
    return declare([BaseWidget], {

      name: "BusinessAnalyst",
      baseClass: "jimu-widget-business-analyst",
      reportDropDown: null,
      infographicDropDown: null,
      tradeAreaGraphics: [], // The trade area graphics on the map for the specified point, we remove and only keep track of last created Rings/DT/WT's
      
      // selectedPoint:
      //   tradeAreas: []
      //     {
      //       name - passed to infographics ReportPlayer
      //       shortName - passed to infographics ReportPlayer
      //       graphic - actual graphic that is on the map, passed to ReportPlayer, and createReport
      //     }
      selectedPoint: {
        tradeAreas: []
      },

      postCreate: function () {
        this.inherited(arguments);

        this.baWizard = new BAWizard({
          map: this.map,
          nls: this.nls,
          config: this.config
        }).placeAt(this.wizardContainer);
      },

      onClose: function() {
        // Clear any selected feature when widget is closed.  This will remove any graphics on the map as well
        this.baWizard._featureUnselected();
      },

      onOpen: function() {
        this.baWizard.refreshPage();
      }
    });
  });
