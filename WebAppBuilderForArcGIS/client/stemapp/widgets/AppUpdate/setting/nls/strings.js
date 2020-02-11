define({
    root: ({
        versionTextBoxLabel: "App Version:",
        instructions: "Ensure this widget is disabled when changing the version.",
        instructionListLabel: "Steps:",
        instructionList: {
            one: "Change the version.",
            two: "Save the app.",
            three: "Enable the widget. (This will make the app reload and the widget will become disabled.)",
            four: "Enable the widget again.",
            five: "Save the app again."
        },
        descriptionLabel: "How it works:",
        description: "Three scenarios:",
        descriptionList: {
            one: {
                heading: "The user has started a new browser session and loads the app for the first time.",
                description: "In this case, the widget will create a cookie on the user's PC that stores the app version." + 
                    " The widget will then load the latest app files from the server."
            },
            two: {
                heading: "The user has a browser session open with the app loaded, then reloads the app.",
                description: "In this case, the widget will read the cookie on the user's PC that stores the app version." +
                    " If the version on the PC is different from the latest version, the widget will reload" +
                    " the latest app files from the server."
            },
            three: {
                heading: "The user has had the app loaded in the current browser session and has unloaded the app, then reloads it in the same session.",
                description: "The widget will execute the same steps as in the second scenario."
            }
        }

    })
});