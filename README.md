See WebApp Builder Developer Customized Documentation.rtf



Customized Esri WebApp Builder Developer Edition 2.12
By: Kevin MacLeod
Savannah Area Geographic Information System
Discussion: https://community.esri.com/thread/188438-kevins-custom-wab-widgets

I have added a lot of custom tweaks to the base product.

1.	 Turning on popups for all layers that are visible (popups are automatically on)
2.	Custom icons for tools (flat Esri style not legible)
3.	Custom CSS to show orange highlight on mousing over tool icons in Launchpad toolbar
4.	Layer List:  added metadata popup boxes (show Description from service/MXD instead of linking straight to REST page; more friendly for users); hooks for auto-expanding layers with example pattern
5.	Customized strings (replace the words Extent and some others, for plain language)
6.	Moving popups
7.	Search widget: click on result triggers popup
8.	My widgets; Pictometry, Google Earth


I wrote a user manual and series of YouTube training videos, which may be helpful for everyone!  You can take this Word document and modify it for your apps.  They’re included here in the repo.



Customizations to WebApp Builder files are commented at beginning and ending of code blocks as follows:
 ///////kevin m
..custom code here…  
////// kevin m

The customizations include:

CSS:

basemap widget > CSS file – make text labels smaller so they display two lines of text to font size 11

LaunchpadTheme\widgets\Header\css\style.css
LaunchpadTheme\Common.css
Index.html  (in <style> tag inline)   -> App State and popup customization in HTML and CSS
	(should be moved to separate CSS file)
Env.js (increase API version sometimes to jump ahead of WAB version )

Javascript:

App state popup text revision:
In jimu.js/nls/main.js modify title and restoreMap text
AppStatePopup.js  in \jimu.js\dijit    added Title to Close button


Turn on all popups:
jimu.js\LayerInfos\LayerInfoForDefaultService.js

Moving popups:
\jimu.js\utils.js

Widget.js in LaunchpadTheme\widgets\AnchorBarController     make margin around LaunchPad toolbar buttons at bottom bigger spaced TO DO making them BIGGER 

Widgets WAB 2.12

Search:   Widget.js  and      Style.css  file
customized min Chars to search Suggest
stopped suggest from working (but later commented out, now that we’re using featureLayer search)
customized Search picturemarker symbol


Layerlist:   popupmenu.js   AND PopupMenuInfo  (metadata boxes)
LayerListView.js  (click on layers to auto expand)


Screening widget:
Style.css in CSS folder
Strings.js in nls folder

Anchorbarcontroller:  (in themes/launchpad/widgets/anchorbarcontroller/widget.js)
Make it wider so all widgets fit in across screen 

Infographic:  put note to use eSearch:
widget.html   inserted Divs and images and text


Layerlist:
widget.html – add title attribute to say title="If layers are grey, zoom the map in to see them."

Esri widgets - Strings.js – changed the word extent wherever present to ‘area in map view’ and other strings to plain language

