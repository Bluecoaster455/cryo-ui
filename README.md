# Cryo UI
Cryo UI is a javascript library to freeze elements of the user interface. No jQuery used.

## Installation

Add the css and the script to your project:
```html
<html>
  <head>
    ...
    <link href="/path/to/cryo-ui.min.css" type="text/css" rel="stylesheet"/>
  </head>
  <body>
    ...
    <script src="/path/to/cryo-ui.min.js" type="text/javascript"></script>
  </body>
</html>
```
## Usage

### Basic

```javascript
// Freeze the UI
FreezeUI();

// Un Freeze the UI 
UnFreezeUI();
```


## Options
You can set some options when calling the FreezeUI function.

Param | Type | Default | Details
------------ | ------------- | ------------- | -------------
text | `string` | Loading | The text to be displayed. 
selector | `string` | <body> of the document | The loading can be applied only to an element, as long as the element has position absolute or fixed.

### Examples
```javascript
FreezeUI(); // To simply freeze the whole page
FreezeUI({ text: 'Custom text' }); // Freeze with a custom text
FreezeUI({ selector: '.class-name' }); // Freeze a certain component.
FreezeUI({ selector: '#id-name' }); // The component must have position: fixed or absolute to work
FreezeUI({ selector: '.component', text: 'Getting there...' }) // Using both options at the same time. 
UnFreezeUI(); // Will unfreeze any and all options from above
```

## Licence
Cryo UI is under [MIT licence](https://opensource.org/licenses/mit-license.php)