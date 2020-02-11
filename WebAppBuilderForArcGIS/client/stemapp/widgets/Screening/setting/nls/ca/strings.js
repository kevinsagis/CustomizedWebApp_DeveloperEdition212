///////////////////////////////////////////////////////////////////////////
// Copyright © 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "feetUnit": "Peus o peus quadrats",
    "milesUnit": "Milles o acres",
    "metersUnit": "Metres o metres quadrats",
    "kilometersUnit": "Quilòmetres o quilòmetres quadrats",
    "hectaresUnit": "Quilòmetres o hectàrees"
  },
  "analysisTab": {
    "analysisTabLabel": "Anàlisi",
    "selectAnalysisLayerLabel": "Seleccioneu les capes d'anàlisi",
    "addLayerLabel": "Afegiu capes",
    "noValidLayersForAnalysis": "No s'han trobat capes vàlides al mapa web seleccionat.",
    "noValidFieldsForAnalysis": "No s'han trobat camps vàlids al mapa web seleccionat. Elimineu la capa seleccionada.",
    "addLayersHintText": "Suggeriment: seleccioneu les capes i els camps que vulgueu analitzar i mostrar a l'informe",
    "addLayerNameTitle": "Nom de la capa",
    "addFieldsLabel": "Afegeix un camp",
    "addFieldsPopupTitle": "Seleccioneu els camps",
    "addFieldsNameTitle": "Noms de camp",
    "aoiToolsLegendLabel": "Eines AOI",
    "aoiToolsDescriptionLabel": "Habiliteu les eines per crear àrees d'interès i especifiqueu-ne les etiquetes",
    "placenameLabel": "Nom de lloc",
    "drawToolsLabel": "Eines de dibuix",
    "uploadShapeFileLabel": "Puja un fitxer shapefile",
    "coordinatesLabel": "Coordenades",
    "coordinatesDrpDwnHintText": "Suggeriment: seleccioneu una unitat per visualitzar els itineraris introduïts",
    "coordinatesBearingDrpDwnHintText": "Suggeriment: Seleccioneu un rumb per visualitzar els itineraris introduïts",
    "allowShapefilesUploadLabel": "Permet pujar fitxers shapefile a l'anàlisi",
    "allowShapefilesUploadLabelHintText": "Suggeriment: mostreu \"Puja un fitxer shapefile a l'anàlisi\" a la pestanya Informe",
    "allowVisibleLayerAnalysisLabel": "No analitzis ni notifiquis els resultats de capes no visibles",
    "allowVisibleLayerAnalysisHintText": "Suggeriment: les capes que s'han desactivat o no són visibles a causa de la configuració de visibilitat de l'escala no s'analitzaran ni s'inclouran als resultats que es baixin o imprimeixin.",
    "areaUnitsLabel": "Mostra els resultats de l'anàlisi a",
    "maxFeatureForAnalysisLabel": "Nombre màxim d'entitats per a l'anàlisi",
    "maxFeatureForAnalysisHintText": "Suggeriment: definiu el nombre màxim d'entitats per a l'anàlisi",
    "searchToleranceLabelText": "Tolerància de cerca",
    "searchToleranceHint": "Suggeriment: la tolerància de cerca només es fa servir quan s'analitzen entrades de punt i de línia",
    "placenameButtonText": "Nom de lloc",
    "drawToolsButtonText": "Dibuixa",
    "shapefileButtonText": "Shapefile",
    "coordinatesButtonText": "Coordenades",
    "invalidLayerErrorMsg": "Configureu els camps de"
  },
  "downloadTab": {
    "downloadLegend": "Configuració de baixada",
    "reportLegend": "Configuració d'informe",
    "downloadTabLabel": "Baixa",
    "syncEnableOptionLabel": "Capes d'entitats",
    "syncEnableOptionHint": "Suggeriment: s'utilitza per baixar informació d'entitats per a les entitats que s'intersequen amb l'àrea d'interès en els formats indicats.",
    "syncEnableOptionNote": "Nota: els serveis d'entitats amb la sincronització habilitada són necessaris per a les opcions Geobase de dades de fitxers i Shapefile. El format Shapefile només és compatible amb les capes d'entitats allotjades de l'ArcGIS Online.",
    "extractDataTaskOptionLabel": "Servei de geoprocessament Tasca d'extracció de dades",
    "extractDataTaskOptionHint": "Suggeriment: utilitzeu un servei de geoprocessament Tasca d'extracció de dades publicat per baixar les entitats que s'intersequen amb l'àrea d'interès en els formats Geodatabase de fitxers o Shapefile.",
    "cannotDownloadOptionLabel": "Deshabilita la baixada",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Nom de la capa",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Geobase de dades de fitxers",
      "ShapefileFormatLabel": "Shapefile",
      "allowDownloadLabel": "Permet la baixada"
    },
    "setButtonLabel": "Defineix",
    "GPTaskLabel": "Especifiqueu l'adreça URL del servei de geoprocessament",
    "printGPServiceLabel": "URL del servei d'impressió",
    "setGPTaskTitle": "Especifiqueu l'adreça URL del servei de geoprocessament requerit",
    "logoLabel": "Logotip",
    "logoChooserHint": "Suggeriment: feu clic a la icona de la imatge per canviar la imatge",
    "footnoteLabel": "Nota a peu de pàgina",
    "columnTitleColorPickerLabel": "Color per als títols de les columnes",
    "reportTitleLabel": "Títol de l'informe",
    "errorMessages": {
      "invalidGPTaskURL": "Servei de geoprocessament no vàlid. Seleccioneu un servei de geoprocessament que contingui Tasca d'extracció de dades.",
      "noExtractDataTaskURL": "Seleccioneu qualsevol servei de geoprocessament que contingui Tasca d'extracció de dades.",
      "duplicateCustomOption": "Ja existeix una entrada duplicada de ${duplicateValueSizeName}.",
      "invalidLayoutWidth": "Amplada no vàlida introduïda per a ${customLayoutOptionValue}.",
      "invalidLayoutHeight": "Altura no vàlida introduïda per a ${customLayoutOptionValue}.",
      "invalidLayoutPageUnits": "Unitat de pàgina no vàlida seleccionada per a ${customLayoutOptionValue}.",
      "failtofetchbuddyTaskDimension": "Error en recuperar la informació de dimensió de la tasca de suport. Torneu-ho a provar.",
      "failtofetchbuddyTaskName": "Error en recuperar el nom de la tasca de suport. Torneu-ho a provar.",
      "failtofetchChoiceList": "Error en recuperar la llista d'opcions del servei d'impressió. Torneu-ho a provar.",
      "invalidWidth": "Amplada no vàlida.",
      "invalidHeight": "Altura no vàlida."
    },
    "addCustomLayoutTitle": "Afegeix un disseny personalitzat",
    "customLayoutOptionHint": "Suggeriment: afegiu una opció de disseny personalitzat del vostre servei d'impressió a les opcions d'impressió.",
    "reportDefaultOptionLabel": "Disseny per defecte",
    "pageSizeUnits": {
      "millimeters": "Mil·límetres",
      "points": "Punts"
    }
  },
  "generalTab": {
    "generalTabLabel": "General",
    "tabLabelsLegend": "Etiquetes de subfinestra",
    "tabLabelsHint": "Suggeriment: especifiqueu les etiquetes",
    "AOITabLabel": "Subfinestra Àrea d'interès",
    "ReportTabLabel": "Subfinestra Informe",
    "bufferSettingsLegend": "Configuració de l'àrea d'influència",
    "defaultBufferDistanceLabel": "Distància d'àrea d'influència per defecte",
    "defaultBufferUnitsLabel": "Unitats d'àrea d'influència",
    "generalBufferSymbologyHint": "Suggeriment: definiu la simbologia que s'ha d'utilitzar per mostrar les àrees d'influència al voltant de les àrees d'interès definides",
    "aoiGraphicsSymbologyLegend": "Simbologia de gràfics d'AOI",
    "aoiGraphicsSymbologyHint": "Suggeriment: definiu la simbologia que s'ha d'utilitzar en definir àrees d'interès de punt, línia i polígon",
    "pointSymbologyLabel": "Punt",
    "previewLabel": "Visualització prèvia",
    "lineSymbologyLabel": "Línia",
    "polygonSymbologyLabel": "Polígon",
    "aoiBufferSymbologyLabel": "Simbologia d'àrea d'influència",
    "pointSymbolChooserPopupTitle": "Símbol d'adreça o ubicació",
    "polygonSymbolChooserPopupTitle": "Seleccioneu el símbol per ressaltar el polígon",
    "lineSymbolChooserPopupTitle": "Seleccioneu el símbol per ressaltar la línia",
    "aoiSymbolChooserPopupTitle": "Defineix el símbol d'àrea d'influència",
    "aoiTabText": "AOI",
    "reportTabText": "Informe",
    "invalidSymbolValue": "Valor de símbol no vàlid."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Configuració de l'origen de la cerca",
    "searchSourceSettingTitle": "Configuració de l'origen de la cerca",
    "searchSourceSettingTitleHintText": "Afegiu i configureu serveis de geocodificació o capes d'entitats com a orígens de cerca. Aquests orígens especificats determinen què es pot cercar al quadre de cerca.",
    "addSearchSourceLabel": "Afegeix un origen de cerca",
    "featureLayerLabel": "Capa d'entitats",
    "geocoderLabel": "Geocodificador",
    "generalSettingLabel": "Configuració general",
    "allPlaceholderLabel": "Text del marcador de posició per cercar-ho tot:",
    "allPlaceholderHintText": "Suggeriment: introduïu el text que es mostrarà com a marcador de posició mentre cerqueu totes les capes i el geocodificador",
    "generalSettingCheckboxLabel": "Mostra la finestra emergent de l'entitat o la ubicació trobada",
    "countryCode": "Codis de país o regió",
    "countryCodeEg": "per exemple, ",
    "countryCodeHint": "Si aquest valor es deixa en blanc, la cerca es farà en tots els països i regions",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Cerca només a l'extensió de mapa actual",
    "zoomScale": "Escala de zoom",
    "locatorUrl": "URL del geocodificador",
    "locatorName": "Nom del geocodificador",
    "locatorExample": "Exemple",
    "locatorWarning": "Aquesta versió del servei de geocodificació no s'admet. El widget admet el servei de geocodificació 10.0 i versions posteriors.",
    "locatorTips": "Els suggeriments no estan disponibles perquè el servei de geocodificació no admet la funció de suggeriments.",
    "layerSource": "Origen de la capa",
    "setLayerSource": "Defineix l'origen de la capa",
    "setGeocoderURL": "Defineix la URL del geocodificador",
    "searchLayerTips": "Els suggeriments no estan disponibles perquè el servei d'entitats no admet la funció de paginació.",
    "placeholder": "Text del marcador de posició",
    "searchFields": "Camps de cerca",
    "displayField": "Camp que es mostra",
    "exactMatch": "Coincidència exacta",
    "maxSuggestions": "Màxim de suggeriments",
    "maxResults": "Màxim de resultats",
    "enableLocalSearch": "Habilita la cerca local",
    "minScale": "Escala mínima",
    "minScaleHint": "Si l'escala del mapa és més gran que aquesta escala, s'aplicarà la cerca local",
    "radius": "Radi",
    "radiusHint": "Permet especificar el radi d'una àrea al voltant del centre del mapa actual que s'utilitzarà per millorar la classificació dels candidats de geocodificació per tal que es retornin primer aquells més propers a la ubicació",
    "setSearchFields": "Defineix els camps de cerca",
    "set": "Defineix",
    "invalidUrlTip": "L'adreça URL ${URL} no és vàlida o no s'hi pot accedir.",
    "invalidSearchSources": "Configuració de l'origen de la cerca no vàlida"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Empleneu els camps obligatoris",
    "bufferDistanceFieldsErrorMsg": "Introduïu valors vàlids",
    "invalidSearchToleranceErrorMsg": "Introduïu un valor vàlid per a la tolerància de cerca",
    "atLeastOneCheckboxCheckedErrorMsg": "Configuració no vàlida: es necessita una eina d'AOI com a mínim.",
    "noLayerAvailableErrorMsg": "No hi ha capes disponibles",
    "layerNotSupportedErrorMsg": "No compatible ",
    "noFieldSelected": "Utilitzeu l'acció Edita per seleccionar els camps per a l'anàlisi.",
    "duplicateFieldsLabels": "S'ha afegit una etiqueta duplicada \"${labelText}\" per a: \"${itemNames}\"",
    "noLayerSelected": "Seleccioneu almenys una capa per a l'anàlisi",
    "errorInSelectingLayer": "No es pot completar l'operació de selecció de la capa. Torneu a intentar-ho.",
    "errorInMaxFeatureCount": "Introduïu un recompte màxim d'entitats vàlid per a l'anàlisi."
  }
});