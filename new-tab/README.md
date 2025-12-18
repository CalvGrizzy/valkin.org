# ExtensionKit.io Starter Template

Template last updated: January 30, 2023

## Overview

This template comes ready with Manifest V3 support.

## Developing with the template

1. Navigate to `chrome://extensions` in your browser
2. Ensure `Developer mode` is `enabled` (top right)
3. Click `Load unpacked` in the top left
4. Select the folder for this extension template only

After completing the above steps, you should see the developer, unpacked version appear in your extension list as well as the extension icon appear in your browser bar alongside the other extensions you may have installed.

### Styling

There are temporary styles in `css/index.css`. This can be used or you can remove it and add your own entirely. Styles work like they would with any HTML page; you import the stylesheet in `index.html`. You can also add more stylesheets should you need them.

### JavaScript

There is JS code in `js/background.js` that defines how the background scripts work (see below). You can add more JS in here and reference it in `index.html` should you require it.

### Manifest

The manifest file is located in the root of the project in `manifest.json` and controls how the extension should behave.

### Extension icons

All extension icons live in the `/icons` folder in the root of the project. Any additional icon sizes you add in here can be referenced relative to an `icons` folder in the manifest like the following:

```json
"icons": {
  "128": "icons/icon.svg"
},
```

## Preparing to publish

To prepare this template for publishing, add all the contents of this folder to a `.zip` file, including the `manifest.json`. Keep in mind, with every new publish of the same extension, you will need to bump the manifest `version` number up.

## Manifest explained

The key sections of the manifest with this template are:

### Browser Action

```
  "action": {
    "default_icon": {
      "32": "icons/icon.svg"
    },
    "default_title": "Open New Tab"
  },=
```

This portion of the manifest is used to define how the browser action (extension icon) should behave. In this case, we don't define anything other than the icon and the title, as the clicking action will be handled by the background script in `js/background.js`.

### Background Scripts

```
"background": {
  "service_worker": "js/background.js"
}
```

This portion of the manifest tells the browser that we want to run some scripts in the background while this extension is enabled. In the case of this example template, the background script is there to listen for clicks on the extension icon and create a new tab pointing to `index.html`. The background script can be found in `js/background.js`.

### URL Override

```
"chrome_url_overrides": {
  "newtab": "index.html"
}
```

As you'd expect, this portion of the manifest is responsible for overriding the browser URL, specifically for the new tab. This tells Chrome that we want to display `index.html` when a user is on a new tab.

## Need additional help?

Check out the FAQs and documentation on the dashboard for additional help. If you're still having difficulties, please create a ticket.
