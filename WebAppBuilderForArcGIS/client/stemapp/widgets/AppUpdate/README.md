# Custom-WAB-widget-AppUpdate
Create a custom widget that creates a cookie on the client. The cookie stores your app version number(whatever you want that to be) on the client.

When the widget loads it checks for the presence of the cookie, if the cookie is not present, create one and reload app from server.
If the cookie exists, compare version numbers, and if different, reload app from server
