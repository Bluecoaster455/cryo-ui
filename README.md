# ❄ Cryo UI
A vanilla JavaScript library to freeze certain elements of the user interface.

Demo soon...

## Installation

Add the css and the script files to your project:
```html
<html>
  <head>
    ...
    <link href="/path/to/index.css" type="text/css" rel="stylesheet"/>
  </head>
  <body>
    ...
    <script src="/path/to/index.js" type="text/javascript"></script>
  </body>
</html>
```
## Usage

### Basic

```javascript
// Freeze the entire user interface
CryoUI.freeze();

// Unfreeze all the user interface
CryoUI.unfreeze();

// Change de default options!
CryoUI.defaultOptions = {
  selector: "#my-selector",
  template: `<div style="font-weight:bold">My app</div><div>{{text}}</div>`,
  text: "Loading..."
}
```


## Options
These options are passed inside the CryoUI.freeze(options) function. Whatever is passed in the options parameter will merge with the defaultOptions.
```javascript
var options = {
  selector: "#my-selector", // Element to freeze
  template: "<div>My loader</div><div>{{text}}</div>", // Template to use as the wrapper for the text to display.
  text: "Loading..." // Text to display in the content.
}
```

### Examples

"instance" is the instatiation of Cryo returned by the CryoUI.freeze() method used to modify it for later freezing or calling instance.unfreeze().

```javascript
// Freeze the whole user interface
var instance = CryoUI.freeze();
```

```javascript
// Freeze #my-div
var instance = CryoUI.freeze({
  selector: "#my-div"
});
```

```javascript
// Freeze #my-div and put "Please wait..." as the text.
var instance = CryoUI.freeze({
  selector: "#my-div",
  text: "Please wait..."
});
```

```javascript
// Freeze #my-div. The end result in this example will be "<div class="my-custom-styles">Please wait...</div>"
var instance = CryoUI.freeze({
  selector: "#my-div",
  text: "Please wait...",
  template: `<div class="my-custom-styles">{{text}}</div>`
});
```

```javascript
// Freeze #my-div. The content will the content of #my-template including itself.
var instance = CryoUI.freeze({
  selector: "#my-div",
  template: document.querySelector("#my-template")
});
```

## Licence
Cryo UI is under [MIT licence](https://opensource.org/licenses/mit-license.php)